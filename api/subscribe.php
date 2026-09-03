<?php
declare(strict_types=1);
require __DIR__ . '/newsletter-common.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') newsletterPage('Nicht möglich', 'Diese Anfrage ist nicht gültig.');
if (!empty($_POST['website'] ?? '')) newsletterPage('Fast geschafft', 'Bitte prüfe jetzt dein E-Mail-Postfach.');

$email = strtolower(trim((string) ($_POST['email'] ?? '')));
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254) {
    newsletterPage('E-Mail-Adresse prüfen', 'Bitte gib eine gültige E-Mail-Adresse ein.');
}

try {
    $config = newsletterConfig();
    $data = newsletterRead($config);
    $id = newsletterId($email);
    $subscriber = $data['subscribers'][$id] ?? null;
    if (($subscriber['status'] ?? '') === 'active') {
        newsletterPage('Bereits registriert', 'Diese E-Mail-Adresse erhält bereits Album-Updates.');
    }
    $data['subscribers'][$id] = [
        'email' => $email,
        'status' => 'pending',
        'requested_at' => gmdate('c'),
        'confirmed_at' => null,
        'consent_version' => 'album-updates-v1',
    ];
    newsletterWrite($config, $data);

    $token = newsletterSignature($id, (string) $config['signing_secret'], 'confirm');
    $url = 'https://thehiddenverses.someswans.de/api/confirm.php?id=' . rawurlencode($id) . '&token=' . rawurlencode($token);
    $mail = newsletterMailer($config);
    $mail->addAddress($email);
    $mail->Subject = 'Bitte bestätige deine Anmeldung – The Hidden Verses';
    $mail->isHTML(true);
    $mail->Body = '<p>Du möchtest Neuigkeiten zum Album <strong>The Hidden Verses</strong> erhalten.</p><p><a href="' . htmlspecialchars($url, ENT_QUOTES, 'UTF-8') . '">E-Mail-Adresse bestätigen</a></p><p>Wenn du dich nicht angemeldet hast, kannst du diese Nachricht ignorieren.</p>';
    $mail->AltBody = "Bitte bestätige deine Anmeldung:\n" . $url . "\n\nWenn du dich nicht angemeldet hast, ignoriere diese Nachricht.";
    $mail->send();
    newsletterPage('Bitte bestätige deine Anmeldung', 'Wir haben dir eine E-Mail geschickt. Erst nach einem Klick auf den Bestätigungslink erhältst du Album-Updates.');
} catch (Throwable $error) {
    error_log('Hidden Verses newsletter signup: ' . $error->getMessage());
    newsletterPage('Das hat noch nicht funktioniert', 'Bitte versuche es später erneut oder schreibe an info@someswans.de.');
}
