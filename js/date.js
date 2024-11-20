import {date, plan_title, plan_detail, plan_href} from "./variable_module.js";
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
        section.replaceChildren();

        var num = Number((plan_title.get(afterDate))[1]);
        for(var i=2;i<=num+1;i++){
            var image_src = (plan_title.get(afterDate))[i].substring(0, 3);
            
            if(image_src.substring(0, 2) == "산 ")    
                image_src = (plan_title.get(afterDate))[i].substring(0, 7);

            section.innerHTML += '<div class="plan"><div class="letter"><div class="title">'
                            + (plan_title.get(afterDate))[i] + '</div><div class="detail">'
                            + (plan_detail.get(afterDate))[i-2] +'</div></div>'
                            +'<img src = "../image/date_' + image_src + '.jpg"></img></div><div class="line"></div>';
        }

        let plans = document.querySelectorAll(".plan");
        plans.forEach((plan, index)=>{
            plan.addEventListener("click", ()=>{
                console.log((plan_href.get(afterDate))[index]);
                window.open((plan_href.get(afterDate))[index], "_blank");
            })
        })
        


        /*-----change country name-----*/
        countryname.innerHTML = (plan_title.get(afterDate))[0];
        
        beforeDate = afterDate;
    })
})

let plans = document.querySelectorAll(".plan");
plans.forEach((plan, index)=>{
    plan.addEventListener("click", ()=>{
        console.log((plan_href.get("27"))[index]);
        window.open((plan_href.get("27"))[index], "_blank");
    })
})
