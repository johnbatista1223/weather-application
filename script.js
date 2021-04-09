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
	.then(data => 	{
		var tempData = data.main.temp;
		var tempEl = document.querySelector('.Temperature')
	 var tempSpan = document.createElement('SPAN');
	 tempSpan.setAttribute('id', 'temp-span');
	 tempSpan.innerHTML = tempData + '°F';
	 tempEl.appendChild(tempSpan);

	 var humidityData = data.main.humidity;
		var humidityEl = document.querySelector('.Humidity')
	 var humiditySpan = document.createElement('SPAN');
	 humiditySpan.setAttribute('id', 'humidity-span');
	 humiditySpan.textContent = humidityData + '%';
	 humidityEl.appendChild(humiditySpan);

	 var windData = data.wind.speed;
		var windEl = document.querySelector('.wind-speed')
	 var windSpan = document.createElement('SPAN');
	 windSpan.setAttribute('id', 'wind-span');
	 windSpan.textContent = windData;
	 windEl.appendChild(windSpan);
	 var long = data.coord.lon;
	 var latitude = data.coord.lat;
	//  console.log(long);
	//  console.log(latitude);
	 getForcast()
	 getUvIndex(long,latitude);
	 
	})
	displayCity()
})

function getForcast(){
	fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputBox.value+'&units=imperial&appid=63da63bc31a4354e809cc481ffd9df64')
	.then(response => response.json())
	.then(data => {
		for (let i = 0; i < data.list.length; i+=8) {
			const newData = data.list[i];
			console.log(newData);
			makeForcastCard(newData)
		}
console.log(data)
	})	
}

function makeForcastCard(newData){
	var fiveDayForcast = document.getElementById('five-day-forecast');
	var newElement1Div = document.createElement('div');
	newElement1Div.setAttribute('class','col-3 col-md-2');
	var newElement2Div = document.createElement('div');
	newElement2Div.setAttribute('class','card');
	var newElementH5 = document.createElement('h5');
	newElementH5.setAttribute('class','card-title');
	newElementH5.textContent = 'date:' + newData.dt_txt;
	var newElementP1 = document.createElement('p');
	newElementP1.setAttribute('class','card-text');
	newElementP1.textContent = 'temperature:' + newData.main.temp +'°F';
	var newElementP2 = document.createElement('p');
	newElementP2.setAttribute('class','card-text');
	newElementP2.textContent = 'humidity:' + newData.main.humidity + '%';

	newElement2Div.appendChild(newElementH5);
	newElement2Div.appendChild(newElementP1);
	newElement2Div.appendChild(newElementP2)

	newElement1Div.appendChild(newElement2Div);
fiveDayForcast.appendChild(newElement1Div);

}

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

 function getUvIndex(long,latitude){

	 fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+long+'&'+latitude+'&appid=63da63bc31a4354e809cc481ffd9df64')
  .then(response => response.json())
  .then(data => {
		console.log(data)
	});


	 


}





 

 
  
 
//get uv index pass through to get lat and long for url 
//
 

//local storage
// elevenPm.val(localStorage.getItem('11-pm'));
// uv -index url