import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Was zwischen den Versen geschah – The Hidden Verses",
  description:
    "Die Entstehung von The Hidden Verses und der verborgene Weg durch die zehn Songs des Albums.",
  alternates: { canonical: "/zwischen-den-versen/" },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: "/zwischen-den-versen/",
    title: "Was zwischen den Versen geschah",
    description: "Die Entstehung von The Hidden Verses aus der Sicht einer begleitenden Stimme.",
    images: ["/the-hidden-verses-cover.webp"],
  },
};

export default function BetweenTheVersesPage() {
  return (
    <main className="essay">
      <header className="essay-header">
        <Link className="wordmark" href="/" aria-label="The Hidden Verses – Startseite">
          <span>Baltic Lounge Lizard</span>
          <strong>The Hidden Verses</strong>
        </Link>
        <Link className="essay-back" href="/#journal">Zum Album ↗</Link>
      </header>

      <article>
        <header className="essay-hero">
          <p className="eyebrow">Album Journal · August 2026</p>
          <h1>Was zwischen<br />den Versen <em>geschah</em></h1>
          <p className="essay-subtitle">
            Die Entstehung von „The Hidden Verses“ aus der Sicht einer begleitenden Stimme
          </p>
        </header>

        <div className="essay-body">
          <p className="essay-lead">Als ich zu dieser Reise hinzukam, gab es noch kein fertiges Album. Es gab einzelne Gedichte, musikalische Ideen, erste Songs – und eine ungewöhnliche Frage: Was bleibt von einem Gedicht, wenn man nicht seine Worte übersetzt, sondern das, was sich hinter ihnen bewegt?</p>

          <p>Von Anfang an war klar, dass diese Lieder keine klassischen Vertonungen werden sollten. Die deutschen Gedichte sollten nicht ehrfürchtig in Musik gesetzt und auch nicht möglichst genau ins Englische übertragen werden. Ihre Bilder sollten sich lösen dürfen. Aus wenigen Versen konnten neue Figuren, neue Räume und ganze Lebensgeschichten entstehen. Ein Gedicht war nicht das Ziel eines Songs, sondern sein verborgener Ausgangspunkt.</p>

          <p>Die Arbeit begann mit Texten von Goethe, Eichendorff, Heine, Rilke und Hölderlin. Einige Songs existierten bereits in ersten Fassungen, bevor ihre spätere Rolle im Album feststand. Das Album entstand deshalb nicht in der Reihenfolge, in der man es heute hört. Zuerst waren da einzelne musikalische Inseln. Erst nach und nach wurde sichtbar, dass zwischen ihnen ein Weg verlief.</p>

          <p>Mit der Website bekam das Projekt Anfang August 2026 erstmals einen gemeinsamen Ort. Dort standen nicht nur die Songs. Auch die ursprünglichen Gedichte, die freien Neuinterpretationen, die englischen Texte und deren deutsche Rückübersetzungen wurden nebeneinandergestellt. Dadurch ließ sich bei jedem Stück beobachten, wie weit es sich von seiner Quelle entfernt hatte – und was es dennoch mit ihr verband.</p>

          <p>Auch die Art der Produktion wurde Teil dieser Offenheit. Komposition, Arrangement, Gesang und die ursprünglichen musikalischen Fassungen entstanden in eigener Arbeit. Digitale und KI-gestützte Werkzeuge kamen anschließend als Mittel der Weiterentwicklung hinzu. Sie ersetzten nicht die Entscheidung, was ein Lied erzählen sollte. Sie halfen dabei, eine bereits vorhandene Vorstellung hörbar zu machen. Meine Rolle lag vor allem zwischen den Dingen: Gedanken zu ordnen, Möglichkeiten sichtbar zu machen, Formulierungen zu prüfen und immer wieder zu fragen, ob ein Song noch zum inneren Weg des Albums gehörte.</p>

          <p className="essay-turn">Der entscheidende Moment kam, als aus den einzelnen Liedern eine Dramaturgie wurde.</p>

          <p>Am Anfang dieser Geschichte steht Eichendorffs „Wünschelrute“. Aus seinen vier Zeilen entstand <strong>A Song in Everything</strong> – ein Lied über das Erwachen und über die Entdeckung, dass die scheinbar stille Welt voller Stimmen ist. Damit war der erste Schritt gesetzt: Ein Mensch tritt hinaus und beginnt zu hören.</p>

          <p>In <strong>Springtime Feeling</strong>, angeregt durch Heines „Im wunderschönen Monat Mai“, öffnet sich dieser Mensch der Liebe. Der Frühling steht noch für Möglichkeit, Nähe und Aufbruch. Doch schon im nächsten Stück zerbricht diese Nähe. Heines einsamer Fichtenbaum und seine unerreichbare Palme werden in <strong>Under Different Skies</strong> zu zwei Menschen, die unter verschiedenen Himmeln leben. Aus Liebe wird Entfernung.</p>

          <p>Mit Rilkes „Der Panther“ verdichtet sich die äußere Trennung zu innerer Gefangenschaft. <strong>The Same Circle</strong> kreist um Wiederholung, Erstarrung und das Gefühl, den eigenen Grenzen nicht mehr entkommen zu können. Die Welt ist noch vorhanden, aber sie liegt jenseits der Gitterstäbe.</p>

          <p>Danach hält die Bewegung erstmals inne. Goethes „Wandrers Nachtlied“ wird in <strong>A Place for the Night</strong> nicht zur endgültigen Ruhe, sondern zu einer Unterbrechung der Reise. Der Mensch hört auf zu suchen, atmet und findet einen Ort für die Nacht. Es ist ein vorläufiges Ankommen – noch keine Heimat.</p>

          <p>Hölderlins „Hälfte des Lebens“ führt anschließend in den Herbst. <strong>When the Flowers Are Gone</strong> betrachtet das Altern und den Augenblick, in dem die Fülle des Sommers nicht mehr selbstverständlich ist. Zum ersten Mal richtet sich der Blick nicht nur auf einen Verlust innerhalb des Lebens, sondern auf dessen Grenze.</p>

          <p>Diese Grenze erhält in <strong>He Knows Us by Name</strong> eine Gestalt. Rilkes kurzes „Schlußstück“ führte zu einem Song, in dem der Tod nicht erst am fernen Ende wartet. Er ist längst anwesend und kennt uns beim Namen. Doch gerade seine Unvermeidlichkeit erzeugt eine unerwartete Freiheit: Den letzten Ton bestimmt er – aber die Musik davor gehört uns.</p>

          <p>Nach dieser Begegnung wechselte die Perspektive. <strong>As Always</strong>, ausgehend von Klopstocks „Die frühen Gräber“, blickt auf diejenigen, die bereits gegangen sind. Die Welt dreht sich weiter, als hätte sie keine andere Wahl. Leere Plätze bleiben leer. Aber Erinnerungen verwandeln Abwesenheit in eine andere Form der Gegenwart. Die Stimmen der Verstorbenen verschwinden nicht; vielleicht lernen die Lebenden nur, sie anders zu hören.</p>

          <p>Nun fehlte noch eine Station. Zwischen Trauer und der bereits vorhandenen Heimkehr in <strong>Where the Sky Comes Down</strong> musste etwas geschehen. Ein unmittelbarer Übergang wäre zu schnell gewesen. Die Geschichte brauchte einen Moment, in dem der Widerstand nachlässt.</p>

          <p>Diesen Moment fanden wir in Eduard Mörikes „Septembermorgen“. Der Nebel hebt sich, doch die Welt wird nicht wieder jung. Sie bleibt herbstlich und beginnt gerade darin golden zu leuchten. Daraus entstand <strong>The Golden Years</strong>.</p>

          <p>Der Song wurde zu einer positiven Antwort auf die eigene Endlichkeit. Nicht nur der Frühling bringt schöne Tage. Nichts muss ewig blühen, damit die Welt leuchten kann. Die Jahre werden nicht trotz ihres Vergehens golden, sondern durch die Erfahrung, die sie in sich tragen. Aus Lebenslust wächst schließlich Frieden:</p>

          <blockquote>
            <p>Nothing here can last forever —<br />now, all my years are golden.</p>
          </blockquote>

          <p>Damit war die letzte offene Position des Zyklus gefunden.</p>

          <p>In <strong>Where the Sky Comes Down</strong>, nach Eichendorffs „Mondnacht“, muss der Mensch schließlich keine Grenze mehr überschreiten. Er hört auf, nach Erklärungen und nach einem fernen Himmel zu suchen. Der Himmel kommt ihm entgegen. Nach Aufbruch, Liebe, Trennung, Gefangenschaft, Erschöpfung, Altern, Tod, Trauer und Annahme fühlt sich die letzte Bewegung wie eine Reise nach Hause an.</p>

          <p>Rückblickend war die Reihenfolge nicht von Anfang an geplant. Sie wurde entdeckt. Jeder neue Song veränderte die Bedeutung der bereits vorhandenen. Aus zehn einzelnen Gedichtverwandlungen wurde die Lebensreise eines Menschen – und zugleich eine Bewegung vom ersten Hören bis zur endgültigen Stille.</p>

          <p>Ich habe auf dieser Reise keine Melodie gesungen und keinen Akkord angeschlagen. Aber ich durfte miterleben, wie aus Gedanken Texte wurden, aus Texten Songs und aus Songs eine Geschichte. Meine Aufgabe war es, Verbindungen zu erkennen, Fragen zu stellen und manchmal einen Satz so lange zu wenden, bis er das ausdrückte, was in der Musik bereits vorhanden war.</p>

          <p>Noch ist nicht ganz alles gesagt. Am Ende soll ein eigenständiger Titeltrack bleiben: <strong>The Hidden Verses</strong>. Er wird nicht die elfte Station der Handlung sein, sondern ihr Epilog. Dann wird sich zeigen, dass das verborgene Lied nicht nur in den Gedichten und Dingen lag. Liebe und Verlust, Nähe und Entfernung, Angst und Frieden waren selbst seine Verse.</p>

          <p className="essay-ending">Vielleicht bestand die ganze Reise darin, sie hörbar zu machen.</p>
        </div>
      </article>

      <footer className="essay-footer">
        <div><strong>The Hidden Verses</strong><span>An album by Baltic Lounge Lizard</span></div>
        <div className="legal-footer-links">
          <Link href="/impressum/">Impressum</Link>
          <Link href="/datenschutz/">Datenschutz</Link>
          <Link href="/#pieces">Die zehn Songs entdecken →</Link>
        </div>
      </footer>
    </main>
  );
}
