import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the album website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="de">/i);
  assert.match(html, /The Hidden Verses/);
  assert.match(html, /Baltic Lounge Lizard/);
  assert.match(html, /A Song in Everything/);
  assert.match(html, /Wünschelrute/);
  assert.match(html, /In allem, was ist, ruht ein Klang/);
  assert.match(html, /\/audio\/01-a-song-in-everything\.m4a/);
  assert.match(html, /Where the Sky Comes Down/);
  assert.match(html, /Springtime Feeling/);
  assert.match(html, /hatte der Mai seine ersten Boten ausgesandt/);
  assert.match(html, /Under Different Skies/);
  assert.match(html, /Ein Fichtenbaum steht einsam/);
  assert.match(html, /Jede Nacht, im selben Traum/);
  assert.match(html, /The Same Circle/);
  assert.match(html, /Der Panther/);
  assert.match(html, /Lass die Schatten hinter dir/);
  assert.match(html, /When the Flowers Are Gone/);
  assert.match(html, /Hälfte des Lebens/);
  assert.match(html, /He Knows Us by Name/);
  assert.match(html, /Schlußstück/);
  assert.match(html, /he knows our names and waits outside/);
  assert.match(html, /\/audio\/07-he-knows-us-by-name\.m4a/);
  assert.match(html, /<audio[^>]*controls/i);
  assert.match(html, /\/audio\/02-where-the-sky-comes-down\.m4a\?v=2/);
  assert.match(html, /\/audio\/04-under-different-skies\.m4a/);
  assert.match(html, /\/audio\/05-the-same-circle\.m4a/);
  assert.match(html, /\/audio\/06-when-the-flowers-are-gone\.m4a/);
  assert.doesNotMatch(html, /soundcloud\.com|SoundCloud Player/i);
  assert.match(html, /ohne Verbindung zu SoundCloud und ohne Anmeldung/);
  assert.match(html, /Als achter fertiggestellter Song/);
  assert.match(html, /Der Tod kennt uns beim Namen/);
  assert.doesNotMatch(html, /Song IV nimmt Gestalt an/);
  assert.match(html, /MIDI-Instrumenten, Samples und virtuellen Instrumenten/);
  assert.match(html, /mithilfe KI-gestützter Werkzeuge weiterentwickelt/);
  assert.doesNotMatch(html, /Suno|ChatGPT/);
  assert.match(html, /Zur Entstehung des Albums/);
  assert.match(html, /the-hidden-verses-cover\.webp/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});
