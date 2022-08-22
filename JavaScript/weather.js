
// VARIABLE DECLARATION
let containerAll = document.querySelector(".containerAll");
let divContainer = document.querySelector(".divcontainer");
let loaderContainer = document.querySelector(".loaderContainer");
let cityInput = localStorage.getItem("cityInput");
let nameInput = localStorage.getItem("nameInput");

// DATE
let d = new Date()
let months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
let year = d.getFullYear();
let month = months[d.getMonth()];
let date = d.getDate();
let day = days[d.getDay()];




// TYPING EFFECT
var Type1 = new Typed(".type", {
    strings: [`Welcome ${nameInput.toLocaleLowerCase()}`],
    // smartBackSpace: true,
    backDelay: 2000,
    typeSpeed: 140,
    backSpeed: 110,
    loop: true
})










// CLASS
class Container2 {
    constructor() {
        this.key = "62cbc5a43d28413437249821052ca1d1";
    }

     xml(location, response){
        const xml = new XMLHttpRequest()
        xml.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.key}&units=metric `, true);
            xml.onload = function(){
                if(xml.status === 200){
                    JSON.parse(xml.responseText);
                    response(null, JSON.parse(xml.responseText));
                }else{
                    response(`Error: ${xml.status}, Sorry we couldn't process your request, please try again later!`);
                }
            }

        xml.send();      
    }

    userForecast(){
        this.xml(`${cityInput}`, function(error, response){
            if(response){
                divContainer.innerHTML = `

                <div class="divcontainer">
                <div>
                    <h2 class="text-center"><sup><i class="fa fa-map-marker mt-5"></i></sup> ${response.name}, ${response.sys.country}</h2>
                    <p class="text-center text-white">${day}, ${month} ${date}, ${year}</p>
                    <h1 class="text-center">${response.main.temp}<sup>o</sup>C</h1>
                    <p class="text-center text-white">${response.weather[0].description}</p>
            

                </div>
                <div class="tableContainer mb-5">
                    <h3 class="text-center mb-3 mt-5">Weather Details:</h3>
                    <table>
                        <tr>
                            <td>
                                Wind Speed
                            </td>
                            <td>
                            ${response.wind.speed}m/s
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Wind Degree
                            </td>
                            <td>
                                ${response.wind.deg}<sup>o</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Humility
                            </td>
                            <td>
                                ${response.main.humidity}%
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Visibility
                            </td>
                            <td>
                                 ${response.visibility/1000}km
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Clouds
                            </td>
                            <td>
                               ${response.clouds.all}%
                            </td>
                        </tr>

                    </table>
                </div>
                
            </div>

    
            ` 
                setTimeout(function(){
                $(loaderContainer).hide();

                },4000)
            
            }else {
                setTimeout(function(){
                    $(loaderContainer).hide();
                    containerAll.innerHTML = error;
    
                    },4000)
            }
        });

    }


}




let container1 = new Container2();
container1.userForecast();

