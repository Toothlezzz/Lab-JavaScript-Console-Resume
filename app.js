//simple code that prints out my resume using simple console.logs and a few functions with a couple of set const variables
const name = "Grigas".toLocaleUpperCase();
const interests = ["Video Games", "Watching Anime", "Hanging out with friends"];

console.log("Name: " + name);
console.log("Career: Full stack developer trainee/software programs student at KTU");
console.log("Description: I like playing video games");
console.log("");
console.log("My interests:")
//using a for loop for each interest since I thought it's a good idea to loop through interest rather than writing different console.log statements for them
for(let i = 0; i < interests.length; i++){
    console.log("* " + interests[i]);
};
console.log("");
console.log("My Previous Experience:");
displayPosition("KTU","Undergraduate assistant", "Teaching databases");
displayPosition("Softera", "Intern", "Software development and management");
console.log("");
console.log("My Skills:");
displaySkill("Master in League of Legends", true);
displaySkill("C#", true);
displaySkill("Sql", false);
displaySkill("CSS", false);
displaySkill("HTML", false);
displaySkill("JavaScript", true);
displaySkill("Playing Guitar", true);

//I was taught this way - to put functions at the end of the code, if there's no other classes, and you have to do everything in main(app.js in this case)
//Function to display the company you were working at, your occupation there and a little description 
function displayPosition(companyName, jobTitle, description){
    console.log(`* ${jobTitle} at ${companyName} - ${description}`);
};
//Function to display your skills, if isCool property = true, prints out BAM at the start meaning it's a cool skill, otherwise it just prints out the skill
function displaySkill(skillName, isCool){
    if(isCool == true){
        console.log(`* BAM: ${skillName}`);
    }
    else{
        console.log(`* ${skillName}`);
    };
}
//I was taught this way - to put functions at the end of the code, if there's no other classes, and you have to do everything in main(app.js in this case)
//Function to display the company you were working at, your occupation there and a little description 
function displayPosition(companyName, jobTitle, description){
    console.log(`* ${jobTitle} at ${companyName} - ${description}`);
};
//Function to display your skills, if isCool property = true, prints out BAM at the start meaning it's a cool skill, otherwise it just prints out the skill
function displaySkill(skillName, isCool){
    if(isCool == true){
        console.log(`* BAM: ${skillName}`);
    }
    else{
        console.log(`* ${skillName}`);
    };
};