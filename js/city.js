import {city_spot, hotel_and_moving, city_date, city_all} from "./variable_module.js";

const body = document.querySelector("body"),
      goback = body.querySelector(".bx-left-arrow-alt"),
      cityname = body.querySelectorAll(".cityname"),
      date = body.querySelector(".date"),
      plan = body.querySelector(".plan"),
      left_arrow = body.querySelector(".bx-chevron-left"),
      right_arrow = body.querySelector(".bx-chevron-right");

/*-----go to previous page-----*/
goback.addEventListener("click", ()=> {
    window.history.back();
})

/*-----change city name and date-----*/
var city = localStorage.getItem("city");
var city_index = city_all.indexOf(city);

cityname[0].innerHTML = city;
cityname[1].innerHTML = city;
date.innerHTML = city_date.get(city);

/*-----change city-----*/
left_arrow.addEventListener("click", ()=>{
    localStorage.setItem("city", city_all[(city_index+11)%12]);
    location.reload();
})  
right_arrow.addEventListener("click", ()=>{
    localStorage.setItem("city", city_all[(city_index+1)%12]);
    location.reload();
})  

/*-----add div-----*/
var n = (city_spot.get(city))[0],
    hotel_departure = (hotel_and_moving.get(city))[0],
    hotel_arrival = (hotel_and_moving.get(city))[1],
    moving_departure = (hotel_and_moving.get(city))[2],
    moving_arrival =(hotel_and_moving.get(city))[3];

plan.replaceChildren();
if(hotel_departure != null)
    plan.innerHTML += '<div class="section"><div class="order"><div class="number">'+ (1) 
    + '</div><div class="line"></div></div><div class="spot hotel"><i class="bx bxs-hotel"></i>' + hotel_departure + '</div></div>';
else
plan.innerHTML += '<div class="section"><div class="order"><div class="number">'+ (1) 
    + '</div><div class="line"></div></div><div class="spot moving"><i class="bx bxs-train"></i>'+ moving_departure + '</div></div>';
for(var i=1;i<(n+1);i++){
    var spot = city_spot.get(city);
    plan.innerHTML += '<div class="section"><div class="order"><div class="number">'+ (i+1) 
        + '</div><div class="line"></div></div><div class="spot"><i class="bx bxs-map-pin"></i>'+ spot[i] + '</div></div>';
}
if(hotel_arrival != null)
    plan.innerHTML += '<div class="section"><div class="order"><div class="number">'+ (n+2) 
    + '</div><div class="line"></div></div><div class="spot hotel"><i class="bx bxs-hotel"></i>'+ hotel_arrival + '</div></div>';
else
    plan.innerHTML += '<div class="section"><div class="order"><div class="number">'+ (n+2) 
    + '</div><div class="line"></div></div><div class="spot moving"><i class="bx bxs-train"></i>'+ moving_arrival + '</div></div>';