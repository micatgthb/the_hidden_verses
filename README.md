# The Hidden Verses

Begleitende Website zum Jazzalbum **The Hidden Verses** von Baltic Lounge Lizard.

## Lokal entwickeln

```bash
npm install
npm run dev
```

## Veröffentlichung

Ein Push auf `main` startet den GitHub-Workflow. Er erstellt die statische Website
und veröffentlicht ausschließlich das fertige Ergebnis im Branch
`plesk-production`. Dieser Branch ist für die Einbindung in Plesk vorgesehen.

Der lokale Produktionsbuild lässt sich mit `npm run build:plesk` prüfen.
