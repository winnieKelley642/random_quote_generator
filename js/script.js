/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*
Goals: I am going for Exceeds Expectation 

Project Objectives: Display a random famous quote each time a button is clicked

Grading guidelines checklist:
  ~ Array of objects:
    ~ named quotes -> done
    ~ contains at least 5 quote objects -> done
    ~ is free of errors that prevent the code from runninng
  ~ Object:
    ~ have quote and source properties -> done
    ~ at least one object has citation property -> done
    ~ at least one object has year property -> done
      ~ Bonus:
        ~ At least one object has at least one additional property, such as tags -> done (I added tags) 
        ~ At least one additional property prints to the page with the its quote -> done
  ~ printQuote function:
    ~ name printQuote -> (done)
    ~ calls getRandomeQuote function -> (done)
    ~ print a quote and a source property with every quote -> (done)
    ~ prints a citation property with at leas one quote -> (done)
    ~ prints a year property with at least one quote -> (done)
    ~ print quotes match the format, layout and styles of the example quote in the index.html file -> (done)
      - Bonus:
        - Quotes automatically refresh after intervals 
        - Background colour changes to a random colour each time the quote refreshes
*/


//Beginning of code

//declaring my variables:
let message = '';
/*** 
 * `quotes` array 
***/

// Build a collection of quotes
  // Create an array of objects called 'quotes'
  var quotes = [
    // Create objects for each quote with properties: quote, source, citation, year and tag (bonus)
    {
      quote: 'As soon as we started programming, we found to our surprise that it wasn\'t as easy to get programs right as we had thought. Debugging had to be discovered. I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.',
      source: 'Maurice Wilkens, designer of EDSAC ',
      citation: 'When Maurice Wilkens discovers debugging' ,
      year: 1949,
      tag: null
    },
    {
      quote: 'Testing leads to failure, and failure leads to understanding.',
      source: 'Burt Rutan',
      citation: null,
      year: null,
      tag: null
    },
    
    {
      quote: 'Don\'t wait until you have a bug to step through your code.',
      source: 'Steve Maguire',
      citation: 'Chapter 4: Step Through Your Code, Writing Solid Code: Microsoft\'s Techniques for Developing Bug-Free C Programs.' ,
      year: 1993,
      tag: 'bug code'
    },
    
    {
      quote:'Everybody in this country should learn to program a computer... because it teaches you how to think.',
      source: 'Steve Jobs',
      citation: 'co-founder and CEO of Apple Inc',
      year: null,
      tag: null
    },
    
    {
      quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
      source: 'Patrick McKenzie',
      citation: null,
      year: 2017,
      tag: null
    },
    
    {
      quote: 'Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is on essential skill to learn.',
      source: 'Stephen Hawking',
      citation: null, 
      year: null,
      tag: null
    },
  ];
//These are for testing purpose only, will comment out later
//console.log(quotes);

/***
 * `getRandomQuote` function
***/

/*
This functon will do three things:
  1. use Math.floor.Math.random with the length of quotes to generate a random number. 
  2. use brack notationa and random number variable to get a quote from the array.
  3. return the random quote object.
*/

//Create a get random quote function called getRandomQuote here:
function getRandomQuote(){
  // Create a variable and store a random number between 0 and the array's length
  let randomNumber = Math.floor(Math.random() * quotes.length);

  //This is for testing purpose only to make sure random number is being generated
  //console.log(`The random number is: ${randomNumber}`);

  //get and return a random quote with the bracket notationa and random number
  return quotes[randomNumber];
}

//This is for testing purposes only to make sure a random quote object is being generated
//console.log(getRandomQuote());

/***
 * `printQuote` function
***/

//Time to display the random quote!
//This function should show when the user clicks on the "Show another quote" button.
//This function is called by the line of code at the end of this file created by Treehouse

/*
When the "Show another quote button is clicked, this function will be called and it will:
  1. get a random quote object and all of it's properties using the getRandomQuote function
  2. it will print out the quote, and using conditional statements, I will be printing out other properties such as source, citation, year and tag ONLY if the property isn't null.
*/

//Create printQuote function here:
function printQuote(){
  //get the quote object using the getRandomQuote function that is already created.
  let chosenQuote = getRandomQuote();
  
  //This is for testing purpose only. Making sure that a random quote object is passed into chosenQuote
  //console.log(chosenQuote);

  //Here I can just go ahead and print the quote to the user or I can run an if statment to make sure there is a quote. However, there is no reason for why there wouldn't be a quote. So for now I will just print the randomly selected quote to the user. Maybe I'll add an if statement later.
  //message = chosenQuote.quote;


  //This is where I will start figuring out what properties does the quote object have, so the right information can be displayed.
  //I am using the if statment and the dot notation to check each property (quote, source, citation, year and tag).
  //if the object has the property, it will display the information

  //instructions for this project wants the first two elements (quote and source) to be with <p> tag and leaving the second one without </p>
  if (chosenQuote.quote != null){
    message = `<p class = "quote"> ${chosenQuote.quote} </p>`;
  }
  if (chosenQuote.source != null){
    message += `<p class = "source"> ${chosenQuote.source}`;
  }

  //instructions wants the rest to be concatenate with a <span></span> 
  if (chosenQuote.citation != null){
    message += `<span class = "citation"> ${chosenQuote.citation}`;
  }
  if (chosenQuote.year != null){
    //the instructions wants the </p> tag to be After the two if statements, concatenate the closing </p> 
    message += `<span class = "year"> ${chosenQuote.year} </p>`;
  }
  if (chosenQuote.tag != null){
    message += `<span class = "tag"> ${chosenQuote.tag}`;
  }
  //change the quote to the randomly selected quote
  document.getElementById('quote-box').innerHTML = message;  

  //For testing purposes only
  console.log(message);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);