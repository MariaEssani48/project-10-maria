#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const person1 = new Person();
const progamStart = async (person) => {
    console.log("Welcome guest");
    const answer = await inquirer.
        prompt([
        {
            type: "list",
            name: "options",
            message: "What kind of person you are? \n",
            choices: ["Introvert", "Extrovert"],
        },
    ]);
    if (answer.options == "Introvert") {
        console.log("\n I am talking to myself \n");
    }
    if (answer.options == "Extrovert") {
        const answer = await inquirer.prompt([
            {
                type: "input",
                name: "studentName",
                message: "Who do you want to talk to? \n",
            }
        ]);
        const student = person.students.find(val => val.name == answer.studentName);
        if (!student) {
            let more = new Student(answer.studentName);
            person.addStudent(more);
            console.log(`\n Hello I am ${more.name}`);
            console.log(person1.students);
        }
        if (student) {
            console.log(`\n Hello I am ${student.name}........`);
            console.log(person1.students);
        }
    }
};
async function again() {
    do {
        await progamStart(person1);
        var answer = await inquirer.prompt([
            {
                type: "list",
                name: "quest",
                message: "\n Do you want to run this application more? \n",
                choices: ["Yes", "No"],
            }
        ]);
    } while (answer.quest == "Yes");
}
;
await again();
