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
	
}

function displayDate(){
 var dt = new Date();
document.getElementById("current-date").innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (("0"+dt.getDate()).slice(-2)) +"/"+ (dt.getFullYear());
 }

 displayDate()

 
 
  
 

 


// elevenPm.val(localStorage.getItem('11-pm'));
