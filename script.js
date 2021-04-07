//city api
var inputBox = document.querySelector('.city-search');
var searchBtn = document.querySelector('#search-btn');
var clearBtn = document.querySelector('#clear-history');
var currentCity = document.querySelector('#current-city');
var currentDate = document.querySelector('#current-date');
var cityTemp = document.querySelector('#temp');
var Humidity = document.querySelector('#humidity');
var windSpeed = document.querySelector('#wind-speed');
var uvIndex = document.querySelector('#uv-index');
 var apiKey ='63da63bc31a4354e809cc481ffd9df64';

 

	searchBtn.addEventListener("click", function(event){
	event.preventDefault();

	fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBox.value+'&units=imperial&appid=63da63bc31a4354e809cc481ffd9df64')
	.then(response => response.json())
	.then(data => console.log(data))
	displayCity()
})
function displayCity(){
	var cityDisplay = document.querySelector('.city-search').value;
	currentCity.innerText = cityDisplay;
	var dt = new Date();
	var newDate = dt.toLocaleDateString();
	var newElement = document.querySelector('#current-city');
	var newSpan = document.createElement('SPAN');
	newSpan.setAttribute("id", "current-date");
	newSpan.textContent = newDate;
	newElement.appendChild(newSpan);
	
}



 

 
  
 

 


// elevenPm.val(localStorage.getItem('11-pm'));
