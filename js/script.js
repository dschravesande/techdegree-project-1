/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "One man's crappy software is another man's full time job.",
    source: "Jessica Gaston",
    citation: "defprogramming.com",
    year: 2019
  },
  {
    quote: "The best reaction to “this is confusing, where are the docs” is to rewrite the feature to make it less confusing, not write more docs.",
    source: "Jeff Atwood",
    citation: "defprogramming.com",
    year: 2019
  },
  {
    quote: "Each new user of a new system uncovers a new class of bugs.",
    source: "Brian W. Kernighan"
  },
  {
    quote: "Java is to Javascript as ham is to hamster.",
    source: "Jeremy Keith"
  },
  {
    quote: "Code smells.",
    source: "Martin Fowler"
  }
]

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * quotes.length)
  return quotes[randomNumber]
}

/***
 * `printQuote` function
***/

function printQuote() {
  let randomQuote = getRandomQuote()
  let htmlString = ''
  
  htmlString.concat('<p class="quote">', randomQuote.quote, '</p>')

  htmlString.concat('<p class="source">', randomQuote.source)
  if (randomQuote.citation) {
    htmlString.concat('<span class="citation">', randomQuote.citation, '</span>')
  }
  if (randomQuote.year) {
    htmlString.concat('<span class="year">', randomQuote.year, '</span>')
  }
  htmlString.concat('</p>')

  document.getElementById('quote-box').innerHTML = htmlString
}

console.log(printQuote())

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false)