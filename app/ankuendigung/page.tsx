import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Hidden Verses – Ein neues Jazzalbum entsteht",
  description:
    "Deutsche Gedichte werden zu neuen englischen Jazzsongs. Entdecke The Hidden Verses von Baltic Lounge Lizard.",
  alternates: { canonical: "/ankuendigung/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/ankuendigung/",
    title: "The Hidden Verses – Ein neues Jazzalbum entsteht",
    description: "Deutsche Gedichte, neu erzählt in englischen Jazzsongs.",
    images: [
      {
        url: "/the-hidden-verses-announcement.webp",
        width: 1731,
        height: 909,
        alt: "The Hidden Verses – Poetry, reimagined in jazz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hidden Verses – Ein neues Jazzalbum entsteht",
    description: "Deutsche Gedichte, neu erzählt in englischen Jazzsongs.",
    images: ["/the-hidden-verses-announcement.webp"],
  },
};

const firstPieces = [
  ["I", "Johann Wolfgang von Goethe", "A place for the night"],
  ["II", "Joseph von Eichendorff", "Where the Sky Comes Down"],
  ["III", "Heinrich Heine", "Springtime Feeling"],
  ["IV", "Heinrich Heine", "Under Different Skies"],
];

export default function AnnouncementPage() {
  return (
    <main className="announcement">
      <header className="announcement-header">
        <Link className="wordmark" href="/" aria-label="The Hidden Verses – Startseite">
          <span>Baltic Lounge Lizard</span>
          <strong>The Hidden Verses</strong>
        </Link>
        <Link className="announcement-back" href="/">Zum Albumprojekt ↗</Link>
      </header>

      <section className="announcement-hero">
        <div className="announcement-copy">
          <p className="eyebrow">Ein Album entsteht · 2026</p>
          <h1>Gedichte<br />werden <em>Jazz.</em></h1>
          <p className="announcement-lead">
            Deutsche Gedichte, verborgen in neuen englischen Jazzsongs. Keine
            Übersetzungen – musikalische Antworten.
          </p>
          <Link className="announcement-cta" href="/#pieces">Projekt entdecken <span>↘</span></Link>
        </div>
        <figure className="announcement-cover">
          <div aria-hidden="true" />
          <img src="/the-hidden-verses-cover.webp" alt="Albumcover The Hidden Verses" />
          <figcaption>Cover artwork · first edition</figcaption>
        </figure>
      </section>

      <section className="announcement-story">
        <p className="section-no">Die Idee</p>
        <div>
          <h2>Was bleibt von einem Gedicht, wenn seine Worte verschwinden?</h2>
          <p>
            <strong>The Hidden Verses</strong> folgt der emotionalen Bewegung
            ausgewählter deutscher Gedichte und erzählt sie in einer neuen Sprache,
            einer neuen Zeit und einer eigenen musikalischen Welt.
          </p>
          <p>
            Intimes Piano, warmer Kontrabass, Besen und ein lyrisches Tenorsaxophon
            tragen zehn geplante Verwandlungen. Die ersten vier Stücke sind bereits zu hören.
          </p>
        </div>
      </section>

      <section className="announcement-pieces">
        <div className="announcement-section-heading">
          <p className="section-no">Die ersten Stücke</p>
          <p>Vier von zehn geplanten Verwandlungen</p>
        </div>
        <ol>
          {firstPieces.map(([no, poet, title]) => (
            <li key={no}>
              <span>{no}</span>
              <p>{poet}</p>
              <strong>{title}</strong>
            </li>
          ))}
        </ol>
        <Link className="announcement-cta" href="/#pieces">Texte und Musik entdecken <span>↗</span></Link>
      </section>

      <section className="announcement-closing">
        <p className="eyebrow">Baltic Lounge Lizard presents</p>
        <h2>The Hidden <em>Verses</em></h2>
        <p>Poetry, reimagined in jazz.</p>
        <Link href="/">Zur vollständigen Albumseite <span>→</span></Link>
      </section>

      <footer className="announcement-footer">
        <div><strong>The Hidden Verses</strong><span>An album by Baltic Lounge Lizard</span></div>
        <Link href="/">thehiddenverses.someswans.de</Link>
      </footer>
    </main>
  );
}
