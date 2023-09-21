var person = {
    name: "Lum",
    age:12,
    Profession:"Tech-prenuer",   
}

console.log(person.name);
console.log(person.age);
console.log(person.profession);

person.introduce = function() {
    console.log("Hi I am $[name], and I am $[age] years old. I work as a $[profession].");
};

person.introduce();

var name = "Lum";
var age = 12;
var isDeveloper = true;

console.log(name);
console.log(age);
console.log(isDeveloper);