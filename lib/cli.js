#!/usr/bin/env node

const starwars = require('./starwars');
const args = process.argv.splice(2);

if (args.indexOf('--all') !== -1) {
  starwars.quotes.forEach(function (quote) {
    process.stdout.write(`${quote.quote}\n`);
  });
  return;
}

if (args.indexOf('--all-extended') !== -1) {
  starwars.quotes.forEach(function (quote) {
    process.stdout.write(`${quote.quote} – ${quote.character} - ${quote.movie}\n`);
  });
  return;
}

if (args.indexOf('--extended') !== -1) {
  const quote = starwars.extended()
  process.stdout.write(`${quote.quote} – ${quote.character} - ${quote.movie}\n`);
  return;
}

process.stdout.write(`${starwars()}\n`);
