console.log("Starting app.js");
const notes = require("./notes.js");

const fs = require("fs");
const _ = require("lodash");
var command = process.argv[2];
console.log("Command: ", command);

if (command === "add") {
    console.log("Adding new note...");
    console.log(notes.add()); // Call add()
} else if (command === "list") {
    console.log("Listing all notes...");
    console.log(notes.list()); // Call list()
} else if (command === "read") {
    console.log("Reading note...");
    console.log(notes.read()); // Call read()
} else if (command === "remove") {
    console.log("Removing note...");
    console.log(notes.remove()); // Call remove()
} else {
    console.log("Command not recognized");
}
console.log(process.argv)