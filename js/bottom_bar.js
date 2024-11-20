var Icon = document.querySelectorAll(".bottom_bar .bx");     //[0] = map [1] = home [2] = calendar
var currentPage = window.location.pathname.split("/").pop();

const Map_html = new Map([["bx-map", "./html/city.html"],
                        ["bx-home", "./index.html"],
                        ["bx-calendar", "./html/date.html"]]);
const Map_index_html = new Map([["bx-map", "https://leejunseo0202.github.io/EuropeTravel/html/city.html"],
                        ["bx-home", "https://leejunseo0202.github.io/EuropeTravel/"],
                        ["bx-calendar", "https://leejunseo0202.github.io/EuropeTravel/html/date.html"]]);

Icon.forEach(icon=>{
    icon.addEventListener("click", () => {
        if(currentPage != "city.html" || currentPage != "date.html")
            window.location.href = Map_index_html.get(icon.classList[1]);
        else
            window.location.href = "." + Map_html.get(icon.classList[1]);
    })
})