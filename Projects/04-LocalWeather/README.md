# Local Weather Project
In this assignment, you will be creating a web application that consumes a Weather API to show the weather for a given city.

Make sure you have completed ["How to use APIs with jQuery"](https://www.codecademy.com/courses/web-beginner-en-uCajg/0/1) on Codecademy. 

Remember, **Read**, **Search**, **Ask**, **Post**. 
If you get stuck, **Read** this document thoroughly. There's a good chance the answer to your question is here. If not, **Search** Google or Stack Overflow, **Ask** an instructor/fellow student for help, or **Post** a question to Stack Overflow.

## Learning Goals
By completing this assignment, you will have learned: 

* How to consume an API to add more functionality to a web application.
* How to figure out the users current location from the web browser in JavaScript.
* How to show/hide different HTML elements using jQuery

## Tasks

**1. Set up your repository**
* Create a new repository on GitHub called **04-LocalWeatherProject**.
* Clone the repository to your local machine in ```C:\dev\projects```.
* Open the folder in Visual Studio Code. ```code C:\dev\projects\04-LocalWeatherProject```
* Add folders and files until you match the following folder structure
```
CSS
  |___ site.css
JS
  |___ site.js
index.html
```

---
**2. Build the HTML**
* Copy and paste the following HTML into your ```index.html``` file and follow the instructions in the comments.

```html
<html>
	<head>
    	<title>My Weather App</title>
        <!-- CSS files -->
		<link href="css/site.css" rel="stylesheet" />
	</head>
    
    <body>
        
        
        <input id="citySearch" type="text" />
        <button id="searchButton"></button>
        
        <hr />
        
        <!-- 1. Add an <h1> element with an id="location" -->
        
        <!-- 2. Add a <h3> element with an id="summary"  -->

		<!-- 3. Add a <p> element with an id="temperature" -->
        
        <!-- 4. I have added this for you. Notice the <span> is inside of the <p> element. -->
        <p>The nearest storm is <span id="stormDistance"></span> miles away</p>
        
        <!-- Javascript files -->
       	<script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>
        <script src="js/site.js" type="text/javascript"></script>
    </body>
</html>
```

---
**3. Build the JavaScript**
* Copy and the paste the following Javascript into your ```js/site.js``` file and follow the instructions in the comments.

```js
$(document).ready(function() {

	$("#searchButton").click(function() {
    
    	var cityName = $("#citySearch").val();

		// 1. Make a call to the Origin Weather API using $.get

		// 2. In the callback function you pass to $.get, add code that changes the text of the HTML elements you created in index.html to the relevant pieces of data returned by the API.

    });

});
```



## API Specifications

This section will tell you everything you need to know to be able to use the Origin Weather API.

URL: ```http://originweather.azurewebsites.net```

To get weather for a city: ```/weather/city?name=<city_name>```

To get weather using co-ordinates: ```/weather/coordinates?latitude=<latitude>&long=<longitude>```

The icons that could possibly be returned from the API are
```clear-day``` ```clear-night``` ```rain``` ```snow``` ```sleet``` ```wind``` ```fog``` ```cloudy``` ```partly-cloudy-day``` or ```partly-cloudy-night```


**Example**

```js
$.get('http://originweather.azurewebsites.net/weather/city?city=San%20Diego', function(data) {
	console.log(data);
});
```
Will log the following to the console
```js
{
	success: true,
    location: "San Diego, CA, USA",
    temperature: 72.45,
    summary: "Partly Cloudy",
    icon: "partly-cloudy-day",
    nearestStorm: 43
}
```
And
```js
$.get('http://originweather.azurewebsites.net/weather/coordinates?latitude=32.7775372&longitude=-117.10818089999998', function(data) {
	console.log(data);
});
```
Will log the following to the Console
```js
{
	success: true,
    location: "4005 Camino Del Rio South, San Diego, CA 92108, USA",
    temperature: 86.94,
    summary: "Clear",
    icon: "clear-day",
    nearestStorm: 40
}
```

[Click here to see an example on JSFiddle](http://jsfiddle.net/ygwrt7xv/)


## Turn in instructions

* Push your changes to GitHub 
* [Click here to create an issue in the class repository](https://github.com/OriginCodeAcademy/Intro-Aug-2015/issues/new?title=04-LocalWeatherProject&body=Repository URL%0A[Insert your repository URL here]%0A%0A1. What was the best thing you learned in this assignment?%0A%0A2. What was the hardest part about this assignment?%0A%0A3. What would you add to this project if you had extra time?)
	* Include a link to your repository in the description
	* Answer the questions filled out for you in the description