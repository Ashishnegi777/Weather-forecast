const apikey = "3e0169cce08640ec8480d66269b1bbe3";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';


const city = document.querySelector(".location");
const temp = document.querySelector(".temp");
const humiPer = document.querySelector(".humidity-per");
const windPer = document.querySelector(".wind-per");
const input = document.querySelector('.in');
const search = document.querySelector('.search-method input');
const searchBtn = document.querySelector(".search-method button");
const weatherIcon = document.querySelector(".w-icon");
const pressure = document.querySelector(".per");

document.addEventListener("onload", flipUp());

async function checkWeather(location){
    const response = await fetch(apiUrl + location +`&appid=${apikey}`);
    var data = await response.json();// converting the data into JSON format

    console.log(data);
    gradientAnime();

    if(data.cod == "404"){
        temp.textContent = data.message;
        document.querySelector(".h-w-warp").style.visibility = 'hidden';
        weatherIcon.src = 'assets/error.svg';
    }
    
    // for html manipulation
    city.textContent = data.name;
    temp.textContent = Math.round(data.main.temp) + "°C";
    humiPer.textContent = data.main.humidity + "%";
    windPer.textContent = data.wind.speed  +"km/h";
    pressure.textContent = data.main.sea_level;



    // for differ weather condition icon change
    if(data.weather[0].main == 'clear'){
        weatherIcon.src = 'assets/images/clear.png';// changing the source of the image
        document.querySelector(".h-w-warp").style.visibility = 'visible';
        
    }
    if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'assets/images/mist.png';
        document.querySelector(".h-w-warp").style.visibility = 'visible';
    }
    else if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = '/assets/images/clouds.png';
        document.querySelector(".h-w-warp").style.visibility = 'visible';
      
    }
    else if(data.weather[0].main == 'rain'){
        weatherIcon.src = 'assets/images/rain.png';
        document.querySelector(".h-w-warp").style.visibility = 'visible';
        
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'assets/images/drizzle.png';
        document.querySelector(".h-w-warp").style.visibility = 'visible';
    }
    else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = 'assets/images/snow.png';
        document.querySelector(".h-w-warp").style.visibility = 'visible';
    }
    else{
        document.querySelector(".h-w-warp").style.visibility = 'visible';
    }
}

//calling the checkWeather funciton by mouse click 
searchBtn.addEventListener('click', ()=>{
    checkWeather(search.value);
    
})