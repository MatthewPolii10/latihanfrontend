let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.forEach(function(person) {
    console.log(person);
});

people.shift();

people.pop();

people.unshift("Matt");

people.push("Matthew");

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

let copyOfPeople = people.slice(2);

people = ["Matt", "Mary", "Elizabeth", "Artie", "Matthew"];

let withBob = people.concat("Bob");

let finalResult = withBob;
console.log(finalResult); 

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");

programming["difficulty"] = 7;

delete programming.jokes;

programming.isFun = true;

programming.languages = programming.languages.map((language, index) => `${index} - ${language}`);

console.log(programming); 


