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
