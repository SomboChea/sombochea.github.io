var langs = [{
        lang: {
            home: "Home",
            technology: "Technology",
            entertainment: "Entertaintment",
            sport: "Sport",
            life: "Life &Social",
            aboutus: "About Us",
            contactus: "Contact Us",
            language: "Language",
            khmer: "Khmer",
            english: "English",
            signin: "Sign In",
            register: "Register",
            videos: "Videos"
        }
    },
    {
        lang: {
            home: "ទំព័រដើម",
            technology: "បច្ចេកវិទ្យា",
            entertainment: "កម្សាន្ដ",
            sport: "កីឡា",
            life: "ជីវិតនិងសង្គម",
            aboutus: "អំពីយើង",
            contactus: "ទំនាក់ទំនងយើង",
            language: "ភាសា",
            khmer: "ខ្មែរ",
            english: "អង់គ្លេស",
            signin: "ចូល",
            register: "ចុះឈ្មេាះ",
            videos: "វីដេអូ"
        }

    }
];


var txtEng = document.getElementById("txtEng");
var txtKh = document.getElementById("txtKh");

function changeLang(id) {

    var tEng = langs[id].lang.english;
    var tKh = langs[id].lang.khmer;

    console.log(id + " \n " + tEng + " \n " + tKh);

}