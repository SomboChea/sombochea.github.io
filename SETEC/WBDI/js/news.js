function getNews() {

    var data = new Array(
        '<li><a href="topics/technology/tech-011.html"><b>ដឹង CEO ក្រុមហ៊ុន​បច្ចេកវិទ្យាលំដាប់កំពូលៗ ពាក់​ស្បែកជើង​តម្លៃ​ប៉ុន្មាន​អត់?</b></a></li>',
        '<li><a href="topics/technology/tech-003link.html"><b>iPhone 7 Plus​ ​ផ្ទុះ​ឆេះ​មួយ​ករណី​ទៀត​ហើយ!</b></a></li>'
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