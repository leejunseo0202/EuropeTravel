import {date, date_title} from "./variable_module.js";
const body = document.querySelector("body"),
      goback = body.querySelector(".bx-left-arrow-alt"),
      countryname = body.querySelector(".countryname"),
      slider = body.querySelector(".slider"),
      Date = body.querySelector(".date"),
      section = body.querySelector(".section");


/*-----go to previous page-----*/
goback.addEventListener("click", ()=> {
    window.history.back();
})

/*-----slider-----*/
for(var i=0;i<16;i++){
    slider.innerHTML += '<div class="slide swiper-slide ' +  date[i%7] + ' day' + ((26+i)%30+1) + '"><div class="day_of_the_week">'
                            + date[i%7] + '</div><div class="day">' + ((26+i)%30+1) + '</div></div>';
}
var swiper = new Swiper(".swiper", {
    slidesPerView: 5.5,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
        clickable: true,
    },
});

var beforeDate = "27";
let slide_27 = body.querySelector(".day27"),
    letter_27 = slide_27.querySelectorAll("div");

letter_27[0].style.color = "white";
letter_27[1].style.color = "white";
slide_27.style.background = "black";

const slides = body.querySelectorAll(".slide");
slides.forEach(slide=>{
    slide.addEventListener("click", ()=>{
        let afterDate = slide.classList[3].substring(3,5);
        if(beforeDate == afterDate)    return 0;

        let beforeSlide = body.querySelector(".day" + beforeDate),
            letter = slide.querySelectorAll("div"),
            letter_before = beforeSlide.querySelectorAll("div");

        letter[0].style.color = "white";
        letter[1].style.color = "white";
        slide.style.background = "black";

        Date.innerHTML = "2024." + (12 - Math.floor(Number(afterDate)/26)) + "." + afterDate + " (" + slide.classList[2] + ")";

        if(beforeSlide.classList[2] == "Sat"){
            letter_before[0].style.color = "blue";
            letter_before[1].style.color = "blue";
        }
        else if(beforeSlide.classList[2] == "Sun"){
            letter_before[0].style.color = "red";
            letter_before[1].style.color = "red";
        }
        else{
            letter_before[0].style.color = "black";
            letter_before[1].style.color = "black";
        }
        beforeSlide.style.background = "rgb(228, 228, 228)";

        /*-----section-----*/
        var num = Number((date_title.get(afterDate))[1]);
        section.replaceChildren();
        for(var i=2;i<=num+1;i++){
        section.innerHTML += '<div class="plan"><div class="letter"><div class="title">'
                        + (date_title.get(afterDate))[i] + '</div><div class="detail">'
                        + 'ICN 14:05 - FCO 19:35</div></div>'
                        +'<img src = "../image/date_' + (date_title.get(afterDate))[i].substring(0, 3) + '.jpg"></img></div><div class="line"></div>';
        }
        /*-----change country name-----*/
        countryname.innerHTML = (date_title.get(afterDate))[0];
        
        beforeDate = afterDate;
    })
})

/*-----section-----*/
var num = Number((date_title.get(beforeDate))[1]);    
section.replaceChildren();
for(var i=2;i<=(num+1);i++){
section.innerHTML += '<div class="plan"><div class="letter"><div class="title">'
                + (date_title.get(beforeDate))[i] + '</div><div class="detail">'
                + 'ICN 14:05 - FCO 19:35</div></div>'
                +'<img src = "../image/date_' + (date_title.get(beforeDate))[i].substring(0, 3) + '.jpg"></img></div><div class="line"></div>';
}

