$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#menu-sidenav').addClass('menu-sidenav-fixed-left');
    } else {
        $('#menu-sidenav').removeClass('menu-sidenav-fixed-left');
    }
});