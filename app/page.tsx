import AudioPlayer from "./AudioPlayer";

const pieces = [
  {
    order: 1,
    no: "I",
    poet: "Joseph von Eichendorff",
    poem: "Wünschelrute",
    portrait: "/poets/eichendorff.webp",
    portraitAlt: "Porträt Joseph von Eichendorffs",
    portraitCredit: "Historisches Porträt · Wikimedia Commons · gemeinfrei",
    portraitHref: "https://commons.wikimedia.org/wiki/File:Joseph_Eichendorff.jpg",
    audioSrc: "/audio/01-a-song-in-everything.m4a",
    title: "A Song in Everything",
    text: "Eine weit ausgreifende Jazzballade über den Augenblick, in dem die vermeintlich stille Welt ihre verborgenen Stimmen preisgibt und aus dem Lauschen ein machtvoller Gesang entsteht.",
    mood: "Staunen · Erwachen · Klang",
    original: `Schläft ein Lied in allen Dingen,
Die da träumen fort und fort,
Und die Welt hebt an zu singen,
Triffst du nur das Zauberwort.`,
    reinterpretation: `Am Anfang schien die Welt still zu sein.

Die Dinge standen einfach da: die Bäume, die Häuser, die Wege und der Himmel über ihnen. Doch wenn ich lange genug lauschte, glaubte ich unter ihrer Stille etwas zu hören.

In jedem von ihnen wartete ein eigener Ton. In manchen nur ein leises Zittern, in anderen eine Melodie, die noch keinen Anfang gefunden hatte.

Ich kannte das Wort nicht, das sie wecken konnte. Also begann ich, aufmerksam durch die Welt zu gehen und auf ihre verborgenen Stimmen zu hören.

Und irgendwann, ohne dass ich sagen konnte, wodurch es geschah, antwortete sie mir.

Ein Ton löste den nächsten aus. Die Stille öffnete sich, und die ganze Welt begann zu singen.`,
    english: `At first I thought the world was still
A sleeping road, an empty hill
The trees stood silent in the rain
The stones had never learned their names
But underneath the quiet ground
I felt the shadow of a sound
A distant pulse, a trembling string
As if the dark were listening

I had no word to wake the air
No map to find what waited there
I only knew I had to stay
And hear what silence had to say

There is a song in everything
In every stone, in every wing
The world is only waiting there
For someone who will learn to hear

I walked beneath an open sky
And heard the restless leaves reply
A window breathed, a river called
A thousand voices filled the walls
The smallest flame, the deepest sea
Were speaking in a tongue to me
And every footstep on the road
Released a note the silence held

I never found the magic word
It found me when I stopped to search
And in the stillness of that day
The hidden music found its way

There is a song in everything
In every stone, in every wing
The world is only waiting there
For someone who will learn to hear

Now let the silence open wide
Let every hidden voice arise
We are the word, we are the flame
We call the sleeping world by name

There is a song in everything
In every heart, in everything
And we are more than what we seem
We are the music and the dream

And when the final echoes fall
The song remains beneath it all
Behind the night, behind the day
It waits for us to find the way
No world is silent, nothing sleeps
The smallest sound is buried deep
And if you listen, you will know
The song was always there below`,
    translation: `Zuerst glaubte ich, die Welt sei still,
ein schlafender Weg, ein leerer Hügel.
Die Bäume standen schweigend im Regen,
die Steine hatten ihre Namen noch nicht gelernt.
Doch unter der stillen Erde
spürte ich den Schatten eines Klangs,
einen fernen Puls, eine zitternde Saite,
als würde die Dunkelheit lauschen.

Ich hatte kein Wort, um die Luft zu wecken,
keine Karte zu dem, was dort wartete.
Ich wusste nur, dass ich bleiben musste,
um zu hören, was die Stille zu sagen hatte.

In allem ist ein Lied,
in jedem Stein, in jedem Flügel.
Die Welt wartet nur darauf,
dass jemand zu hören lernt.

Ich ging unter einem offenen Himmel
und hörte die unruhigen Blätter antworten.
Ein Fenster atmete, ein Fluss rief,
tausend Stimmen erfüllten die Wände.
Die kleinste Flamme, das tiefste Meer
sprachen in einer Sprache zu mir.
Und jeder Schritt auf dem Weg
befreite einen Ton, den die Stille bewahrt hatte.

Ich fand das Zauberwort nie.
Es fand mich, als ich aufhörte zu suchen.
Und in der Stille jenes Tages
fand die verborgene Musik ihren Weg.

In allem ist ein Lied,
in jedem Stein, in jedem Flügel.
Die Welt wartet nur darauf,
dass jemand zu hören lernt.

Nun lass die Stille sich weit öffnen,
lass jede verborgene Stimme aufsteigen.
Wir sind das Wort, wir sind die Flamme,
wir rufen die schlafende Welt beim Namen.

In allem ist ein Lied,
in jedem Herzen, in allem.
Und wir sind mehr, als wir scheinen:
Wir sind die Musik und der Traum.

Und wenn die letzten Echos verklingen,
bleibt unter allem das Lied.
Hinter der Nacht, hinter dem Tag
wartet es darauf, dass wir den Weg finden.
Keine Welt ist stumm, nichts schläft,
der kleinste Klang liegt tief verborgen.
Und wenn du lauschst, wirst du erkennen:
Das Lied war immer dort unten.`,
  },
  {
    order: 5,
    no: "V",
    poet: "Johann Wolfgang von Goethe",
    poem: "Wandrers Nachtlied II",
    portrait: "/poets/goethe.webp",
    portraitAlt: "Porträt Johann Wolfgang von Goethes von Joseph Karl Stieler",
    portraitCredit: "Joseph Karl Stieler · Wikimedia Commons · gemeinfrei",
    portraitHref: "https://commons.wikimedia.org/wiki/File:Johann_Wolfgang_von_Goethe_(Josef_Stieler).jpg",
    audioSrc: "/audio/01-borrowed-evening.m4a",
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
    order: 10,
    no: "X",
    poet: "Joseph von Eichendorff",
    poem: "Mondnacht",
    portrait: "/poets/eichendorff.webp",
    portraitAlt: "Porträt Joseph von Eichendorffs",
    portraitCredit: "Historisches Porträt · Wikimedia Commons · gemeinfrei",
    portraitHref: "https://commons.wikimedia.org/wiki/File:Joseph_Eichendorff.jpg",
    audioSrc: "/audio/02-where-the-sky-comes-down.m4a?v=2",
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
    order: 2,
    no: "II",
    poet: "Heinrich Heine",
    poem: "Im wunderschönen Monat Mai",
    portrait: "/poets/heine.webp",
    portraitAlt: "Porträt Heinrich Heines",
    portraitCredit: "Historisches Porträt · Wikimedia Commons · gemeinfrei",
    portraitHref: "https://commons.wikimedia.org/wiki/File:Heinrich_Heine.PNG",
    audioSrc: "/audio/03-springtime-feeling.m4a",
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
    reinterpretation: `Bevor der Morgen es verstand,
hatte der Mai seine ersten Boten ausgesandt.
Ein wärmerer Duft lag in der Luft,
er öffnete die Knospen der Blüten,
und alles wandte sich dem Licht zu.

Auch mein Herz ließ sich nicht mehr halten,
die Sehnsucht nahm Gestalt an,
die mich hin zu ihr führte,
mich mit Freude und Liebe berührte.

Und bevor der Augenblick vorüberging,
solange mich das Verlangen umfing,
alles in mir
führte mich hin zu ihr.`,
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
    order: 3,
    no: "III",
    poet: "Heinrich Heine",
    poem: "Ein Fichtenbaum steht einsam",
    portrait: "/poets/heine.webp",
    portraitAlt: "Porträt Heinrich Heines",
    portraitCredit: "Historisches Porträt · Wikimedia Commons · gemeinfrei",
    portraitHref: "https://commons.wikimedia.org/wiki/File:Heinrich_Heine.PNG",
    audioSrc: "/audio/04-under-different-skies.m4a",
    title: "Under Different Skies",
    text: "Ein treibender Swing über zwei einsame Wesen in gegensätzlichen Welten – verbunden durch denselben Traum und getrennt durch eine unüberwindbare Entfernung.",
    mood: "Ferne · Sehnsucht · Kontrast",
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
  {
    order: 4,
    no: "IV",
    poet: "Rainer Maria Rilke",
    poem: "Der Panther",
    portrait: "/poets/rilke.webp",
    portraitAlt: "Porträt Rainer Maria Rilkes aus dem Jahr 1900",
    portraitCredit: "Historische Fotografie (1900) · Wikimedia Commons · gemeinfrei",
    portraitHref: "https://commons.wikimedia.org/wiki/File:Rainer_Maria_Rilke_1900.jpg",
    audioSrc: "/audio/05-the-same-circle.m4a",
    title: "The Same Circle",
    text: "Ein dunkler, hypnotischer Jazzsong über eingeschlossene Kraft, kreisende Bewegung und einen flüchtigen Blick auf eine unerreichbare Welt.",
    mood: "Enge · Kraft · Wiederholung",
    original: `Sein Blick ist vom Vorübergehn der Stäbe
so müd geworden, dass er nichts mehr hält.
Ihm ist, als ob es tausend Stäbe gäbe
und hinter tausend Stäben keine Welt.

Der weiche Gang geschmeidig starker Schritte,
der sich im allerkleinsten Kreise dreht,
ist wie ein Tanz von Kraft um eine Mitte,
in der betäubt ein großer Wille steht.

Nur manchmal schiebt der Vorhang der Pupille
sich lautlos auf —. Dann geht ein Bild hinein,
geht durch der Glieder angespannte Stille —
und hört im Herzen auf zu sein.`,
    reinterpretation: `Seit langer Zeit bewege ich mich innerhalb derselben unsichtbaren Grenzen. Ich kenne jeden Schritt, jede Wendung und jeden Punkt, an dem ich wieder umkehren muss.

Von außen sieht es vielleicht nach Ruhe aus. Doch unter dieser Ruhe wartet eine Kraft, die keinen Ort mehr findet, an dem sie sich entfalten kann.

Die Welt zieht an mir vorbei wie Licht zwischen geschlossenen Türen. Manchmal erreicht mich ein Bild: ein Gesicht, eine Straße, ein offener Himmel.

Für einen Augenblick erwacht alles in mir. Dann schließt sich der Kreis erneut, und ich gehe weiter – Schritt für Schritt durch mein unsichtbares Gefängnis.`,
    english: `Every morning finds me here
While the outside disappears
Lines before me, lines behind
Till the world slips from my mind

Soft and certain, step by step
All the power I have kept
Round a center, cold and still
Moves the body, sleeps the will

Then a doorway opens wide
One clear picture slips inside
Sky and distance, leaf and flame
For a moment have a name

Same circle, same ground
Same silence turning round
I carry all this strength inside
With nowhere left to run

Through my shoulders, through my chest
Moves the picture, comes to rest
Reaches somewhere deep within
Then the dark closes again

Same circle, same night
The world just out of sight
A thousand ways to leave this place
And not a single one

Step by step
Round and round

Step by step
Without a sound

Same circle
Same ground`,
    translation: `Jeder Morgen findet mich hier,
während die Außenwelt verschwindet.
Linien vor mir, Linien hinter mir,
bis die Welt mir aus dem Sinn gleitet.

Sanft und sicher, Schritt für Schritt,
all die Kraft, die ich bewahrt habe.
Um eine kalte, stille Mitte
bewegt sich der Körper, schläft der Wille.

Dann öffnet sich eine Tür weit,
ein klares Bild gleitet hinein.
Himmel und Ferne, Blatt und Flamme
haben für einen Moment einen Namen.

Derselbe Kreis, derselbe Boden,
dieselbe Stille dreht sich weiter.
Ich trage all diese Kraft in mir
und kann nirgendwohin mehr fliehen.

Durch meine Schultern, durch meine Brust
bewegt sich das Bild und kommt zur Ruhe.
Es reicht bis irgendwo tief in mir,
dann schließt sich die Dunkelheit erneut.

Derselbe Kreis, dieselbe Nacht,
die Welt gerade außer Sicht.
Tausend Wege, diesen Ort zu verlassen,
und nicht ein einziger.

Schritt für Schritt,
rundherum.

Schritt für Schritt,
ohne einen Laut.

Derselbe Kreis,
derselbe Boden.`,
  },
  {
    order: 6,
    no: "VI",
    poet: "Friedrich Hölderlin",
    poem: "Hälfte des Lebens",
    portrait: "/poets/hoelderlin.webp",
    portraitAlt: "Porträt Friedrich Hölderlins von Franz Carl Hiemer aus dem Jahr 1792",
    portraitCredit: "Franz Carl Hiemer · Pastell, um 1792 · Wikimedia Commons · gemeinfrei",
    portraitHref: "https://commons.wikimedia.org/wiki/File:FK_Hiemer_-_Friedrich_H%C3%B6lderlin_-_(Pastell_1792).jpg",
    audioSrc: "/audio/06-when-the-flowers-are-gone.m4a",
    title: "When the Flowers Are Gone",
    text: "Eine intime Jazzballade über fremde Blüte, schwindende Kraft und den eigenen Winter – bis die Frage nach der letzten Ruhe unausweichlich wird.",
    mood: "Blüte · Altern · Vergänglichkeit",
    original: `Mit gelben Birnen hänget
Und voll mit wilden Rosen
Das Land in den See,
Ihr holden Schwäne,
Und trunken von Küssen
Tunkt ihr das Haupt
Ins heilignüchterne Wasser.

Weh mir, wo nehm’ ich, wenn
Es Winter ist, die Blumen, und wo
Den Sonnenschein,
Und Schatten der Erde?
Die Mauern stehn
Sprachlos und kalt, im Winde
Klirren die Fahnen.`,
    reinterpretation: `Um mich herum herrscht Frühling, so weit das Auge reicht. Und auch der Sommer findet bei vielen seine Zeit.

In voller Blüte sehe ich sie überall, und ihre Kraft ergießt sich wie ein warmer, heller Schwall.

Doch woher nehme ich sie? Wo finde ich sie noch? Schon jeder größere Schritt fällt mir so schwer.

Der Herbst ist längst vergangen. Der Winter hat begonnen, sich leise seinen Weg durch meine Tage zu bahnen.

Und manchmal glaube ich zu spüren: Selbst dieser Winter neigt sich schon. Wann wird die Stille kommen? Wann finde ich meine letzte Ruh?`,
    english: `Around me, spring is waking
as far as I can see
And summer finds its season
in everyone but me

I see them all in blossom
their colors burning bright
Their strength comes pouring through them
like rivers full of light

But where am I to find it?
Where could it still remain?
Each step a little farther
grows heavier again

The autumn passed unnoticed
the winter has begun
to make its way in silence
through all that I’ve become

And sometimes I can feel it:
this winter’s fading too
When will the silence find me?
When will my journey be through?

When the flowers are gone
and the colors disappear
When the final wind is calling
will I know that it is near?

When the flowers are gone
and the night has taken hold
Will I finally find my resting place
somewhere beyond the cold?`,
    translation: `Um mich herum erwacht der Frühling,
so weit ich sehen kann.
Und der Sommer findet seine Zeit
in allen – nur nicht in mir.

Ich sehe sie alle in Blüte,
ihre Farben leuchten hell.
Ihre Kraft strömt durch sie hindurch
wie Flüsse voller Licht.

Doch wo soll ich sie finden?
Wo könnte sie noch geblieben sein?
Jeder Schritt ein wenig weiter
wird wieder schwerer.

Der Herbst ging unbemerkt vorüber,
der Winter hat begonnen,
sich in aller Stille seinen Weg zu bahnen
durch alles, was aus mir geworden ist.

Und manchmal kann ich es spüren:
Auch dieser Winter schwindet schon.
Wann wird die Stille mich finden?
Wann wird meine Reise zu Ende sein?

Wenn die Blumen vergangen sind
und die Farben verschwinden,
wenn der letzte Wind mich ruft –
werde ich wissen, dass es nahe ist?

Wenn die Blumen vergangen sind
und die Nacht mich ergriffen hat,
werde ich endlich meinen Ruheplatz finden,
irgendwo jenseits der Kälte?`,
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
          <div>
            <p>Sieben von zehn geplanten Gedichten sind bereits zu Songs geworden.</p>
            <p className="player-note">Die Songs werden jetzt direkt im Browser abgespielt – ohne Verbindung zu SoundCloud und ohne Anmeldung.</p>
          </div>
        </div>
        <div className="piece-list">
          {[...pieces].sort((a, b) => a.order - b.order).map((piece) => (
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
                {piece.audioSrc ? (
                  <AudioPlayer title={piece.title} src={piece.audioSrc} />
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
          <aside className="creation-note">
            <strong>Zur Entstehung des Albums</strong>
            <p>
              Komposition, Arrangement und ursprüngliche Produktion der Stücke werden vollständig von
              Baltic Lounge Lizard entwickelt. Für die Ausgangsfassungen spiele ich elektrische Instrumente
              wie E-Gitarre und Keyboard selbst ein und produziere alle weiteren Stimmen mit MIDI-Instrumenten,
              Samples und virtuellen Instrumenten. Auch der vollständige Gesang dieser Fassungen wird von mir
              aufgenommen. Erst anschließend wird das Material mithilfe KI-gestützter Werkzeuge weiterentwickelt
              und zur veröffentlichten Version ausgearbeitet. Auch bei der konzeptionellen Entwicklung und der
              Arbeit an den englischen Songtexten kommen solche Werkzeuge unterstützend zum Einsatz.
            </p>
          </aside>
        </div>
      </section>

      <section className="journal" id="journal">
        <p className="section-no">04 — Album Journal</p>
        <div className="journal-card">
          <div>
            <p className="date">August 2026 · Studio notes</p>
            <h2>Der neue Albumauftakt ist jetzt zu hören.</h2>
          </div>
          <p>
            Joseph von Eichendorffs „Wünschelrute“ wurde zu „A Song in Everything“:
            eine weit ausgreifende, melancholische Jazzballade, die aus beinahe völliger
            Stille zu einem machtvollen Erwachen wächst. Als siebter fertiggestellter Song
            eröffnet sie nun die innere Geschichte des Albums.
          </p>
          <span className="status"><i /> Veröffentlicht</span>
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
