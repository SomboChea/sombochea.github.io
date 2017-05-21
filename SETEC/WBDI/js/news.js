function getNews() {

    var news = new Array(
        "<li><a href='#'><b>មើលវីដេអូនេះ​ ទើប​ដឹងថា Apple Park ពេល​យប់​ស្អាត​ខ្លាំង</b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>",
        "<li><a href='#'><b></b></a></li>"
    );

    var gen_nums = [];

    function in_array(array, el) {
        for (var i = 0; i < array.length; i++)
            if (array[i] == el) return true;
        return false;
    }

    function get_rand(array) {
        var rand = array[Math.floor(Math.random() * array.length)];
        if (!in_array(gen_nums, rand)) {
            gen_nums.push(rand);
            return rand;
        }
        return get_rand(array);
    }

    var temp = [];
    for (var i = 0; i < data.length; i++) {
        temp[i] = (get_rand(data));
    }

    document.getElementById("news").innerHTML = temp;
}