const pieces = [
  {
    no: "I",
    poet: "Johann Wolfgang von Goethe",
    poem: "Wandrers Nachtlied II",
    title: "A place for the night",
    text: "Eine Reise endet nicht im Schlaf, sondern in einem Moment innerer Ruhe. Aus Goethes schwebender Schlusszeile wird eine moderne Erzählung vom Ankommen.",
    mood: "Abend · Einkehr · Stille",
  },
  {
    no: "II",
    poet: "Joseph von Eichendorff",
    poem: "Der Abend",
    title: "Where the Sky Comes Down",
    text: "Weite Landschaft, sinkendes Licht und die leise Sehnsucht nach einem Ort, an dem Himmel und Erde einander berühren.",
    mood: "Weite · Sehnsucht · Übergang",
  },
  {
    no: "III",
    poet: "Heinrich Heine",
    poem: "Im wunderschönen Monat Mai",
    title: "Springtime Feeling",
    text: "Ein heller Jazzwalzer über das vorsichtige Erwachen der Liebe – hoffnungsvoll, offen und bereits von einer feinen Unsicherheit durchzogen.",
    mood: "Frühling · Liebe · Ungewissheit",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="The Hidden Verses – Startseite">
          <span>Baltic Lounge Lizard</span>
          <strong>The Hidden Verses</strong>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#album">Das Album</a>
          <a href="#pieces">Die Stücke</a>
          <a href="#journal">Journal</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">An album in the making</p>
          <h1>The Hidden<br /><em>Verses</em></h1>
          <p className="hero-intro">
            Deutsche Gedichte, verborgen in neuen englischen Jazzsongs.
            Keine Übersetzungen – musikalische Antworten.
          </p>
          <a className="text-link" href="#album">Die Geschichte entdecken <span>↘</span></a>
        </div>
        <figure className="cover-wrap">
          <div className="cover-shadow" />
          <img src="/the-hidden-verses-cover.webp" alt="Albumcover The Hidden Verses von Baltic Lounge Lizard" />
          <figcaption>Cover artwork · first edition</figcaption>
        </figure>
        <p className="side-note">Poetry becomes sound · 2026</p>
      </section>

      <section className="statement" id="album">
        <p className="section-no">01 — Das Album</p>
        <div>
          <h2>Was bleibt von einem Gedicht, wenn seine Worte verschwinden?</h2>
          <div className="columns">
            <p>
              <strong>The Hidden Verses</strong> sucht nicht nach der korrekten Übersetzung.
              Das Album folgt der emotionalen Bewegung ausgewählter deutscher Gedichte und
              erzählt sie in einer neuen Sprache, einer neuen Zeit und einer eigenen musikalischen Welt.
            </p>
            <p>
              Intimes Piano, warmer Kontrabass, Besen und ein lyrisches Tenorsaxophon tragen
              die Geschichten weiter. Das Saxophon wird zur zweiten Stimme: Es sagt, was der
              Text offenlässt, und übernimmt dort, wo Worte zögern.
            </p>
          </div>
        </div>
      </section>

      <section className="pieces" id="pieces">
        <div className="section-heading">
          <p className="section-no">02 — Die Stücke</p>
          <p>Drei Gedichte. Drei eigenständige Reisen.</p>
        </div>
        <div className="piece-list">
          {pieces.map((piece) => (
            <article className="piece" key={piece.no}>
              <span className="roman">{piece.no}</span>
              <div className="source">
                <p>{piece.poet}</p>
                <small>{piece.poem}</small>
              </div>
              <div className="piece-main">
                <h3>{piece.title}</h3>
                <p>{piece.text}</p>
                <span>{piece.mood}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <p className="section-no">03 — Der Prozess</p>
        <div className="process-grid">
          <h2>Vom Vers<br />zum Song</h2>
          <ol>
            <li><span>01</span><div><strong>Lesen</strong><p>Das Gedicht wird auf Bilder, Bewegung und unausgesprochene Spannung untersucht.</p></div></li>
            <li><span>02</span><div><strong>Neu erzählen</strong><p>Eine literarische Nacherzählung löst sich bewusst vom Wortlaut des Originals.</p></div></li>
            <li><span>03</span><div><strong>Komponieren</strong><p>Text, Melodie und Harmonie entstehen gemeinsam – am Piano und im Moment.</p></div></li>
            <li><span>04</span><div><strong>Aufnehmen</strong><p>Die Idee wird zur intimen Jazzaufnahme, in der auch Stille ein Instrument ist.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="journal" id="journal">
        <p className="section-no">04 — Album Journal</p>
        <div className="journal-card">
          <div>
            <p className="date">August 2026 · Studio notes</p>
            <h2>Das Album entsteht öffentlich.</h2>
          </div>
          <p>
            Diese Seite wächst parallel zur Musik. Neue Stücke, Gedanken aus dem Studio,
            Textfragmente und Hörbeispiele erscheinen hier, sobald sie bereit sind.
          </p>
          <span className="status"><i /> In Arbeit</span>
        </div>
      </section>

      <footer>
        <div><strong>The Hidden Verses</strong><span>An album by Baltic Lounge Lizard</span></div>
        <p>Poetry, reimagined in jazz.</p>
        <a href="#top">Nach oben ↑</a>
      </footer>
    </main>
  );
}
