var langs = [{
        lang: [
            { "home": "home" },
            { "technoloy": "technology" },
            { "entertainment": "entertainment" },
            { "sport": "sport" },
            { "life": "life" },
            { "aboutus": "aboutus" },
            { "contactus": "contactus" },
            { "language": "language" },
            { "khmer": "khmer" },
            { "english": "english" },
            { "signin": "signin" },
            { "register": "register" },
            { "videos": "videos" }
        ]
    },
    {
        lang: [
            { "home": "ទំព័រដើម" },
            { "technoloy": "បច្ចេកវិទ្យា" },
            { "entertainment": "កម្សាន្ដ" },
            { "sport": "កីឡា" },
            { "life": "ជីវិតនិងសង្គម" },
            { "aboutus": "អំពីយើង" },
            { "contactus": "ទំនាក់ទំនងយើង" },
            { "language": "ភាសា" },
            { "khmer": "ខ្មែរ" },
            { "english": "អង់គ្លេស" },
            { "signin": "ចូល" },
            { "register": "ចុះឈ្មេាះ" },
            { "videos": "វីដេអូ" }
        ]
    }
];

function changeLang(id) {
    if (id == 1) {
        console.log(langs[0].khmer);
    } else if (id == 0) {
        console.log(langs[0].english);
    } else {
        console.log("Error!");
    }
}

changeLang(0);