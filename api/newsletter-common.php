<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/vendor/autoload.php';

function newsletterConfig(): array
{
    $path = dirname(__DIR__, 2) . '/private/thehiddenverses-mail-config.php';
    if (!is_file($path)) {
        throw new RuntimeException('Newsletter configuration missing.');
    }
    $config = require $path;
    if (!is_array($config) || empty($config['username']) || empty($config['password']) || empty($config['signing_secret'])) {
        throw new RuntimeException('Newsletter configuration incomplete.');
    }
    $config['storage'] ??= dirname(__DIR__, 2) . '/private/thehiddenverses-subscribers.json';
    return $config;
}

function newsletterRead(array $config): array
{
    $path = (string) $config['storage'];
    if (!is_file($path)) return ['subscribers' => [], 'sent_releases' => []];
    if (!is_readable($path)) throw new RuntimeException('Newsletter storage is not readable.');
    $data = json_decode((string) file_get_contents($path), true);
    if (!is_array($data)) throw new RuntimeException('Newsletter storage is invalid.');
    return array_merge(['subscribers' => [], 'sent_releases' => []], $data);
}

function newsletterWrite(array $config, array $data): void
{
    $path = (string) $config['storage'];
    $dir = dirname($path);
    if (!is_dir($dir)) mkdir($dir, 0700, true);
    $owner = is_file($path) ? fileowner($path) : false;
    $group = is_file($path) ? filegroup($path) : false;
    $tmp = $path . '.tmp';
    file_put_contents($tmp, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);
    chmod($tmp, 0600);
    rename($tmp, $path);
    if ($owner !== false) @chown($path, $owner);
    if ($group !== false) @chgrp($path, $group);
}

function newsletterMailer(array $config): PHPMailer
{
    $mailer = new PHPMailer(true);
    $mailer->isSMTP();
    $mailer->Host = (string) ($config['host'] ?? 'smtp.strato.de');
    $mailer->Port = (int) ($config['port'] ?? 465);
    $mailer->SMTPAuth = true;
    $mailer->Username = (string) $config['username'];
    $mailer->Password = (string) $config['password'];
    $mailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mailer->CharSet = PHPMailer::CHARSET_UTF8;
    $mailer->Timeout = 15;
    $mailer->setFrom((string) ($config['from'] ?? 'info@someswans.de'), 'The Hidden Verses');
    return $mailer;
}

function newsletterId(string $email): string
{
    return rtrim(strtr(base64_encode(strtolower($email)), '+/', '-_'), '=');
}

function newsletterSignature(string $id, string $secret, string $purpose): string
{
    return hash_hmac('sha256', $purpose . ':' . $id, $secret);
}

function newsletterPage(string $title, string $message): never
{
    header('Content-Type: text/html; charset=UTF-8');
    $safeTitle = htmlspecialchars($title, ENT_QUOTES, 'UTF-8');
    $safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    echo '<!doctype html><html lang="de"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>' . $safeTitle . '</title>';
    echo '<style>body{margin:0;background:#ede8de;color:#191817;font:18px/1.6 Georgia,serif;display:grid;min-height:100vh;place-items:center}.card{max-width:620px;margin:30px;padding:60px;background:#f7f2e8;border-top:5px solid #a2472e}h1{font-weight:400;font-size:44px;line-height:1.05}a{color:#a2472e}</style>';
    echo '<main class="card"><small>BALTIC LOUNGE LIZARD</small><h1>' . $safeTitle . '</h1><p>' . $safeMessage . '</p><p><a href="/">Zurück zu The Hidden Verses</a></p></main></html>';
    exit;
}
