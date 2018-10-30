/*# New York Times Article Search - Phase 01

## Front-End Team
![nyt-search](Images/nyt.png)

* Create the layout for the design above. Feel free to use Bootstrap or to do something more customized of your own.

* Make sure to organize your code so as to have the necessary IDs.

* Incorporate text boxes for capturing User Input. Then research how to retrieve the input values in JavaScript

## Back-End Team

* Do preliminary research on the [API](http://developer.nytimes.com/article_search_v2.json).

* Register for an API Key.
api key d2370443fa244a039a13b98495f3ed14

* Understand what format the URL should look like to make an Article Call. (Hint: Use the API Console!!)

* Experiment with console logging various fields.*/


<<<<<<< HEAD


/*# New York Times Article Search - Phase 02

## Front-End Team

* Begin creating basic click events. Register the submit button
// ajax call? 
* Create working transfers of data between the text-boxes and the backend.

* Experiment with creating content regions for where the article will go.

## Back-End Team

* Create the AJAX call needed to retrieve data then console.log all of the relevant fields.*/

console.log(

)
//* Incorporate various “optional parameters” (hard code these in initially).

//* Take note of various “bugs” that appear with certain searches.

//## All-Together

//* Display the HTML content!!
=======
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
    var term = $('#entry').find('input[id="term"]').val();
    console.log("term text"+ term);
    var records = $('#entry').find('input[id="records"]').val();
    console.log("term text"+ records);
    var startYear = $('#entry').find('input[id="start-year"]').val();
    console.log("start-year"+ startYear); 
    var endYear = $('#entry').find('input[id="end-year"]').val();
    console.log("End year"+ endYear);   

    if (startYear.length ===0 ) {
        startYear="18000101"
    }
    if (endYear.length===0 ) {
        endYear="20181010"
    }
    // Built by LucyBot. www.lucybot.com
    // this needs to be in a function



    for (var page = 0; page < 10; page++) {
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "d2370443fa244a039a13b98495f3ed14",
            'q': term,
            'fl': "web_url",
            'begin_date': startYear,
            'end_date': endYear,
            'page': page
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            console.log(result);
        }).fail(function(err) {
            throw err;
        });
    }
})
>>>>>>> 49b2f6dc01e5cc35b805656aa89379aea111cc92
