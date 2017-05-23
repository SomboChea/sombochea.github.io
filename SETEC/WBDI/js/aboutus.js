var people = [{

        picture: "sb.jpg",
        name: "Chea Sambo",
        gender: "Male",
        group: "SN1.2",
        position: "Coding & Design",
        phone: "0xx xxx xxx",
        email: "sombochea100@gmail.com"


    },
    {
        picture: "lida.jpg",
        name: "Eam Solida",
        gender: "Female",
        group: "SN1.2",
        position: "Coding & Design ",
        phone: "0xx xxx xxx",
        email: "xxxx@gmail.com"
    },
    {
        picture: "sunlong.jpg",
        name: "Sunlong",
        gender: "Male",
        group: "SN1.2",
        position: "Design",
        phone: "0xx xxx xxx",
        email: "xxxx@gmail.com"
    },
    {
        picture: "tharoth.jpg",
        name: "Sovanntharoth",
        gender: "Male",
        group: "SN1.2",
        position: "Design",
        phone: "0xx xxx xxx",
        email: "xxxx@gmail.com"
    },
    {
        picture: "visal.jpg",
        name: "Sorn Visal",
        gender: "Male",
        group: "SN1.2",
        position: "Coding",
        phone: "0xx xxx xxx",
        email: "xxxx@gmail.com"
    }
];

function runthis(id) {

    var person = people[id];

    var profilepic = person.picture;
    var name = person.name;
    var gender = person.gender;
    var group = person.group;
    var position = person.position;
    var phone = person.phone;
    var email = person.email;



    var insideHtml = '<center><img src="images/' + profilepic + '" alt="" class="img-responsive img-circle" width=200px height=200px></center><br><div class="indent"><p><h3>Name     : ' + name + '</h3></p><p><h3>Group    : ' + group + '</h3> </p><p><h3>Gender   : ' + gender + '</h3></p><p><h3>Position : ' + position + '</h3></p><p><h3>Email    : ' + email + '</h3></p><p> <h3>Phone    : ' + phone + '</h3></p></div>';
    document.getElementsByClassName("modal-body")[0].innerHTML = insideHtml;
    document.getElementsByClassName("modal-title")[0].innerHTML = "About : " + name;

}