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

    try{
    const response = await fetch(apiUrl + location +`&appid=${apikey}`);
    var data = await response.json();// converting the data into JSON format

    console.log(data);
    gradientAnime();

    
    // for html manipulation
    city.textContent = data.name;
    temp.textContent = Math.round(data.main.temp) + "°C";
    humiPer.textContent = data.main.humidity + "%";
    windPer.textContent = data.wind.speed  +"km/h";
    pressure.textContent = data.main.sea_level;



    // for differ weather condition icon change
    if(data.weather[0].main == 'clear'){
        weatherIcon.src = './assets/images/clear.png';// changing the source of the image
        document.querySelector(".h-w-warp").style.visibility = 'visible';
        gradientAnimeOne();
        slideUpAnime();
        fadeUpAnime();
        
    }
    if(data.weather[0].main == 'Mist'){
        weatherIcon.src = './assets/images/mist.png';
        document.querySelector(".h-w-warp").style.visibility = 'visible';
        gradientAnimeOne();
        slideUpAnime();
        fadeUpAnime();
       
    }
    else if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = './assets/images/clouds.png';
        document.querySelector(".h-w-warp").style.visibility = 'visible';
        gradientAnimeOne();
        slideUpAnime();
        fadeUpAnime();
      
    }
    else if(data.weather[0].main == 'rain'){
        weatherIcon.src = './assets/images/rain.png';
        document.querySelector(".h-w-warp").style.visibility = 'visible';
        gradientAnimeOne();
        slideUpAnime();
        fadeUpAnime();
        
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = './assets/images/drizzle.png';
        document.querySelector(".h-w-warp").style.visibility = 'visible';
        slideUpAnime();
        fadeUpAnime();
    }
    else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = './assets/images/snow.png';
        document.querySelector(".h-w-warp").style.visibility = 'visible';
        slideUpAnime();
        fadeUpAnime();
    }
    else{
        weatherIcon.src = './assets/images/clouds.png';
        document.querySelector(".h-w-warp").style.visibility = 'visible';
        gradientAnimeOne();
        slideUpAnime();
        fadeUpAnime();
    }
}
catch{
        temp.textContent = data.message;
        document.querySelector(".h-w-warp").style.visibility = 'hidden';
        weatherIcon.src = './assets/images/error.svg';
        slideUpAnime();
}
}



//calling the checkWeather funciton by mouse click 
searchBtn.addEventListener('click', ()=>{
    checkWeather(search.value);
    
})
//calling the checkWeather funciton by Enter keypress event
search.addEventListener('keypress', (event)=>{
    if(event.key === "Enter" )
    checkWeather(search.value);
});

// adding an event driven for direct jump to the input field
document.addEventListener('keydown', function(event){
    if(/^[a-zA-Z]$/.test(event.key)){
        input.focus();
    }
})

// for slide up animation GSAP
function slideUpAnime(){
    gsap.from(".w-icon, .temp, .location",{
        y: 40, 
        opacity: 0,
        duration: 1, 
        ease: "power3.out",
    });
}

// for fade up animation GSAP
function fadeUpAnime(){
    gsap.from(" .humi-warp, .wind-warp, .pre-warp",{
        y: 35,
        opacity: 0,
        duration: 2, 
        ease: "power4.out", 
        stagger: 0.1,
    });
}

//for gradient animation 
function gradientAnimeOne(){
    gsap.from(".main",{
        duration: 2,
        background: "linear-gradient(45deg, #caefd7,#f5bfd7,#abc9e9)",
        yoyo: true,
        repeat: -1,
    })
};

function gradientAnime(){
    gsap.from(".main",{
        duration: 2.5,
        background: "linear-gradient(40deg, #60696b,#858e96)",
        yoyo: true,
        repeat: -1,
        stagger: 2,
    })
};


function flipUp(){
    gsap.fromTo(".main",{
        rotationX: -10,
        rotationY: -350,
        rotationZ: 10,
        scale: 0,
        opacity: 0.2
    },
    {
        duration: 2.5,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
        opacity: 1,
        ease: "power4.out"
    }
    )
}

