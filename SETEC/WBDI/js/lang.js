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


var txtTech = document.getElementById("txtTech");
var txtEnter = document.getElementById("txtEnter");
var txtSp = document.getElementById("txtSp");
var txtLife = document.getElementById("txtLife");
var txtAbout = document.getElementById("txtAbout");
var txtContact = document.getElementById("txtContact");

function changeLang(id) {

    var lg = langs[id].lang;

    var tT = lg.technology;
    var tE = lg.entertainment;
    var tSp = lg.sport;
    var tL = lg.life;
    var tAbout = lg.aboutus;
    var tCon = lg.contactus;

    txtTech.innerHTML = '<a href="#">' + tT + '</a>'
    txtEnter.innerHTML = '<a href="#">' + tE + '</a>'
    txtSp.innerHTML = '<a href="#">' + tSp + '</a>'
    txtLife.innerHTML = '<a href="#">' + tL + '</a>'
    txtAbout.innerHTML = '<a href="#">' + tAbout + '</a>'
    txtContact.innerHTML = '<a href="#">' + tCon + '</a>'

    //console.log(id + " \n " + tEng + " \n " + tKh);

}