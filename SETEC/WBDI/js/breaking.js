function breakingClose() {
    document.getElementById("marquee").style.opacity = "0";
    document.getElementById("txt_mar_open").style.display = "block";
    document.getElementById("breaking").style.width = "0";
    document.getElementById("txt_breaking").style.visibility = "hidden";
    document.getElementById("menu-fixed").className = "menu-fixed-left bg-blue-1";
    document.getElementsByClassName("menu-fixed-left")[0].style.height = "100%";
    document.getElementsByClassName("toTop")[0].style.bottom = "20px";
}

function breakingOpen() {
    document.getElementById("marquee").style.opacity = "1";
    document.getElementById("txt_mar_open").style.display = "none";
    document.getElementById("breaking").style.width = "10%";
    document.getElementById("txt_breaking").style.visibility = "visible";
    document.getElementsByClassName("menu-fixed-left")[0].style.height = "90%";
    document.getElementsByClassName("toTop")[0].style.bottom = "35px";
}