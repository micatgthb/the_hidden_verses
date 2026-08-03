<?php
// Auf dem Server als /var/www/vhosts/someswans.de/private/thehiddenverses-mail-config.php anlegen.
return [
    'host' => 'smtp.strato.de',
    'port' => 465,
    'username' => 'info@someswans.de',
    'password' => 'DEIN_STRATO_POSTFACH_PASSWORT',
    'from' => 'info@someswans.de',
    'signing_secret' => 'MINDESTENS_32_ZUFÄLLIGE_ZEICHEN',
];
