/*-----main.js-----*/
export const city_count = new Map([["Italy", 7], ["Austria", 3], ["Germany", 1], ["Czech", 1]]);
export const city_name = new Map([["Italy", ["로마", "바티칸", "나폴리", "폼페이", "소렌토", "피렌체", "베네치아"]],
                            ["Austria", ["인스부르크", "잘츠부르크", "비엔나"]],
                            ["Germany", ["뮌헨"]],
                            ["Czech", ["프라하"]]]);

/*-----city.js-----*/
export const city_spot = new Map([["로마", [4, "트레비 분수", "판테온", "포로 로마노", "콜로세움"]],
    ["바티칸", [3, "성 베드로 대성전", "시스티나 성당", "바티칸 오벨리스크"]],
    ["나폴리", [3, "누우보 성", "산텔모 성", "델로보 성"]],
    ["폼페이", [1, "폼페이 유적"]],
    ["소렌토", [1, "소렌토"]],
    ["피렌체", [6, "피사의 사탑", "피렌체 두우모", "시뇨리아 광장", "우피치 미술관", "미켈란젤로 광장", "조토의 종탑"]],
    ["베네치아", [3, "산 마르코 광장", "산 마르코 대성당", "부라노 섬"]],
    ["인스부르크", [9, "개선문", "성 안나 기념탑", "마리아 테레지아 거리", "황금지붕", "헬블링 하우스", "시티타워", "호프부르크 왕궁", "성 야곱 교회", "노르트케테"]],
    ["뮌헨", [10, "옥토버페스트", "님펜부르크 궁전", "올림픽 공원", "BMW 박물관", "영국정원", "호프가르텐", "신 시청사", "성 피터 교회", "프라우엔 교회", "노이하우저 거리"]],
    ["잘츠부르크", [11, "미라벨궁전", "모차르트 하우스", "마카르트 거리", "게트라이데 거리", "모차르트 생가", "레지덴츠 광장", "논베르크 수녀원", "호엔잘츠부르크 요새", "스티글 양조장", "묀히스베르크 전망대", "할슈타트"]],
    ["비엔나", [12, "벨베데레 궁전", "카를 성당", "미술사 박물관", "호프부르크 왕궁", "케른트너 거리", "슈테판 대성당", "페스트 기념비", "의회의사당", "알베르티나 미술관", "오페라 하우스", "성 페터 성당", " 빈 시청사"]],
    ["프라하", [12, "존 레논 벽", "성 니콜라스 성당", "성 비투스 대성당", "프라하성", "블타바 강", "카를교", "올드 타운 브리지 타워", "프라하 천문시계", "구 시청사", "틴 성모 교회", "국립박물관 신관", "체스키크룸로프"]]]);
    
export const hotel_and_moving = new Map([["로마", ["부킹하우스", "부킹하우스", null, null]],
                ["바티칸", ["부킹하우스", "De Matha House", null, null]],
                ["나폴리", ["De Matha House", null, null, " -> 폼페이"]],
                ["폼페이", [null, null, "나폴리 -> ", " -> 소렌토"]],
                ["소렌토", [null, "De Matha House", "폼페이 -> ", null]],
                ["피렌체", ["De Matha House", "PopArtment", null, null]],
                ["베네치아", ["PopArtment", "Casa Martini", null, null]],
                ["인스부르크", ["Casa Martini", "Pradl elf my-apartment", null, null]],
                ["뮌헨", ["Pradl elf my-apartment", "Euro Youth Hotel", null, null]],
                ["잘츠부르크", ["Euro Youth Hotel", "Euro Youth Hotel", null, null]],
                ["비엔나", ["Euro Youth Hotel", "Rainers Hotel Vienna", null, null]],
                ["프라하", ["Rainers Hotel Vienna", "Gregory House", null, null]]]);

export const city_date = new Map([["로마", "2024.11.28"],
    ["바티칸", "2024.11.29"],
    ["나폴리", "2024.11.30"],
    ["폼페이", "2024.11.30"],
    ["소렌토", "2024.11.30"],
    ["피렌체", "2024.12.01"],
    ["베네치아","2024.12.02"],
    ["인스부르크", "2024.12.03"],
    ["뮌헨", "2024.12.04 - 12.05"],
    ["잘츠부르크", "2024.12.06 - 12.07"],
    ["비엔나", "2024.12.08"],
    ["프라하", "2024.12.09 - 2024.12.10"]]);