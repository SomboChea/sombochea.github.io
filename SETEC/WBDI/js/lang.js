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
var txtLang = document.getElementById("txtLang");
var txtSign = document.getElementById("txtSign");
var txtEng = document.getElementById("txtEng");
var txtKh = document.getElementById("txtKh");

var defaultLang;

if (sessionStorage['language'] == undefined)
    defaultLang = 1;
else
    defaultLang = sessionStorage['language'];

if (sessionStorage['language'] != "")
    changeLang(defaultLang);

function changeLang(id) {

    var lg = langs[id].lang;

    var tT = lg.technology;
    var tE = lg.entertainment;
    var tSp = lg.sport;
    var tL = lg.life;
    var tAbout = lg.aboutus;
    var tCon = lg.contactus;
    var tLang = lg.language;
    var tSign = lg.signin;
    var tEng = lg.english;
    var tKh = lg.khmer;

    txtTech.innerHTML = '<a href="topics/technology/index.html">' + tT + '</a>'
    txtEnter.innerHTML = '<a href="topics/entertaintment/index.html">' + tE + '</a>'
    txtSp.innerHTML = '<a href="topics/sport/index.html">' + tSp + '</a>'
    txtLife.innerHTML = '<a href="topics/life/index.html">' + tL + '</a>'
    txtAbout.innerHTML = '<a href="aboutus.html">' + tAbout + '</a>'
    txtContact.innerHTML = '<a href="contactus.html">' + tCon + '</a>'
    txtLang.innerHTML = '<i class="fa fa-language" aria-hidden="true"></i> ' + tLang + '<span class="caret"></span>';
    txtSign.innerHTML = '<a href="javascript:void()"><i class="fa fa-sign-in" aria-hidden="true"></i> ' + tSign + '</a>';
    txtEng.innerHTML = '<a href="javascript:void()">' + tEng + '</a>';
    txtKh.innerHTML = '<a href="javascript:void()">' + tKh + '</a> ';

    sessionStorage['language'] = id;
    //console.log(id + " \n " + tEng + " \n " + tKh);

}

// console.log(sessionStorage['language']);