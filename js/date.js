const body = document.querySelector("body"),
      goback = body.querySelector(".bx-left-arrow-alt"),
      cityname = body.querySelector(".cityname");


/*-----go to previous page-----*/
goback.addEventListener("click", ()=> {
    window.history.back();
})

/*-----change city name and date-----*/
var city = localStorage.getItem("city");
cityname.innerHTML = city;

