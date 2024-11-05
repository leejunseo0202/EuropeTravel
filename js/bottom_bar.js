var Icon = document.querySelectorAll(".bottom_bar .bx");     //[0] = map [1] = home [2] = calendar
var currentPage = window.location.pathname.split("/").pop();

const Map_html = new Map([["bx-map", "city.html"],
                        ["bx-home", "index.html"],
                        ["bx-calendar", "date.html"]]);

Icon.forEach(icon=>{
    icon.addEventListener("click", () => {
        if(currentPage == "index.html"){
            if(icon.classList[1] == "bx-home")
                window.location.href = "./index.html";            
            else
                window.location.href = "./html/" + Map_html.get(icon.classList[1]);
        }
        else{
            if(icon.classList[1] == "bx-home")
                window.location.href = "../index.html";            
            else
                window.location.href = "../html/" + Map_html.get(icon.classList[1]);
        }
    })
})
