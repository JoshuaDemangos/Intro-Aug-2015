#Random Quote Generator

In this assignment, we will be creating a very simple web application (powered by jQuery) that will display a random quote on the page when the user clicks a button.

## Learning Goals
By completing this assignment, you will have learned: 

* How to use an array to hold pieces of data (Like quotes).
* How to handle DOM events in jQuery
* How to change the contents of a page without refreshing the page using jQuery

#Tasks
* [ ] Create a new repository in your Github account called **03-RandomQuoteGenerator**.
* [ ] Clone this repository to your local machine.
* [ ] Open the folder containing your repository in Visual Studio Code.
* [ ] Create three folders in the root of your repository - **js**, **css** and **images**.
* [ ] Create a **site.css** file in the **css** folder.
* [ ] Create a **site.js** file in the **js** directory.
* [ ] Create an **index.html** file in the root of your repository.
* [ ] Add your site.css file to your index.html file using a link element in the head section.
* [ ] Add jQuery to your index.html file.
* [ ] Add your site.js file into your index.html file.

#Requirements

##There needs to be a button to generate a random quote.
Here is an example of the HTML you would use to add the button to the page

```html
<button id="generateButton">Generate Quote</button>
``` 

##There needs to be some form of container to display the random quote
Here is an example of the HTML and CSS you would use to display the random quote


```css
#quoteContainer {
	width: 960px;
	height: 400px;
	background-color: grey;
	text-align: center;
	padding: 100px;
}
#quoteText {
	color: white;	
}
```
```html
<div id="quoteContainer">
	<h2 id="quoteText"></h2>
</div>
```

##You need at least ten quotes.
Find ten quotes that you like, and store them in a Javascript array. Here is an example of a Javascript array.

```js
var quotes = [
	"quote 1",
	"quote 2",
	"quote 3",
	"quote 4",
	"quote 5",
	"quote 6",
	"quote 7",
	"quote 8",
	"quote 9",
	"quote 10"	
];
```

##You need to figure out how to get a random quote and display it on the screen.
This part will be up to you. First, you need to figure out how you can extract a random quote from your array.
I recommend using Google or Stack Overflow to search for "How to get a random element from an array".

Second, you will need to figure out how to change the contents of an HTML button on a page.

**Remember**: **Search**, **Ask**, **Post**. If you get stuck, **Search** Google or Stack Overflow, **Ask** an instructor/fellow student for help, or **Post** a question to Stack Overflow.


#Turn in instructions

* Push your changes to GitHub 
* Create an issue in the class repository called **03-RandomQuoteGenerator (Your Name Here)**.
	* Copy and paste the URL of your repository into the description of this issue.
	* Answer the following questions
		1. What was the best thing you learned in this assignment?
		2. What was the hardest part about this assignment?
		3. What would you add to this project if you had extra time?