
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
		console.log(data)
		var weatherIcon = data.weather[0].icon;
		console.log(weatherIcon)
		var tempData = data.main.temp;
		var tempEl = document.querySelector('.Temperature')
		tempEl.innerHTML = '';
	 var tempSpan = document.createElement('SPAN');
	 tempSpan.setAttribute('id', 'temp-span');
	 tempSpan.innerHTML = "Temperature: " + tempData + "°F";
	 tempEl.appendChild(tempSpan);
	 

	 var humidityData = data.main.humidity;
		var humidityEl = document.querySelector('.Humidity')
		humidityEl.innerHTML = '';
	 var humiditySpan = document.createElement('SPAN');
	 humiditySpan.setAttribute('id', 'humidity-span');
	 humiditySpan.innerHTML = "humidity: " + humidityData + "%";
	 humidityEl.appendChild(humiditySpan);

	 var windData = data.wind.speed;
		var windEl = document.querySelector('.wind-speed')
		windEl.innerHTML = '';
	 var windSpan = document.createElement('SPAN');
	 windSpan.setAttribute('id', 'wind-span');
	 windSpan.innerHTML = 'wind-speed: ' + windData +' MPH';
	 windEl.appendChild(windSpan);
	 var long = data.coord.lon;
	 var latitude = data.coord.lat;
	//  console.log(long);
	//  console.log(latitude);
	 getForcast()
	 getUvIndex(long,latitude);
	 displayCity(weatherIcon)
	 listItems()
	})
	
})

function getForcast(){
	fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputBox.value+'&units=imperial&appid=63da63bc31a4354e809cc481ffd9df64')
	.then(response => response.json())
	.then(data => {
		document.getElementById('five-day-forecast').innerHTML = '';
		for (let i = 0; i < data.list.length; i+=8) {
			const newData = data.list[i];
			var iconIndex = newData.weather[0].icon;
			console.log(newData);
			makeForcastCard(newData,iconIndex);
		}
console.log(data)
	})	
}

function makeForcastCard(newData,iconIndex){
	var fiveDayForcast = document.getElementById('five-day-forecast');
	var newElement1Div = document.createElement('div');
	newElement1Div.setAttribute('class','col-2 col-md-2');
	var newElement2Div = document.createElement('div');
	newElement2Div.setAttribute('class','card');
	var newElementH5 = document.createElement('h5');
	newElementH5.setAttribute('class','card-title');
	newElementH5.textContent = 'Date:' + newData.dt_txt;
	 var iconImg = document.createElement('img');
	 var iconString = 'https://openweathermap.org/img/w/'+ iconIndex +'.png';
	 iconImg.setAttribute('src', iconString);
	var newElementP1 = document.createElement('p');
	newElementP1.setAttribute('class','card-text');
	newElementP1.textContent = 'Temperature:' + newData.main.temp +'°F';
	var newElementP2 = document.createElement('p');
	newElementP2.setAttribute('class','card-text');
	newElementP2.textContent = 'Humidity:' + newData.main.humidity + '%';
	
	
	newElement2Div.appendChild(newElementH5);
	newElement2Div.appendChild(iconImg);
	newElement2Div.appendChild(newElementP1);
	newElement2Div.appendChild(newElementP2)

	newElement1Div.appendChild(newElement2Div);
	fiveDayForcast.appendChild(newElement1Div);
}

function displayCity(weatherIcon){

	var weather = 'https://openweathermap.org/img/w/'+ weatherIcon +'.png';
	console.log(weather);
	var cityDisplay = document.querySelector('.city-search').value;
	currentCity.innerText = cityDisplay;
	var dt = new Date();
	var newDate = dt.toLocaleDateString();
	var newElement = document.querySelector('#current-city');
	var newSpan = document.createElement('img');
	newSpan.setAttribute('src', weather );
	newSpan.innerHTML = ' (' + newDate + ')' + weather;
	newElement.appendChild(newSpan);
}

 function getUvIndex(long,latitude){

	 fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+long+'&exclude={part}&appid=63da63bc31a4354e809cc481ffd9df64')
  .then(response => response.json())
  .then(data => {
		var dataUvElement = data.current.uvi;
		var uvElement = document.querySelector('.uv-index')
		uvElement.innerHTML = '';
		var uvSpan = document.createElement('span');
		uvSpan.setAttribute('id', 'uvSpan-el');
		uvSpan.innerHTML = 'uv-index:'+ dataUvElement + '';
		uvElement.appendChild(uvSpan);

		console.log(data)
	});

}
function listItems(){
	var listElement = document.querySelector('.custom-list');
	var inputElement = document.querySelector('.city-search').value;
	var li = document.createElement('li');
	li.setAttribute('class', 'list-group-item');
	li.textContent = inputElement;
	listElement.appendChild(li);
	clearBtn.addEventListener('click',function(){
	 listElement.textContent = '';
	})

}

 



 


  


