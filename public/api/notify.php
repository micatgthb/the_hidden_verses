<?php
declare(strict_types=1);
require __DIR__ . '/newsletter-common.php';

$config = newsletterConfig();
if (PHP_SAPI !== 'cli') {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(404); exit; }
    $providedKey = (string) ($_POST['deploy_key'] ?? '');
    $expectedKey = (string) ($config['deploy_secret'] ?? '');
    if (!$expectedKey || !hash_equals($expectedKey, $providedKey)) { http_response_code(404); exit; }
}

$releaseFile = dirname(__DIR__) . '/release-notification.json';
if (!is_file($releaseFile)) exit("No release notification.\n");
$release = json_decode((string) file_get_contents($releaseFile), true);
if (!is_array($release) || empty($release['enabled']) || empty($release['id'])) exit("Notifications disabled.\n");

$data = newsletterRead($config);
$releaseId = (string) $release['id'];
if (in_array($releaseId, $data['sent_releases'], true)) exit("Release already sent.\n");

$sent = 0;
foreach ($data['subscribers'] as $id => $subscriber) {
    if (($subscriber['status'] ?? '') !== 'active') continue;
    try {
        $unsubscribeToken = newsletterSignature((string) $id, (string) $config['signing_secret'], 'unsubscribe');
        $unsubscribeUrl = 'https://thehiddenverses.someswans.de/api/unsubscribe.php?id=' . rawurlencode((string) $id) . '&token=' . rawurlencode($unsubscribeToken);
        $mail = newsletterMailer($config);
        $mail->addAddress((string) $subscriber['email']);
        $mail->Subject = (string) ($release['subject'] ?? 'Neuigkeiten zu The Hidden Verses');
        $heading = htmlspecialchars((string) ($release['heading'] ?? 'The Hidden Verses'), ENT_QUOTES, 'UTF-8');
        $message = nl2br(htmlspecialchars((string) ($release['message'] ?? ''), ENT_QUOTES, 'UTF-8'));
        $url = htmlspecialchars((string) ($release['url'] ?? 'https://thehiddenverses.someswans.de/'), ENT_QUOTES, 'UTF-8');
        $mail->isHTML(true);
        $mail->Body = '<h1>' . $heading . '</h1><p>' . $message . '</p><p><a href="' . $url . '">Auf der Albumseite ansehen</a></p><hr><p><small><a href="' . htmlspecialchars($unsubscribeUrl, ENT_QUOTES, 'UTF-8') . '">Album-Updates abbestellen</a></small></p>';
        $mail->AltBody = ($release['heading'] ?? 'The Hidden Verses') . "\n\n" . ($release['message'] ?? '') . "\n\n" . ($release['url'] ?? 'https://thehiddenverses.someswans.de/') . "\n\nAbmelden: " . $unsubscribeUrl;
        $mail->send();
        $sent++;
    } catch (Throwable $error) {
        error_log('Hidden Verses newsletter send: ' . $error->getMessage());
    }
}

$data['sent_releases'][] = $releaseId;
newsletterWrite($config, $data);
echo "Sent to {$sent} subscribers.\n";
