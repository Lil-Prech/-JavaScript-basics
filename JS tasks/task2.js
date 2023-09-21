function greet(name) {
    return "Hello," + name + "!";
}

console.log(greet("Precious"));

const greetArrow = (name) => 'Hello,${name}!';
console.log(greetArrow("Precious"));