# starwars

starwars is a simple Node.js module that allows you to insert a random Star Wars quote into your site, or view one through the command line.

## Usage

Simply install through npm by running...

`npm install @jybleau/starwars`


```javascript
const starwars = require('@jybleau/starwars');

console.log(starwars()); // "No. I am your Father."
console.log(starwars()); // "Great shot kid, that was one in a million."
console.log(JSON.stringify(starwars.extended())); // { quote: "Great shot kid, that was one in a million.", character: "Han Solo" }
console.log(JSON.stringify(starwars.quotes)); // [{ quote: "No. I am your Father.", character: "Darth Vader" }, { quote: "Great shot kid, that was one in a million.", character: "Han Solo" }, ...]
```

### Command Line

starwars can also be used within the command line. Simply install globally through npm by running...

`npm install @jybleau/starwars -g`

...and then typing `starwars` into your console. A random quote will then be displayed on the screen (especially helpful if you're having a bad day and need to read some inspirational text).

Typing ` starwars --extended` into your console. A random quote will be displayed with the associated character name and movie title.

You can also type ` starwars --all` into your console to display all of the available quotes.

And type ` starwars --all-extended` into your console to display all quotes, each with their associated character name and movie title.
