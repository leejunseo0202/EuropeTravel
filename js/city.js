const body = document.querySelector("body"),
      main = document.querySelector("main");




const city_spot = new Map([["로마", [6, "부킹 하우스", "트레비 분수", "판테온", "포로 로마노", "콜로세움", "부킹 하우스"]],
                        ["바티칸", [5, "부킹 하우스", "성 베드로 대성전", "시스티나 성당", "바티칸 오벨리스크", "De Matha House"]],
                        ["나폴리", [5, "De Matha House", "누우보 성", "산텔모 성", "델로보 성", " -> 폼페이"]],
                        ["폼페이", [3, "나폴리 -> ", "폼페이 유적", " -> 소렌토"]],
                        ["소렌토", [3, "폼페이 -> ", "소렌토", "De Matha House"]],
                        ["피렌체", [8, "De Matha House", "피사의 사탑", "피렌체 두우모", "시뇨리아 광장", "우피치 미술관", "미켈란젤로 광장", "조토의 종탑", "PopArtment"]],
                        ["베네치아", [5, "PopArtment", "산 마르코 광장", "산 마르코 대성당", "부라노 섬", "Casa Martini"]],
                        ["인스부르크", [11, "Casa Martini", "개선문", "성 안나 기념탑", "마리아 테레지아 거리", "황금지붕", "헬블링 하우스", "시티타워", "호프부르크 왕궁", "성 야곱 교회", "노르트케테", "Pradl elf my-apartment"]],
                        ["뮌헨", [12, "Pradl elf my-apartment", "옥토버페스트", "님펜부르크 궁전", "올림픽 공원", "BMW 박물관", "영국정원", "호프가르텐", "신 시청사", "성 피터 교회", "프라우엔 교회", "노이하우저 거리", "Euro Youth Hotel"]],
                        ["잘츠부르크", [13, "Euro Youth Hotel", "미라벨궁전", "모차르트 하우스", "마카르트 거리", "게트라이데 거리", "모차르트 생가", "레지덴츠 광장", "논베르크 수녀원", "호엔잘츠부르크 요새", "스티글 양조장", "묀히스베르크 전망대", "할슈타트", "Euro Youth Hotel"]],
                        ["비엔나", [14, "Euro Youth Hotel", "벨베데레 궁전", "카를 성당", "미술사 박물관", "호프부르크 왕궁", "케른트너 거리", "슈테판 대성당", "페스트 기념비", "의회의사당", "알베르티나 미술관", "오페라 하우스", "성 페터 성당", " 빈 시청사", "Rainers Hotel Vienna"]],
                        ["프라하", [14, "Rainers Hotel Vienna", "존 레논 벽", "성 니콜라스 성당", "성 비투스 대성당", "프라하성", "블타바 강", "카를교", "올드 타운 브리지 타워", "프라하 천문시계", "구 시청사", "틴 성모 교회", "국립박물관 신관", "체스키크룸로프", "Gregory House"]]]);

/*-----add div-----*/
var city = localStorage.getItem("city");
var n = (city_spot.get(city))[0];
main.replaceChildren();
for(var i=0;i<n;i++){
    var spot = city_spot.get(city);
    main.innerHTML += '<div class="section"><div class="order"><div class="number">'+ (i+1) 
        + '</div><div class="line"></div></div><div class="spot">'+ spot[i+1] + '</div></div>';
}