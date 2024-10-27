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
    centerMode: false,
    variableWidth: true,
    arrows: false,
    focusOnSelect: true,
    swipeToSlide: true
});

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
        var before = (body.querySelectorAll(".category_image li")).length;
        var after = city_count.get(country.classList[1]);
        $('.category_image').slick('slickRemove', null, null, true);
        for(var i=0;i<after;i++){
            $('.category_image').slick('slickAdd', '<li><a href="#"><img class="city_small_image" src="https://cdn.jsdelivr.net/gh/leejunseo0202/EuropeTravel@master/image/category_' 
                + country.classList[1] + '0' + (i+1) + '.jpg" alt="image0'+ (i+1) +'"><span>'
                + city_name.get(country.classList[1])[i] +'</span></a></li>');
        }
        $('.category_image').slick('slickGoTo', 0);
    })  
});

$('.category_image').on('afterChange', function(event, slick, currentSlide, nextSlide){   
    city_image.src = "https://cdn.jsdelivr.net/gh/leejunseo0202/EuropeTravel@master/image/city_"
    + category.classList[1] +"0" + (currentSlide+1) + ".jpg";

    const city_detail = new Map([["로마", "트레비 분수, 판테온, 포로 로마노..."],
                                ["바티칸", "성 베드로 대성전, 시스티나 성당, 바티칸 오벨리스크..."],
                                ["나폴리", "누우보 성, 산텔모 성, 델로보 성..."],
                                ["폼페이", "폼페이 유적..."],
                                ["소렌토", "타소 광장, 해안절벽..."],
                                ["피렌체", "피사의 사탑, 피렌체 두우모, 우피치 미술관..."],
                                ["베네치아", "산 마르코 광장, 산 마르코 대성당, 부라노 섬..."],
                                ["인스부르크", "황금지붕, 호프부르크 왕궁, 노르트케테..."],
                                ["뮌헨", "옥토버페스트, 님펜부르크 궁전, 성 피터 교회..."],
                                ["잘츠부르크", "호엔잘츠부르크 요새, 묀히스베르크 전망대, 할슈타트..."],
                                ["비엔나", "벨베데레 궁전, 케른트너 거리, 슈테판 대성당..."],
                                ["프라하", "카를교, 프라하 성, 체스키크룸로프..."]]);
    city_image_h1.innerText = (city_name.get(category.classList[1]))[currentSlide];
    city_image_span.innerText = (city_detail.get((city_name.get(category.classList[1]))[currentSlide]));
});