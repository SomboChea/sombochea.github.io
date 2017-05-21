//Custom Script

// $(function(){
//     alert("Onload function of jquery!!!");
// });

// $(document).ready(function(){
//     alert("Onload function!!");
// });

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#navbar-fixed-top').addClass('navbar-fixed-top');
    } else {
        $('#navbar-fixed-top').removeClass('navbar-fixed-top');
    }
});