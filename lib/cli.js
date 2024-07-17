#!/usr/bin/env node

var starwars = require('./starwars');
var args = process.argv.splice(2);

if (args.indexOf('--all') !== -1) {
  starwars.quotes.forEach(function (quote) {
    process.stdout.write(quote.quote + '\n');
  });
  return;
}

if (args.indexOf('--all-with-characters') !== -1) {
  starwars.quotes.forEach(function (quote) {
    process.stdout.write(quote.quote + ' –' + quote.character + '\n');
  });
  return;
}

if (args.indexOf('--with-character') !== -1) {
  var quote = starwars.withCharacter()
  process.stdout.write(quote.quote + ' –' + quote.character + '\n');
  return;
}

process.stdout.write(starwars() + '\n');