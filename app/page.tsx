import SoundCloudPlayer from "./SoundCloudPlayer";

const pieces = [
  {
    no: "I",
    poet: "Johann Wolfgang von Goethe",
    poem: "Wandrers Nachtlied II",
    portrait: "/poets/goethe.webp",
    portraitAlt: "Porträt Johann Wolfgang von Goethes von Joseph Karl Stieler",
    portraitCredit: "Joseph Karl Stieler · Wikimedia Commons · gemeinfrei",
    portraitHref: "https://commons.wikimedia.org/wiki/File:Johann_Wolfgang_von_Goethe_(Josef_Stieler).jpg",
    soundcloud: "https://soundcloud.com/user-720035982/baltic-lounge-lizard-hidden/s-IboZsAhKaK1?in=user-720035982/sets/baltic-lounge-lizard-hidden",
    soundcloudId: "2372399444",
    soundcloudSecret: "s-IboZsAhKaK1",
    title: "A place for the night",
    text: "Eine Reise endet nicht im Schlaf, sondern in einem Moment innerer Ruhe. Aus Goethes schwebender Schlusszeile wird eine moderne Erzählung vom Ankommen.",
    mood: "Abend · Einkehr · Stille",
    original: `Über allen Gipfeln
Ist Ruh,
In allen Wipfeln
Spürest du
Kaum einen Hauch;
Die Vögelein schweigen im Walde.
Warte nur! Balde
Ruhest du auch.`,
    reinterpretation: `Ich unterbrach meine Reise,
bevor der Abend mich umarmte.
Die leeren Straßen hinter mir erinnerten sich noch vage
an die Spuren, die ich auf ihnen hinterlassen hatte.
Die Echos verklangen,
eines nach dem anderen.
Nichts blieb mehr als die Stille,
die alles durchströmte.
Ich musste nicht länger suchen.
Ich spürte nur noch meinen Atem
und wusste, dass ich endlich einen Ort
für die Nacht gefunden hatte.`,
    english: `Stopped before...
the evening...
knew my name...

Empty streets...
remembered...
where I'd been...

Still the echoes
lost their distance
one by one.

Nothing left now
but the silence
moving through.

No more searching
only breathing
I knew the night.`,
    translation: `Ich hielt inne,
bevor der Abend
meinen Namen kannte.

Leere Straßen
erinnerten sich,
wo ich gewesen war.

Noch verloren die Echos
ihre Entfernung,
eines nach dem anderen.

Nichts blieb
als die Stille,
die hindurchzog.

Kein Suchen mehr,
nur Atmen.
Ich kannte die Nacht.`,
  },
  {
    no: "II",
    poet: "Joseph von Eichendorff",
    poem: "Mondnacht",
    portrait: "/poets/eichendorff.webp",
    portraitAlt: "Porträt Joseph von Eichendorffs",
    portraitCredit: "Historisches Porträt · Wikimedia Commons · gemeinfrei",
    portraitHref: "https://commons.wikimedia.org/wiki/File:Joseph_Eichendorff.jpg",
    soundcloud: "https://soundcloud.com/user-720035982/baltic-lounge-lizard-hidden-1/s-iJjcvsFDBrl?in=user-720035982/sets/baltic-lounge-lizard-hidden",
    soundcloudId: "2372400224",
    soundcloudSecret: "s-iJjcvsFDBrl",
    title: "Where the Sky Comes Down",
    text: "Weite Landschaft, sinkendes Licht und die leise Sehnsucht nach einem Ort, an dem Himmel und Erde einander berühren.",
    mood: "Weite · Sehnsucht · Übergang",
    draft: true,
    original: `Es war, als hätt' der Himmel
Die Erde still geküßt,
Daß sie im Blütenschimmer
Von ihm nun träumen müßt'.

Die Luft ging durch die Felder,
Die Ähren wogten sacht,
Es rauschten leis die Wälder,
So sternklar war die Nacht.

Und meine Seele spannte
Weit ihre Flügel aus,
Flog durch die stillen Lande,
Als flöge sie nach Haus.`,
    reinterpretation: `Während mich am Ende des Tages der Abend umfängt und sich der Himmel zu mir absenkt, beginnt selbst der Wind, meinen Namen zu vergessen.

Alle Dinge, die der Tag einst besessen, sind längst ins Dunkel getaucht. Sie werden jetzt nicht mehr gebraucht.

Ich brauche auch keine Erklärungen mehr: Wo geht alles hin, und wo kommt alles her?

Ich erkenne inzwischen: Die Nacht ist nicht nur Dunkelheit. Nein, sie verfolgt meine Spur. Sie erinnert sich an mich.

Die Stille, die mich jetzt umfängt und mich in die Nacht hineinlenkt, zeigt mir, dass ich keine Grenzen überschreiten muss. Es ist alles längst da und scheint sich für mich auszubreiten.

Selbst der Himmel, den ich meinte finden zu müssen, kam schließlich auf mich zu und liegt nun zu meinen Füßen.

Und alles fühlt sich an wie eine Reise nach Hause.

Bleib …
nur noch ein wenig …`,
    english: `The evening leaned
without a sound
A distant light
came drifting down

The wind let go
of every name
The silent fields
were not the same

I stopped looking
for reasons to believe
the night was more than darkness
It remembered me

No voice remained
to lead me through
The quiet knew
before I knew

I crossed no line
I traveled far
until I found
where the sky comes down

And looking up
for just one night
it felt like home

Stay...
just a little longer...`,
    translation: `Der Abend neigte sich
lautlos herab.
Ein fernes Licht
trieb langsam hinunter.

Der Wind ließ
jeden Namen los.
Die stillen Felder
waren nicht mehr dieselben.

Ich hörte auf, nach Gründen zu suchen,
um zu glauben, dass die Nacht
mehr war als Dunkelheit.
Sie erinnerte sich an mich.

Keine Stimme blieb,
um mich hindurchzuführen.
Die Stille wusste es,
bevor ich es wusste.

Ich überschritt keine Grenze,
ich reiste weit,
bis ich den Ort fand,
an dem der Himmel herabkommt.

Und als ich aufblickte,
nur für diese eine Nacht,
fühlte es sich wie Heimat an.

Bleib …
nur noch ein wenig länger …`,
  },
  {
    no: "III",
    poet: "Heinrich Heine",
    poem: "Im wunderschönen Monat Mai",
    portrait: "/poets/heine.webp",
    portraitAlt: "Porträt Heinrich Heines",
    portraitCredit: "Historisches Porträt · Wikimedia Commons · gemeinfrei",
    portraitHref: "https://commons.wikimedia.org/wiki/File:Heinrich_Heine.PNG",
    soundcloud: "https://soundcloud.com/user-720035982/baltic-lounge-lizard-hidden-2/s-dgYe13qJbzc?in=user-720035982/sets/baltic-lounge-lizard-hidden",
    soundcloudId: "2373478709",
    soundcloudSecret: "s-dgYe13qJbzc",
    title: "Springtime Feeling",
    text: "Ein heller Jazzwalzer über das vorsichtige Erwachen der Liebe – hoffnungsvoll, offen und bereits von einer feinen Unsicherheit durchzogen.",
    mood: "Frühling · Liebe · Ungewissheit",
    original: `Im wunderschönen Monat Mai,
Als alle Knospen sprangen,
Da ist in meinem Herzen
Die Liebe aufgegangen.

Im wunderschönen Monat Mai,
Als alle Vögel sangen,
Da hab' ich ihr gestanden
Mein Sehnen und Verlangen.`,
    reinterpretation: `Noch bevor der Morgen verstand,
was sich verändert hatte,
zog eine wärmere Luft durch die Welt.
Der Mai öffnete Gärten und Wege,
und alles wandte sich dem Licht zu.
Auch mein Herz ließ sich nicht mehr
an seinem alten Ort halten.
Liebe und Sehnsucht wurden zu einer Bewegung,
die nur zu ihr führte.
Bevor dieser Augenblick vorüberging,
musste ich sprechen – denn alles in mir
führte zu ihr.`,
    english: `Something changed
before the morning knew
A warmer wind
was slowly moving through

May came in
with the whole world open wide
Every garden
turned its face toward the light

And my heart
wouldn't stay where it belonged
Full of love
and something just as strong

I had to tell her
before the moment passed
Every road inside me
was leading back to her`,
    translation: `Etwas veränderte sich,
bevor der Morgen es wusste.
Ein wärmerer Wind
zog langsam hindurch.

Der Mai kam,
und die ganze Welt öffnete sich weit.
Jeder Garten
wandte sein Gesicht dem Licht zu.

Und mein Herz
wollte nicht bleiben, wo es hingehörte.
Voller Liebe
und etwas ebenso Starkem.

Ich musste es ihr sagen,
bevor der Augenblick verging.
Jeder Weg in mir
führte zu ihr zurück.`,
  },
  {
    no: "IV",
    poet: "Heinrich Heine",
    poem: "Ein Fichtenbaum steht einsam",
    portrait: "/poets/heine.webp",
    portraitAlt: "Porträt Heinrich Heines",
    portraitCredit: "Historisches Porträt · Wikimedia Commons · gemeinfrei",
    portraitHref: "https://commons.wikimedia.org/wiki/File:Heinrich_Heine.PNG",
    title: "Under Different Skies",
    text: "Ein treibender Swing über zwei einsame Wesen in gegensätzlichen Welten – verbunden durch denselben Traum und getrennt durch eine unüberwindbare Entfernung.",
    mood: "Ferne · Sehnsucht · Kontrast",
    draft: true,
    original: `Ein Fichtenbaum steht einsam
Im Norden auf kahler Höh'.
Ihn schläfert; mit weißer Decke
Umhüllen ihn Eis und Schnee.

Er träumt von einer Palme,
Die, fern im Morgenland,
Einsam und schweigend trauert
Auf brennender Felsenwand.`,
    reinterpretation: `Hoch über der schlafenden Stadt liegt der Norden still unter seiner weißen Decke. In dieser Kälte beginnt ein Traum von einem fernen Ufer, von Wärme und von einem anderen Leben.

Zur selben Zeit steht unter brennender Luft ein ebenso einsames Wesen. Beide schauen in dieselbe Nacht, doch kein Weg kann die Entfernung zwischen ihnen überwinden.

Nur im Traum kommen sich ihre Welten nahe. Am Morgen finden sie sich wieder dort, wo sie immer waren: unter verschiedenen Himmeln, verbunden durch eine Sehnsucht, von der keiner weiß, dass der andere sie teilt.`,
    english: `High above the sleeping town
winter lays its blanket down
I keep dreaming through the night
of a shore I'll never find

Somewhere in the burning air
you are standing lonely there
Different winds and different lives
turning under different skies

Maybe dreams can cross the miles
where our footsteps never will
Maybe for a little while
north and south are standing still

Morning finds us where we are
each beneath a distant star
close enough to share the night
far beneath our different skies`,
    translation: `Hoch über der schlafenden Stadt
breitet der Winter seine Decke aus.
Durch die Nacht träume ich weiter
von einem Ufer, das ich niemals finden werde.

Irgendwo in der brennenden Luft
stehst du dort allein.
Verschiedene Winde und verschiedene Leben
drehen sich unter verschiedenen Himmeln.

Vielleicht können Träume die Meilen überqueren,
die unsere Schritte niemals überwinden werden.
Vielleicht stehen für einen kleinen Moment
Norden und Süden still.

Der Morgen findet uns dort, wo wir sind,
jeden unter einem fernen Stern:
nah genug, um die Nacht zu teilen,
weit unter unseren verschiedenen Himmeln.`,
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
              Text offenlässt, und übernimmt dort, wo Worte zögern. Geplant ist ein Zyklus aus
              zehn Gedichten – zehn eigenständige musikalische Verwandlungen.
            </p>
          </div>
        </div>
      </section>

      <section className="pieces" id="pieces">
        <div className="section-heading">
          <p className="section-no">02 — Die Stücke</p>
          <p>Die ersten vier von zehn geplanten Gedichten.</p>
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
                {piece.soundcloud && piece.soundcloudId && piece.soundcloudSecret ? (
                  <SoundCloudPlayer
                    title={piece.title}
                    trackUrl={piece.soundcloud}
                    trackId={piece.soundcloudId}
                    secretToken={piece.soundcloudSecret}
                  />
                ) : (
                  <span className="work-status">Komposition in Arbeit · Hörprobe folgt</span>
                )}
                <details className="verse-details">
                  <summary><span>Gedicht und Verwandlungen lesen</span><i aria-hidden="true">+</i></summary>
                  <div className="poet-context">
                    <figure>
                      <img src={piece.portrait} alt={piece.portraitAlt} />
                      <figcaption>
                        <a href={piece.portraitHref} target="_blank" rel="noreferrer">{piece.portraitCredit}</a>
                      </figcaption>
                    </figure>
                    <div>
                      <p className="layer-no">Ausgangspunkt</p>
                      <h4>{piece.poet}</h4>
                      <p>Vier Blicke auf dieselbe innere Bewegung: vom historischen Gedicht über die freie Deutung bis zum Songtext und seiner deutschen Rückübersetzung.</p>
                    </div>
                  </div>
                  <div className="text-layers">
                    <section>
                      <p className="layer-no">01 — Original</p>
                      <h4>{piece.poem}</h4>
                      <p className="verse">{piece.original}</p>
                    </section>
                    <section>
                      <p className="layer-no">02 — Neuinterpretation</p>
                      <h4>Die innere Erzählung</h4>
                      <p className="verse">{piece.reinterpretation}</p>
                    </section>
                    <section>
                      <p className="layer-no">03 — English lyrics</p>
                      <h4>{piece.title}</h4>
                      {piece.draft && <span className="draft-label">Dokumentierter Arbeitsstand</span>}
                      <p className="verse english">{piece.english}</p>
                    </section>
                    <section>
                      <p className="layer-no">04 — Deutsche Rückübersetzung</p>
                      <h4>Der englische Songtext auf Deutsch</h4>
                      {piece.draft && <span className="draft-label">Dokumentierter Arbeitsstand</span>}
                      <p className="verse">{piece.translation}</p>
                    </section>
                  </div>
                </details>
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
            <h2>Song IV nimmt Gestalt an.</h2>
          </div>
          <p>
            Heinrich Heines „Ein Fichtenbaum steht einsam“ wird zu „Under Different Skies“:
            ein treibender Swing, dessen Bewegung im Kontrast zur unerreichbaren Nähe des Textes steht.
          </p>
          <span className="status"><i /> In Arbeit</span>
        </div>
      </section>

      <section className="updates" id="updates">
        <div>
          <p className="section-no">05 — Updates</p>
          <h2>Wenn ein neuer Vers sichtbar wird.</h2>
          <p className="updates-copy">
            Erhalte ausgewählte Neuigkeiten zu neuen Stücken, Hörbeispielen und wichtigen
            Etappen des Albums. Kleine technische Änderungen an dieser Website bleiben still.
          </p>
        </div>
        <form className="subscribe-form" action="/api/subscribe.php" method="post">
          <label htmlFor="email">E-Mail-Adresse</label>
          <div className="form-row">
            <input id="email" name="email" type="email" autoComplete="email" required placeholder="name@beispiel.de" />
            <button type="submit">Updates erhalten</button>
          </div>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <p className="privacy-note">
            Wir verwenden deine Adresse ausschließlich für Updates zu „The Hidden Verses“.
            Nach der Anmeldung erhältst du eine Bestätigungs-E-Mail. Abmeldung jederzeit über
            den Link in jeder Nachricht. Verantwortlich: SomeSwans Records · info@someswans.de.
          </p>
        </form>
      </section>

      <footer>
        <div><strong>The Hidden Verses</strong><span>An album by Baltic Lounge Lizard</span></div>
        <p>Poetry, reimagined in jazz.</p>
        <a href="#top">Nach oben ↑</a>
      </footer>
    </main>
  );
}
