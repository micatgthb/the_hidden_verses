<?php
declare(strict_types=1);
require __DIR__ . '/newsletter-common.php';

try {
    $config = newsletterConfig();
    $id = (string) ($_GET['id'] ?? '');
    $token = (string) ($_GET['token'] ?? '');
    $expected = newsletterSignature($id, (string) $config['signing_secret'], 'confirm');
    if (!$id || !hash_equals($expected, $token)) newsletterPage('Link ungültig', 'Dieser Bestätigungslink ist nicht gültig.');
    $data = newsletterRead($config);
    if (!isset($data['subscribers'][$id])) newsletterPage('Anmeldung nicht gefunden', 'Bitte registriere dich erneut.');
    $data['subscribers'][$id]['status'] = 'active';
    $data['subscribers'][$id]['confirmed_at'] = gmdate('c');
    newsletterWrite($config, $data);
    newsletterPage('Anmeldung bestätigt', 'Du erhältst künftig ausgewählte Neuigkeiten zu The Hidden Verses. Kleine Website-Aktualisierungen bleiben still.');
} catch (Throwable $error) {
    error_log('Hidden Verses newsletter confirmation: ' . $error->getMessage());
    newsletterPage('Bestätigung nicht möglich', 'Bitte versuche es später erneut.');
}
