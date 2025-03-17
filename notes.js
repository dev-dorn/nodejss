console.log("Starting notesjs");

module.exports.add = () => {
    console.log("addNote");
    return "New note";
};

module.exports.read = () => {
    console.log("Reading note...");
    return "Read note";
};

module.exports.list = () => {
    console.log("Listing all notes...");
    return ["Note 1", "Note 2"];
};

module.exports.remove = () => {
    console.log("Removing note...");
    return "Note removed";
};
