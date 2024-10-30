import {city_spot, hotel_and_moving, city_date} from "./variable_module.js";

const body = document.querySelector("body"),
      main = body.querySelector("main"),
      goback = body.querySelector(".bx-left-arrow-alt"),
      cityname = body.querySelector(".cityname"),
      date = body.querySelector(".date");

/*-----go to previous page-----*/
goback.addEventListener("click", ()=> {
    window.history.back();
})

/*-----change city name and date-----*/
var city = localStorage.getItem("city");

cityname.innerHTML = city;
date.innerHTML = city_date.get(city);

/*-----add div-----*/
var n = (city_spot.get(city))[0],
    hotel_departure = (hotel_and_moving.get(city))[0],
    hotel_arrival = (hotel_and_moving.get(city))[1],
    moving_departure = (hotel_and_moving.get(city))[2],
    moving_arrival =(hotel_and_moving.get(city))[3];

main.replaceChildren();
if(hotel_departure != null)
    main.innerHTML += '<div class="section"><div class="order"><div class="number">'+ (1) 
    + '</div><div class="line"></div></div><div class="spot hotel"><i class="bx bxs-hotel"></i>' + hotel_departure + '</div></div>';
else
    main.innerHTML += '<div class="section"><div class="order"><div class="number">'+ (1) 
    + '</div><div class="line"></div></div><div class="spot moving"><i class="bx bxs-train"></i>'+ moving_departure + '</div></div>';
for(var i=1;i<(n+1);i++){
    var spot = city_spot.get(city);
    main.innerHTML += '<div class="section"><div class="order"><div class="number">'+ (i+1) 
        + '</div><div class="line"></div></div><div class="spot"><i class="bx bxs-map-pin"></i>'+ spot[i] + '</div></div>';
}
if(hotel_arrival != null)
    main.innerHTML += '<div class="section"><div class="order"><div class="number">'+ (n+2) 
    + '</div><div class="line"></div></div><div class="spot hotel"><i class="bx bxs-hotel"></i>'+ hotel_arrival + '</div></div>';
else
    main.innerHTML += '<div class="section"><div class="order"><div class="number">'+ (n+2) 
    + '</div><div class="line"></div></div><div class="spot moving"><i class="bx bxs-train"></i>'+ moving_arrival + '</div></div>';
