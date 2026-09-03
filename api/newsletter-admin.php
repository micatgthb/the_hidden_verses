<?php
declare(strict_types=1);
require __DIR__ . '/newsletter-common.php';

header('X-Robots-Tag: noindex, nofollow', true);
header('Cache-Control: no-store, private');
header('X-Frame-Options: DENY');
header("Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'");

session_name('hidden_verses_admin');
session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/api/',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Strict',
]);
session_start();

function adminEscape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function adminPage(string $title, string $content): never
{
    $safeTitle = adminEscape($title);
    echo '<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">';
    echo '<title>' . $safeTitle . ' – The Hidden Verses</title><style>';
    echo ':root{--ink:#191817;--rust:#a2472e;--paper:#f7f2e8;--cream:#ede8de;--line:#c9c1b5}*{box-sizing:border-box}body{margin:0;background:var(--cream);color:var(--ink);font:16px/1.55 system-ui,sans-serif}main{width:min(920px,calc(100% - 32px));margin:40px auto 80px;background:var(--paper);padding:clamp(24px,5vw,60px);border-top:5px solid var(--rust)}h1,h2{font-family:Georgia,serif;font-weight:400}h1{font-size:clamp(38px,6vw,62px);line-height:1;margin:.2em 0 .6em}h2{margin-top:42px}small,.eyebrow{color:var(--rust);letter-spacing:.12em;text-transform:uppercase;font-size:11px}label{display:block;font-weight:650;margin:22px 0 7px}input[type=text],input[type=password],textarea{width:100%;padding:13px;border:1px solid var(--line);background:#fff;font:inherit}textarea{min-height:150px;resize:vertical}.note{min-height:95px}.subscriber{display:flex;gap:12px;align-items:center;padding:10px 0;border-bottom:1px solid var(--line)}button{margin-top:28px;padding:14px 20px;border:0;background:var(--rust);color:white;font-weight:700;cursor:pointer}.secondary{background:transparent;color:var(--rust);border:1px solid var(--rust);margin-right:10px}.preview{padding:24px;margin:24px 0;background:white;border:1px solid var(--line)}.personal{border-left:3px solid var(--rust);padding-left:18px;font-style:italic}.error{padding:12px 16px;background:#f5d9d2;color:#7b2517}.success{padding:12px 16px;background:#dce9d8;color:#24471d}ul{padding-left:22px}</style></head><body><main>';
    echo '<p class="eyebrow">Baltic Lounge Lizard · Newsletter</p><h1>' . $safeTitle . '</h1>' . $content . '</main></body></html>';
    exit;
}

function adminCsrf(): string
{
    if (empty($_SESSION['csrf'])) $_SESSION['csrf'] = bin2hex(random_bytes(24));
    return (string) $_SESSION['csrf'];
}

function adminRequireCsrf(): void
{
    $token = (string) ($_POST['csrf'] ?? '');
    if (!$token || !hash_equals((string) ($_SESSION['csrf'] ?? ''), $token)) {
        adminPage('Anfrage abgelehnt', '<p class="error">Die Sitzung ist abgelaufen. Bitte lade die Seite neu.</p>');
    }
}

