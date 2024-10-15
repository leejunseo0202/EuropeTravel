const body = document.querySelector("body"),
    category = body.querySelector(".category"),
    countries = body.querySelectorAll(".country_button"),
    city_small_image = body.querySelectorAll(".city_small_image"),
    city_image = body.querySelector(".city_image");

/*-----Click country button Event-----*/
countries.forEach(country=> {
    country.addEventListener("click" , () =>{
        category.classList.remove("click_Italy", "click_Germany", "click_Austria", "click_Czech");
        category.classList.add("click_" + country.classList[1]);
    })  
});

/*-----slick slide-----*/
$('.category_image').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    focusOnSelect: true
  });

$('.category_image').on('afterChange', function(event, slick, currentSlide, nextSlide){
    console.log(currentSlide);
    
    city_image.src = city_small_image[currentSlide].src;
});