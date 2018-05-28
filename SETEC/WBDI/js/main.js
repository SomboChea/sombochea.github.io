//Custom Script

// $(function(){
//     alert("Onload function of jquery!!!");
// });

// $(document).ready(function(){
//     alert("Onload function!!");
// });

$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#navbar-fixed-top').addClass('navbar-fixed-top');
    } else {
        $('#navbar-fixed-top').removeClass('navbar-fixed-top');
    }
});



var clickAct = false;

function breakingBtn() {

    if (!clickAct) {
        var mar = document.getElementById("marquee");
        var btnActtion = document.getElementById("btnAction");
        mar.style.opacity = "0";
        mar.style.visibility = "hidden";
        clickAct = true;
    } else {
        var mar = document.getElementById("marquee");
        var btnActtion = document.getElementById("btnAction");
        mar.style.opacity = "1";
        mar.style.visibility = "visible";
        clickAct = false;
    }
}