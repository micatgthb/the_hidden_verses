import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz – The Hidden Verses",
  description: "Datenschutzhinweise für die Website The Hidden Verses.",
  alternates: { canonical: "/datenschutz/" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="wordmark" href="/" aria-label="The Hidden Verses – Startseite">
          <span>Baltic Lounge Lizard</span>
          <strong>The Hidden Verses</strong>
        </Link>
        <Link className="legal-back" href="/">← Zur Website</Link>
      </header>

      <article className="legal-content">
        <p className="section-no">Rechtliches</p>
        <h1>Datenschutz</h1>
        <p className="legal-lead">
          Diese Hinweise erklären, welche personenbezogenen Daten beim Besuch dieser Website
          und bei der Anmeldung zu den Album-Updates verarbeitet werden.
        </p>

        <section>
          <h2>1. Verantwortlicher</h2>
          <p>
            Michael Bollow · SomeSwans Records<br />
            Dreiecksplatz 9 · 24103 Kiel<br />
            Telefon: <a href="tel:+4915115777581">0151 15 777 581</a><br />
            E-Mail: <a href="mailto:info@someswans.de">info@someswans.de</a>
          </p>
        </section>

        <section>
          <h2>2. Bereitstellung und Hosting der Website</h2>
          <p>
            Beim Aufruf der Website verarbeitet der Webserver technisch erforderliche
            Verbindungsdaten. Dazu können IP-Adresse, Datum und Uhrzeit, aufgerufene Datei,
            übertragene Datenmenge, Referrer, Browser und Betriebssystem gehören.
          </p>
          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser
            berechtigtes Interesse liegt im sicheren und störungsfreien Betrieb der Website
            sowie in der Abwehr von Missbrauch. Protokolldaten werden gelöscht, sobald sie
            für diese Zwecke nicht mehr erforderlich sind, sofern keine gesetzlichen
            Aufbewahrungspflichten oder sicherheitsrelevanten Gründe entgegenstehen.
          </p>
          <p>
            Für das Webhosting setzen wir die STRATO GmbH, Otto-Ostrowski-Straße 7,
            10249 Berlin, als technischen Dienstleister ein. Der Dienstleister verarbeitet
            die erforderlichen Daten in unserem Auftrag.
          </p>
        </section>

        <section>
          <h2>3. Album-Updates per E-Mail</h2>
          <p>
            Wenn du dich für Album-Updates anmeldest, verarbeiten wir deine E-Mail-Adresse,
            den Anmelde- und Bestätigungsstatus sowie die Zeitpunkte der Anmeldung und
            Bestätigung. Die Anmeldung wird erst wirksam, nachdem du sie über den Link in
            der Bestätigungs-E-Mail bestätigt hast (Double-Opt-in).
          </p>
          <p>
            Rechtsgrundlage ist deine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Die
            Protokollierung der Anmeldung und Bestätigung dient außerdem dem Nachweis der
            Einwilligung gemäß Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt
            im rechtssicheren Nachweis einer ordnungsgemäßen Anmeldung.
          </p>
          <p>
            Für den E-Mail-Versand nutzen wir die STRATO GmbH, Otto-Ostrowski-Straße 7,
            10249 Berlin, als technischen Dienstleister. Die Versand-E-Mails enthalten keine
            Zählpixel; Öffnungen und Klicks werden von uns nicht ausgewertet.
          </p>
          <p>
            Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft über den
            Abmeldelink in jeder Nachricht oder per E-Mail an
            <a href="mailto:info@someswans.de"> info@someswans.de</a> widerrufen. Nach der
            Abmeldung wird deine Adresse aus dem aktiven Verteiler entfernt, soweit keine
            gesetzlichen Pflichten oder die erforderliche Dokumentation eines Widerspruchs
            eine begrenzte weitere Speicherung rechtfertigen.
          </p>
        </section>

        <section>
          <h2>4. Kontakt per E-Mail</h2>
          <p>
            Wenn du uns per E-Mail kontaktierst, verarbeiten wir die von dir übermittelten
            Angaben zur Bearbeitung deiner Nachricht. Bei vertragsbezogenen Anfragen ist
            Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage. Bei sonstigen Nachrichten beruht
            die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist
            die sachgerechte Kommunikation mit Interessierten.
          </p>
          <p>
            Wir löschen die Angaben, wenn deine Anfrage abschließend bearbeitet ist und keine
            gesetzlichen Aufbewahrungsfristen oder berechtigten Gründe für eine weitere
            Speicherung bestehen.
          </p>
        </section>

        <section>
          <h2>5. Cookies, Analyse und eingebundene Inhalte</h2>
          <p>
            Diese öffentliche Website verwendet keine Analyse- oder Marketingdienste und
            setzt keine dafür bestimmten Cookies ein. Die Songs und Bilder werden direkt von
            unserem eigenen Webserver ausgeliefert. Beim Abspielen der Musik wird keine
            Verbindung zu SoundCloud, Spotify oder anderen Audio-Plattformen hergestellt.
            Ein Consent-Banner ist für den gegenwärtigen technischen Stand daher nicht
            erforderlich.
          </p>
          <p>
            Links zu externen Websites werden erst aufgerufen, wenn du sie anklickst. Ab
            diesem Zeitpunkt gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
          </p>
        </section>

        <section>
          <h2>6. Empfänger und Auftragsverarbeitung</h2>
          <p>
            Technische Dienstleister für Webhosting und E-Mail können personenbezogene Daten
            in unserem Auftrag verarbeiten. Sie erhalten nur die Daten, die sie zur Erbringung
            ihrer jeweiligen Leistung benötigen. Eine weitere Weitergabe erfolgt nur, wenn
            sie gesetzlich erlaubt oder vorgeschrieben ist.
          </p>
        </section>

        <section>
          <h2>7. Deine Rechte</h2>
          <p>
            Du hast nach Maßgabe der DSGVO das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung und Datenübertragbarkeit. Einer Verarbeitung auf
            Grundlage berechtigter Interessen kannst du aus Gründen widersprechen, die sich
            aus deiner besonderen Situation ergeben. Eine erteilte Einwilligung kannst du
            jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p>
            Außerdem kannst du dich bei einer Datenschutzaufsichtsbehörde beschweren. Für
            Schleswig-Holstein ist das <a href="https://www.datenschutzzentrum.de/" target="_blank" rel="noreferrer">Unabhängige Landeszentrum für Datenschutz Schleswig-Holstein</a> zuständig.
          </p>
        </section>

        <section>
          <h2>8. Verschlüsselung</h2>
          <p>
            Diese Website wird über eine verschlüsselte HTTPS-Verbindung bereitgestellt.
          </p>
        </section>

        <p className="legal-updated">Stand: August 2026</p>
      </article>

      <footer className="legal-footer">
        <strong>The Hidden Verses</strong>
        <div className="legal-footer-links">
          <Link href="/impressum/">Impressum</Link>
          <Link href="/datenschutz/">Datenschutz</Link>
        </div>
      </footer>
    </main>
  );
}
