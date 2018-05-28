function People(name, gender, address) {
    this.name = name;
    this.gender = gender;
    this.address = address;
}

var people = new People("Sambo Chea", "Male", "TK");
console.log(people.name + "\t" + people.gender + "\t" + people.address);