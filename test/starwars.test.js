const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const starwars = require("../index");

test("default export returns a quote string from the dataset", () => {
  const quote = starwars();
  assert.equal(typeof quote, "string");
  assert.notEqual(quote.length, 0);

  const knownQuotes = new Set(starwars.quotes.map((entry) => entry.quote));
  assert.equal(knownQuotes.has(quote), true);
});

test("extended export returns an object with quote and character", () => {
  const entry = starwars.extended();

  assert.equal(typeof entry, "object");
  assert.equal(typeof entry.quote, "string");
  assert.notEqual(entry.quote.length, 0);
  assert.equal(typeof entry.character, "string");
});

test("quotes export is a non-empty array of quote objects", () => {
  assert.equal(Array.isArray(starwars.quotes), true);
  assert.notEqual(starwars.quotes.length, 0);

  for (const entry of starwars.quotes) {
    assert.equal(typeof entry.quote, "string");
    assert.notEqual(entry.quote.length, 0);
    assert.equal(typeof entry.character, "string");
  }
});

test("cli prints a quote with no flags", () => {
  const cliPath = path.join(__dirname, "..", "lib", "cli.js");
  const result = spawnSync(process.execPath, [cliPath], { encoding: "utf8" });

  assert.equal(result.status, 0);
  assert.equal(result.stderr, "");
  assert.notEqual(result.stdout.trim().length, 0);
});

test("cli --extended prints quote, character, and movie", () => {
  const cliPath = path.join(__dirname, "..", "lib", "cli.js");
  const result = spawnSync(process.execPath, [cliPath, "--extended"], { encoding: "utf8" });

  assert.equal(result.status, 0);
  assert.equal(result.stderr, "");
  assert.match(result.stdout, / – .* - .*/);
});

test("cli --all prints one line per quote", () => {
  const cliPath = path.join(__dirname, "..", "lib", "cli.js");
  const result = spawnSync(process.execPath, [cliPath, "--all"], { encoding: "utf8" });

  assert.equal(result.status, 0);
  assert.equal(result.stderr, "");
  const lines = result.stdout.trimEnd().split("\n");
  assert.equal(lines.length, starwars.quotes.length);
});