try {
    $config = newsletterConfig();
    $passwordHash = (string) ($config['admin_password_hash'] ?? '');
    if (!$passwordHash || $passwordHash === 'HIER_DEN_PASSWORT_HASH_EINTRAGEN') {
        throw new RuntimeException('Admin password is not configured.');
    }

    if (isset($_POST['logout'])) {
        adminRequireCsrf();
        $_SESSION = [];
        session_destroy();
        adminPage('Abgemeldet', '<p>Die Admin-Sitzung wurde beendet.</p>');
    }

    if (empty($_SESSION['authenticated'])) {
        $error = '';
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            adminRequireCsrf();
            $password = (string) ($_POST['password'] ?? '');
            if (password_verify($password, $passwordHash)) {
                session_regenerate_id(true);
                $_SESSION['authenticated'] = true;
                $_SESSION['csrf'] = bin2hex(random_bytes(24));
                header('Location: /api/newsletter-admin.php', true, 303);
                exit;
            }
            usleep(750000);
            $error = '<p class="error">Das Passwort ist nicht korrekt.</p>';
        }
        adminPage('Newsletter-Login', $error . '<form method="post"><input type="hidden" name="csrf" value="' . adminEscape(adminCsrf()) . '"><label for="password">Admin-Passwort</label><input id="password" name="password" type="password" autocomplete="current-password" required><button type="submit">Anmelden</button></form>');
    }

    $data = newsletterRead($config);
    $activeRecords = array_filter($data['subscribers'], static fn($subscriber): bool => is_array($subscriber) && ($subscriber['status'] ?? '') === 'active');
    $active = array_filter($activeRecords, static fn(array $subscriber): bool => filter_var((string) ($subscriber['email'] ?? ''), FILTER_VALIDATE_EMAIL) !== false);
    $invalidActiveCount = count($activeRecords) - count($active);

    if (isset($_POST['edit'])) {
        adminRequireCsrf();
        header('Location: /api/newsletter-admin.php', true, 303);
        exit;
    }

    if (isset($_POST['send'])) {
        adminRequireCsrf();
        $draft = $_SESSION['newsletter_draft'] ?? null;
        if (!is_array($draft)) adminPage('Versand nicht möglich', '<p class="error">Die Vorschau ist abgelaufen. Bitte beginne erneut.</p>');

        $sentRecipients = [];
        $failedRecipients = [];
        $failedRecipientIds = [];
        foreach ($draft['recipients'] as $id) {
            $subscriber = $active[$id] ?? null;
            if (!$subscriber) {
                $failedRecipients[] = 'Ungültiger Empfängerdatensatz (ID: ' . (string) $id . ')';
                $failedRecipientIds[] = (string) $id;
                continue;
            }
            $email = (string) ($subscriber['email'] ?? '');
            try {
                $unsubscribeToken = newsletterSignature((string) $id, (string) $config['signing_secret'], 'unsubscribe');
                $unsubscribeUrl = 'https://thehiddenverses.someswans.de/api/unsubscribe.php?id=' . rawurlencode((string) $id) . '&token=' . rawurlencode($unsubscribeToken);
                $mail = newsletterMailer($config);
                $mail->addAddress($email);
                $mail->Subject = $draft['subject'];
                $mail->isHTML(true);
                $mainHtml = nl2br(adminEscape($draft['message']));
                $personalHtml = $draft['personal'] !== '' ? '<p style="border-left:3px solid #a2472e;padding-left:16px;font-style:italic">' . nl2br(adminEscape($draft['personal'])) . '</p>' : '';
                $mail->Body = '<h1>' . adminEscape($draft['heading']) . '</h1><p>' . $mainHtml . '</p>' . $personalHtml . '<p><a href="https://thehiddenverses.someswans.de/">Auf der Albumseite ansehen</a></p><hr><p><small><a href="' . adminEscape($unsubscribeUrl) . '">Album-Updates abbestellen</a></small></p>';
                $mail->AltBody = $draft['heading'] . "\n\n" . $draft['message'] . ($draft['personal'] !== '' ? "\n\n" . $draft['personal'] : '') . "\n\nhttps://thehiddenverses.someswans.de/\n\nAbmelden: " . $unsubscribeUrl;
                $mail->send();
                $sentRecipients[] = $email;
            } catch (Throwable $error) {
                error_log('Hidden Verses admin newsletter: ' . $error->getMessage());
                $failedRecipients[] = $email !== '' ? $email : 'Ungültiger Empfängerdatensatz (ID: ' . (string) $id . ')';
                $failedRecipientIds[] = (string) $id;
            }
        }
        if (!$failedRecipients && $sentRecipients) {
            $data['sent_releases'][] = (string) $draft['id'];
            newsletterWrite($config, $data);
            unset($_SESSION['newsletter_draft']);
        } else {
            $_SESSION['newsletter_draft']['recipients'] = $failedRecipientIds;
        }
        $list = $sentRecipients ? '<ul><li>' . implode('</li><li>', array_map('adminEscape', $sentRecipients)) . '</li></ul>' : '';
        $failed = $failedRecipients ? '<p class="error">Nicht versendet:</p><ul><li>' . implode('</li><li>', array_map('adminEscape', $failedRecipients)) . '</li></ul><p><a href="/api/newsletter-admin.php">Empfänger prüfen und erneut versuchen</a></p>' : '';
        $title = $failedRecipients ? 'Versand unvollständig' : 'Newsletter versendet';
        $statusClass = $sentRecipients ? 'success' : 'error';
        adminPage($title, '<p class="' . $statusClass . '">Erfolgreich an ' . count($sentRecipients) . ' Empfänger versendet.</p>' . $list . $failed);
    }

    if (isset($_POST['preview'])) {
        adminRequireCsrf();
        $subject = substr(str_replace(["\r", "\n"], ' ', trim((string) ($_POST['subject'] ?? ''))), 0, 180);
        $heading = substr(trim((string) ($_POST['heading'] ?? '')), 0, 180);
        $message = substr(trim((string) ($_POST['message'] ?? '')), 0, 5000);
        $personal = substr(trim((string) ($_POST['personal'] ?? '')), 0, 1000);
        $recipients = array_values(array_intersect(array_keys($active), array_map('strval', (array) ($_POST['recipients'] ?? []))));
        if ($subject === '' || $heading === '' || $message === '' || !$recipients) {
            adminPage('Eingaben prüfen', '<p class="error">Betreff, Überschrift, Haupttext und mindestens ein Empfänger sind erforderlich.</p><p><a href="/api/newsletter-admin.php">Zurück zum Entwurf</a></p>');
        }
        $draft = ['id' => 'web-' . gmdate('Ymd-His') . '-' . substr(hash('sha256', $subject . $message . implode(',', $recipients)), 0, 10), 'subject' => $subject, 'heading' => $heading, 'message' => $message, 'personal' => $personal, 'recipients' => $recipients];
        $_SESSION['newsletter_draft'] = $draft;
        $emails = array_map(static fn(string $id): string => (string) $active[$id]['email'], $recipients);
        $preview = '<div class="preview"><small>' . adminEscape($subject) . '</small><h2>' . adminEscape($heading) . '</h2><p>' . nl2br(adminEscape($message)) . '</p>' . ($personal !== '' ? '<p class="personal">' . nl2br(adminEscape($personal)) . '</p>' : '') . '<p><a>Auf der Albumseite ansehen</a></p></div>';
        $recipientList = '<p><strong>' . count($emails) . ' Empfänger:</strong></p><ul><li>' . implode('</li><li>', array_map('adminEscape', $emails)) . '</li></ul>';
        adminPage('Versand prüfen', $preview . $recipientList . '<form method="post"><input type="hidden" name="csrf" value="' . adminEscape(adminCsrf()) . '"><button class="secondary" type="submit" name="edit" value="1">Zurück und bearbeiten</button><button type="submit" name="send" value="1">Jetzt verbindlich versenden</button></form>');
    }

    $releasePath = dirname(__DIR__) . '/release-notification.json';
    $release = is_file($releasePath) ? json_decode((string) file_get_contents($releasePath), true) : [];
    $savedDraft = is_array($_SESSION['newsletter_draft'] ?? null) ? $_SESSION['newsletter_draft'] : null;
    $subject = (string) ($savedDraft['subject'] ?? $release['subject'] ?? 'Neuigkeiten zu The Hidden Verses');
    $heading = (string) ($savedDraft['heading'] ?? $release['heading'] ?? 'The Hidden Verses');
    $message = (string) ($savedDraft['message'] ?? $release['message'] ?? '');
    $personal = (string) ($savedDraft['personal'] ?? '');
    $selectedRecipients = $savedDraft['recipients'] ?? array_keys($active);
    $subscriberFields = '';
    foreach ($active as $id => $subscriber) {
        $checked = in_array((string) $id, $selectedRecipients, true) ? ' checked' : '';
        $subscriberFields .= '<label class="subscriber"><input type="checkbox" name="recipients[]" value="' . adminEscape((string) $id) . '"' . $checked . '> ' . adminEscape((string) $subscriber['email']) . '</label>';
    }
    if ($invalidActiveCount > 0) {
        $subscriberFields .= '<p class="error">' . $invalidActiveCount . ' aktiver Empfängerdatensatz enthält keine gültige E-Mail-Adresse und wurde ausgeschlossen.</p>';
    }
    if ($subscriberFields === '') $subscriberFields = '<p class="error">Es gibt derzeit keine bestätigten Abonnenten.</p>';
    $form = '<form method="post"><input type="hidden" name="csrf" value="' . adminEscape(adminCsrf()) . '"><label for="subject">Betreff</label><input id="subject" name="subject" type="text" maxlength="180" required value="' . adminEscape($subject) . '"><label for="heading">Überschrift</label><input id="heading" name="heading" type="text" maxlength="180" required value="' . adminEscape($heading) . '"><label for="message">Haupttext</label><textarea id="message" name="message" maxlength="5000" required>' . adminEscape($message) . '</textarea><label for="personal">Mein persönlicher Einschub <small>optional, 1–2 Sätze</small></label><textarea class="note" id="personal" name="personal" maxlength="1000" placeholder="Hier deinen persönlichen Satz ergänzen …">' . adminEscape($personal) . '</textarea><h2>Empfänger dieses Versands</h2>' . $subscriberFields . '<button type="submit" name="preview" value="1">Vorschau öffnen</button></form><form method="post"><input type="hidden" name="csrf" value="' . adminEscape(adminCsrf()) . '"><button class="secondary" type="submit" name="logout" value="1">Abmelden</button></form>';
    adminPage('Newsletter verfassen', $form);
} catch (Throwable $error) {
    error_log('Hidden Verses newsletter admin: ' . $error->getMessage());
    adminPage('Admin-Bereich nicht verfügbar', '<p class="error">Die Newsletter-Verwaltung ist noch nicht vollständig konfiguriert.</p>');
}
