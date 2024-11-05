import {city_count, city_name, city_detail} from "./js/variable_module.js";

const body = document.querySelector("body"),
    category = body.querySelector(".category"),
    countries = body.querySelectorAll(".country_button"),
    city_image = body.querySelector(".city_image"),
    city_image_h1 = body.querySelector(".city_image_detail h1"),
    city_image_span = body.querySelector(".city_image_detail span");

/*-----slick slide-----*/
$('.category_image').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    focusOnSelect: true,
    swipeToSlide: true
});

/*-----Click country button Event-----*/
countries.forEach(country=> {
    country.addEventListener("click" , () =>{
        /*-----change text color-----*/
        category.classList.remove("Italy", "Germany", "Austria", "Czech");
        category.classList.add(country.classList[1]);

        /*-----change category image-----*/
        var before = (body.querySelectorAll(".category_image li")).length;
        var after = city_count.get(country.classList[1]);
        $('.category_image').slick('slickRemove', null, null, true);
        for(var i=0;i<after;i++){
            $('.category_image').slick('slickAdd', '<li><a href="#"><img class="city_small_image" src="./image/category_' 
                + country.classList[1] + '0' + (i+1) + '.jpg" alt="image0'+ (i+1) +'"><span>'
                + city_name.get(country.classList[1])[i] +'</span></a></li>');
        }
        $('.category_image').slick('slickGoTo', 0);
    })  
});

$('.category_image').on('afterChange', function(event, slick, currentSlide, nextSlide){   
    city_image.src = "./image/city_" + category.classList[1] +"0" + (currentSlide+1) + ".jpg";

    city_image_h1.innerText = (city_name.get(category.classList[1]))[currentSlide];
    localStorage.setItem("city", city_image_h1.innerText);
    city_image_span.innerText = (city_detail.get((city_name.get(category.classList[1]))[currentSlide]));
});

localStorage.setItem("city", "로마");
