// TYPING EFFECT
let Type = new Typed(".typed", {
    strings: ["Discover the Weather in Your City","Get the Weather Forecast in Your Area", 
               "Enjoy Your Day With a Good Weather Forecast"],
    backDelay: 3000,
    typeSpeed: 150,
    backSpeed: 110,
    loop: true
})





// VARIABLE DECLARATION
let london = document.getElementById("london");
let lagos = document.getElementById("lagos");
let newyork = document.getElementById("newyork");
let abuja = document.getElementById("abuja");
let nameInput = document.querySelector(".nameInput");
let cityInput = document.querySelector(".cityInput");
let countryInput = document.querySelector(".countryInput");
let continueButton = document.querySelector(".continueButton");
let test = document.querySelector(".test");
let generalObserver = document.querySelectorAll("[generalObserver]");






// CLASS
class Container {
    constructor() {
        this.key = "62cbc5a43d28413437249821052ca1d1";
        
    }

     xml(location, response){
        const xml = new XMLHttpRequest()
        xml.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.key}&units=metric `, true);
            xml.onload = function(){
                if(xml.status === 200){
                    JSON.parse(xml.responseText);
                    // console.log(response);
                    response(null, JSON.parse(xml.responseText));
                }else{
                    response(`Error: ${xml.status}, something went wrong`);
                }
            }

        xml.send();      
    }

    londonForecast(){
        this.xml("london", function(error, response){
            if(response){
                london.innerHTML = `
                <h5 class="card-title">City: ${response.name}, ${response.sys.country}</h5>
                <h5 class="card-title">Temperature: ${response.main.temp}<sup>o</sup>C</h5>
                <h5 class="card-title">Wind Speed: ${response.wind.speed}m/s</h5>
                <h5 class="card-title">latitude: ${response.coord.lat}</h5>
                <h5 class="card-title">Weather: ${response.weather[0].description}</h5> 

            `  
            }else{
                london.innerHTML = error;

            }
        });

    }

    lagosForecast(){
        this.xml("lagos", function(error, response){
            if(response){
                lagos.innerHTML = `
                <h5 class="card-title">City: ${response.name}, ${response.sys.country}</h5>
                <h5 class="card-title">Temperature: ${response.main.temp}<sup>o</sup>C</h5>
                <h5 class="card-title">Wind Speed: ${response.wind.speed}m/s</h5>
                <h5 class="card-title">latitude: ${response.coord.lat}</h5>
                <h5 class="card-title">Weather: ${response.weather[0].description}</h5> 

            `  
            }else{
                lagos.innerHTML = error;
            }
        });

    }

    newyorkForecast(){
        this.xml("new york", function(error, response){
            if(response){
                newyork.innerHTML = `
                <h5 class="card-title">City: ${response.name}, ${response.sys.country}</h5>
                <h5 class="card-title">Temperature: ${response.main.temp}<sup>o</sup>C</h5>
                <h5 class="card-title">Wind Speed: ${response.wind.speed}m/s</h5>
                <h5 class="card-title">latitude: ${response.coord.lat}</h5>
                <h5 class="card-title">Weather: ${response.weather[0].description}</h5> 

            `  
            }else{
                newyork.innerHTML = error;
            }
        });

    }

    abujaForecast(){
        this.xml("abuja", function(error, response){
            if(response){
                abuja.innerHTML = `
                <h5 class="card-title">City: ${response.name}, ${response.sys.country}</h5>
                <h5 class="card-title">Temperature: ${response.main.temp}<sup>o</sup>C</h5>
                <h5 class="card-title">Wind Speed: ${response.wind.speed}m/s</h5>
                <h5 class="card-title">latitude: ${response.coord.lat}</h5>
                <h5 class="card-title">Weather: ${response.weather[0].description}</h5> 

            `  
            }else{
                abuja.innerHTML = error
            }
        });

    }

    
    dynamicForecast(){
        let self = this
        continueButton.addEventListener("click", function(e){
      
            if(nameInput.value.match(/^\s*$/) || cityInput.value.match(/^\s*$/) || countryInput.value.match(/^\s*$/) ){
                alert("Please complete the form")
                e.preventDefault();
                return;

            }else if(nameInput.value.length > 23){
                alert("maximum name input is 23");
                e.preventDefault();

            }else{
               
                // To store name and city of user in the local storage
                self.localStore();

                // To clear input field
                        cityInput.value=""
                        nameInput.value=""
                        countryInput.value=""
            }
 
        })
    }

    localStore(){
        localStorage.setItem("nameInput", nameInput.value);
        localStorage.setItem("cityInput", cityInput.value);
    }

    observer() {   
        let opts = {
            root: null,
            threshold:0.25,
            rootMargin: "0px 0px -280px 0px"
        };

        if("IntersectionObserver" in window){
            let observer_two = new IntersectionObserver((entries,observer)=>{
                entries.forEach((entry)=>{
                    if(!entry.isIntersecting){
                        entry.target.classList.remove("observer_two_show");
                    }else {
                        entry.target.classList.toggle("observer_two_show");
                    }
                
                });
            
            },opts);
                generalObserver.forEach((obs)=>{
                observer_two.observe(obs);
            
                 })
        }else {
             alert("You seem to be using unsupported browser, please upgrade or use a supported browser to increase your experience");

        }
    }



}






// INSTANTIALISATION
let container = new Container();
container.londonForecast();
container.lagosForecast();
container.newyorkForecast();
container.abujaForecast();
container.dynamicForecast();
container.observer();












