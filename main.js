const body = document.querySelector("body"),
    category = body.querySelector(".category"),
    countries = body.querySelectorAll(".country_button"),
    city_small_image = body.querySelectorAll(".city_small_image"),
    city_span = body.querySelectorAll(".category_image span"),
    city_image = body.querySelector(".city_image");


const city_count = new Map([["Italy", 7], ["Austria", 3], ["Germany", 1], ["Czech", 1]]);
const city_name = new Map([["Italy", ["로마", "바티칸", "나폴리", "폼페이", "소렌토", "피렌체", "베네치아"]],
                            ["Austria", ["인스부르크", "잘츠부르크", "비엔나"]],
                            ["Germany", ["뮌헨"]],
                            ["Czech", ["프라하"]]]);
/*-----Click country button Event-----*/
countries.forEach(country=> {
    country.addEventListener("click" , (e) =>{
        /*-----change text color-----*/
        category.classList.remove("Italy", "Germany", "Austria", "Czech");
        category.classList.add(country.classList[1]);

        /*-----change category image-----*/
        var city_small_image_li = body.querySelectorAll(".category_image li");
        var before = city_small_image_li.length;
        var after = city_count.get(country.classList[1]);
        $('.category_image').slick('slickRemove', null, null, true);
        for(var i=0;i<after;i++){
            console.log("add");
            $('.category_image').slick('slickAdd', '<li><a href="#"><img class="city_small_image" src="image/category_' 
                + country.classList[1] + '0' + (i+1) + '.jpg" alt="image0'+ (i+1) +'"><span>'
                + city_name.get(country.classList[1])[i] +'</span></a></li>');
        }
        $('.category_image').slick('slickGoTo', 0);
    })  
});

/*-----slick slide-----*/
$('.category_image').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    arrows: false,
    focusOnSelect: true,
    swipeToSlide: true
});

$('.category_image').on('afterChange', function(event, slick, currentSlide, nextSlide){    
    city_image.src = "image/city_"+ category.classList[1] +"0" + (currentSlide+1) + ".jpg";
});