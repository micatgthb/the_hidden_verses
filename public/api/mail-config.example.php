<?php
// Auf dem Server als /var/www/vhosts/someswans.de/private/thehiddenverses-mail-config.php anlegen.
return [
    'host' => 'smtp.strato.de',
    'port' => 465,
    'username' => 'info@someswans.de',
    'password' => 'DEIN_STRATO_POSTFACH_PASSWORT',
    'from' => 'info@someswans.de',
    'signing_secret' => 'MINDESTENS_32_ZUFÄLLIGE_ZEICHEN',
    // Erzeugen mit: php -r "echo password_hash('DEIN-PASSWORT', PASSWORD_DEFAULT), PHP_EOL;"
    'admin_password_hash' => 'HIER_DEN_PASSWORT_HASH_EINTRAGEN',
];
