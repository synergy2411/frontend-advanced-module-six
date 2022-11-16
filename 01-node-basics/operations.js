const fs = require("fs")
require("colors")

const read = (title) => {
    console.log("READING");
    fs.writeFileSync("./test.txt", title)
}

const write = () => {
    console.log("WRITING");
    const content = fs.readFileSync("./test.txt")
    console.log(content.toString().green);
}

module.exports = {
    read,           // Short hand property syntax - ES6
    write
}


// module.exports = {
//     read : function(){},
//     write : function(){}
// }