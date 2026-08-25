import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – The Hidden Verses",
  description: "Anbieterkennzeichnung für The Hidden Verses von Baltic Lounge Lizard.",
  alternates: { canonical: "/impressum/" },
  robots: { index: false, follow: true },
};

export default function ImprintPage() {
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
        <h1>Impressum</h1>

        <section>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            SomeSwans Records<br />
            Inhaber: Michael Bollow<br />
            Dreiecksplatz 9<br />
            24103 Kiel<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+4915115777581">0151 15 777 581</a><br />
            E-Mail: <a href="mailto:info@someswans.de">info@someswans.de</a>
          </p>
        </section>

        <section>
          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
            DE363384191
          </p>
        </section>

        <section>
          <h2>Verantwortlich für den Inhalt</h2>
          <p>
            Verantwortlich gemäß § 18 Abs. 2 MStV:<br />
            Michael Bollow<br />
            Dreiecksplatz 9<br />
            24103 Kiel
          </p>
        </section>

        <p className="legal-updated">Stand: August 2026</p>
      </article>

      <LegalFooter />
    </main>
  );
}

function LegalFooter() {
  return (
    <footer className="legal-footer">
      <strong>The Hidden Verses</strong>
      <div className="legal-footer-links">
        <Link href="/impressum/">Impressum</Link>
        <Link href="/datenschutz/">Datenschutz</Link>
      </div>
    </footer>
  );
}
