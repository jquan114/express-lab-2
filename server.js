const express = require("express");
const req = require("express/lib/request");

//create a variable name app, and set it to equal to express()

const app = express();

//Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".
//Give the greeting route a param /:name
//When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy'should display Wow! Hello there, Jimmy-boyon the page).

app.get("/greetings/:name", (request, response) => {
  response.send("hello" + " " + request.params.name);
});

//Your app should have a route of '/tip'and it should expect 2 params. One should be totaland one should be tip Percentage.
app.get("/tip/:total/:tipPercentage", (request, response) => {
  let tip = (request.params.tipPercentage / 100) * request.params.total;
  response.send(`${tip}`);
});

//So if the user hits that route and asks a question of
//"Will I be a Millionaire" (ex. '/magic/Will%20I%20Be%20A%20Millionaire')
//he should have return to him his question AND a random Magic 8 ball response (see the array below) on the screen
const myArray = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:question", (request, response) => {
  const x = Math.floor(Math.random() * myArray.length - 1);
  response.send(`${request.params.question}  <h1> ${myArray[x]} </h1>`);
});

app.listen(3000, () => {
  console.log("Hello, Seattle. I'm listening for what");
});

// On the home page (get "/"), users should see:
//"99 Bottles of beer on the wall"
// app.get("/number_of_bottles/:98", (request,response)=>{}
// )
    // a link that says "take one down, pass it around"
 

  //this should link to /98, where the number represents the number of bottles left.

  //When a number is given in the url (get "/:number_of_bottles"), users should see:
//The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.)


//a link to "take one down, pass it around",
// where the href is number of bottles in the parameter minus 1.



app.get('/', (req, res) => {
    res.send(`<p>99 Bottles of the beer on the wall</p>
          <a href="http://localhost:3000/98">take one down, pass it around</a>
      `);
  });
  
  app.get('/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles == 0) {
      res.send(`<a href="http://localhost:3000/">Start Over!</a>`);
    } else {
      res.send(`<p>${
        req.params.number_of_bottles
      } Bottles of the beer on the wall</p>
                <a href="http://localhost:3000/${
                  req.params.number_of_bottles - 1
                }">take one down, pass it around</a>
            `);
    }
  });