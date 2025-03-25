// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Example usage:
console.log(saturdayFun("go to the beach")); // "This Saturday, I want to go to the beach!"
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// Example usage:
console.log(mondayWork("work from home")); // "This Monday, I will work from home."
console.log(mondayWork()); // "This Monday, I will go to the office."


// Function returning another function
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}