var Icon = document.querySelectorAll(".bottom_bar .bx");     //[0] = map [1] = home [2] = calendar
var currentPage = window.location.pathname.split("/").pop();

const Map_html = new Map([["bx-map", "/html/city.html"],
                        ["bx-home", "/index.html"],
                        ["bx-calendar", "/html/date.html"]]);

Icon.forEach(icon=>{
    icon.addEventListener("click", () => {
        console.log(currentPage);
        sleep(0);
        if(currentPage == "index.html")
            window.location.href = Map_html.get(icon.classList[1]);
        else
            window.location.href = ".." + Map_html.get(icon.classList[1]);
        
    })
})
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
  }