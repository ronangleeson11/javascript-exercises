const findTheOldest = function(arr) {
    let ret = arr
                .map(person => {
                    if (!person.yearOfDeath) {
                        person.yearOfDeath = 2026;
                    }
                    if (!person.yearOfBirth) {
                        person.yearOfBirth = person.yearOfDeath;
                    }
                    return {name: person.name, age: person.yearOfDeath - person.yearOfBirth};
                })
                .sort((a, b) => b.age - a.age); 
    return ret[0];
};

// Do not edit below this line
module.exports = findTheOldest;
