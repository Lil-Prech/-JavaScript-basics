const names= ["Stecy", "Valery", "Agnes", "Marcel"];

names.forEach(function(name) {
    console.log(name);
});

const developerFriends = names.filter((word) => word.length > 5); 
   
console.log(developerFriends);

const UpperCaseArray = names.map(item => item.toUpperCase());
    

console.log(UpperCaseArray);