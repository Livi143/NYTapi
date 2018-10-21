/*# New York Times Article Search - Phase 01

## Front-End Team
![nyt-search](Images/nyt.png)

* Create the layout for the design above. Feel free to use Bootstrap or to do something more customized of your own.

* Make sure to organize your code so as to have the necessary IDs.

* Incorporate text boxes for capturing User Input. Then research how to retrieve the input values in JavaScript

## Back-End Team

* Do preliminary research on the [API](http://developer.nytimes.com/article_search_v2.json).

* Register for an API Key.

* Understand what format the URL should look like to make an Article Call. (Hint: Use the API Console!!)

* Experiment with console logging various fields.*/


// first: get a way to grab the info from the form input fields: 
// unpon clicking the form: this is the event handler, which was: 
// 1) Search Term
// 2) Number of Records to Retrieve
// 3) Start Year(Optional)
// 4) End Year(Optional)
 
// second: concactonate towards the api key string
// what does the API string need to look like? 
// then send the AJAX call to NYT


$("#entry").submit(function( event )  {
    console.log("button clicked");
// Built by LucyBot. www.lucybot.com
// this needs to be in a function
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "d2370443fa244a039a13b98495f3ed14",
//   'q': "giants",
//   'fl': "web_url",
//   'page': 1
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });
})