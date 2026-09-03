<?php
declare(strict_types=1);
require __DIR__ . '/newsletter-common.php';

try {
    $config = newsletterConfig();
    $id = (string) ($_GET['id'] ?? '');
    $token = (string) ($_GET['token'] ?? '');
    $expected = newsletterSignature($id, (string) $config['signing_secret'], 'unsubscribe');
    if (!$id || !hash_equals($expected, $token)) newsletterPage('Link ungültig', 'Dieser Abmeldelink ist nicht gültig.');
    $data = newsletterRead($config);
    unset($data['subscribers'][$id]);
    newsletterWrite($config, $data);
    newsletterPage('Erfolgreich abgemeldet', 'Deine E-Mail-Adresse wurde aus dem Verteiler gelöscht.');
} catch (Throwable $error) {
    error_log('Hidden Verses newsletter unsubscribe: ' . $error->getMessage());
    newsletterPage('Abmeldung nicht möglich', 'Bitte schreibe an info@someswans.de.');
}
