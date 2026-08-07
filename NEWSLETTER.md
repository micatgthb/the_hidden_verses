# Album-Updates

## Grundsatz

Normale Deployments versenden niemals E-Mails. Der Versand ist ausschließlich
über die Kommandozeile des Servers möglich. Jede Release-ID wird höchstens
einmal versendet.

## Ausgewähltes Update versenden

1. `public/release-notification.json` bewusst mit einer neuen eindeutigen ID,
   Betreff, Überschrift und Nachricht füllen und `enabled` auf `true` setzen.
2. Änderung committen, pushen und den fertigen `plesk-production`-Stand in
   Plesk deployen.
3. Erst nach ausdrücklicher Freigabe auf dem Server ausführen:

```bash
/opt/plesk/php/8.2/bin/php /var/www/vhosts/someswans.de/thehiddenverses.someswans.de/api/notify.php
```

Ein erneuter Aufruf mit derselben Release-ID versendet keine zweite Nachricht.

## Newsletter im Browser verfassen

Die geschützte Oberfläche liegt unter:

```text
https://thehiddenverses.someswans.de/api/newsletter-admin.php
```

Sie zeigt ausschließlich bestätigte Abonnenten. Die Auswahl gilt jeweils nur
für den aktuellen Versand; das Abwählen löscht oder deaktiviert niemanden.
Betreff, Überschrift, Haupttext und ein persönlicher Einschub lassen sich vor
dem Versand in einer Vorschau kontrollieren.

Vor der ersten Verwendung muss die private Serverkonfiguration
`/var/www/vhosts/someswans.de/private/thehiddenverses-mail-config.php` um
`admin_password_hash` ergänzt werden. Der Hash lässt sich im Plesk-Terminal
erzeugen:

```bash
/opt/plesk/php/8.2/bin/php -r "echo password_hash('DEIN-PASSWORT', PASSWORD_DEFAULT), PHP_EOL;"
```

Den ausgegebenen Hash als weiteren Eintrag in das Konfigurations-Array setzen:

```php
'admin_password_hash' => 'AUSGEGEBENER_HASH',
```
