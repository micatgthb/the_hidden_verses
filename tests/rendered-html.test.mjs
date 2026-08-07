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
  assert.match(html, /Where the Sky Comes Down/);
  assert.match(html, /Springtime Feeling/);
  assert.match(html, /Under Different Skies/);
  assert.match(html, /Ein Fichtenbaum steht einsam/);
  assert.match(html, /2377015037/);
  assert.match(html, /Der fertige vierte Song ist jetzt zu hören/);
  assert.match(html, /Song IV ist nun fertig und kann gehört werden/);
  assert.doesNotMatch(html, /Song IV nimmt Gestalt an/);
  assert.match(html, /MIDI-Instrumenten, Samples und virtuellen Instrumenten/);
  assert.match(html, /mit Suno weiterentwickelt/);
  assert.match(html, /the-hidden-verses-cover\.webp/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});
