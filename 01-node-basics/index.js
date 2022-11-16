// const fs = require("fs");

// const content = fs.readFileSync("./test.txt")           // << Data transfer over streams using buffer

// // console.log(content.toString());

// fs.writeFileSync("./test3.txt", content)


// const path = require("path")

// const url = "http://www.example.com/public/index.html";

// console.log("File name", path.basename(url));
// console.log("Directory name", path.dirname(url));
// console.log("Extension name", path.extname(url));




// const os = require("os")

// console.log("Total Memory : ", os.totalmem());
// console.log("Free Memory : ", os.freemem());

// console.log("Number of CPU's  : ", os.cpus().length);

// console.log("Architecture : ", os.arch());











const colors = require("colors")
const yargs = require("yargs")
const { read, write } = require("./operations")

// print
yargs.command({
    command: "print",
    description: "to print something",
    builder: {
        text: {
            type: "string",
            demandOption: true
        }
    },
    handler: function (args) {
        console.log("PRINTING : ", args.value)
    }
})

// read
yargs.command({
    command: "read",
    description: "to read the content",
    builder: {
        title: {
            type: "string",
            demandOption: true
        }
    },
    handler: function (args) {
        // fs.writeFileSync("./test.txt", args.title)
        read(args.title)
        console.log("TITLE : ", args.title);
    }
})

// write
yargs.command({
    command: "write",
    description: "to write to console",
    handler: function () {
        // const content = fs.readFileSync("./test.txt")
        write()
        // console.log("WRITE : ", content.toString());
    }
})

yargs.parse()

// // console.log("HEllo World".red);
// // console.log("HEllo World".green);
// // console.log("HEllo World".inverse);
// // console.log("HEllo World".rainbow);