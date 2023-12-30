const findTheOldest = function(people) {
    let ages = people.map(person => getAge(person))
    let max_age = ages.reduce((a, b) => Math.max(a, b), -Infinity)
    let oldest_person;
    people.forEach((person) => {
        if (getAge(person) === max_age) {
            oldest_person = person
        } 
    })
    return oldest_person
};

const getAge = function(person) {
    if (person.hasOwnProperty('yearOfDeath')){
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return new Date().getFullYear() - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
