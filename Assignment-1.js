const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs");
const path = require("path");
var DirNameis = "";
var FileNameis = "";
var Filecontentis = "";
var createDirectory = () => {
    fs.mkdir(path.join(__dirname, DirNameis), (err) => {
        if (err) {
            console.log(err + "\n");
        } else {
            console.log(DirNameis + " Directory Created Successfully. \n");
        }
        repeat();
    });
}
var createDirectoryWizard = () => {
    console.log("");
    rl.question("Enter the Directory name: ", (ans) => {
        DirNameis = ans;
        createDirectory();
    });
}
var deleteDirectory = () => {
    fs.rmdir(DirNameis, (err) => {
        if (err) {
            console.log(err + "\n");
        } else {
            console.log(DirNameis + " Deleted Successfully. \n");
        }
        repeat();
    });
};
var deleteDirectoryWizard = () => {
    rl.question("Enter the Directory name to Delete Operation: ", (ans) => {
        DirNameis = ans;
        deleteDirectory();
    });
};
var createfile = () => {
    fs.writeFile(FileNameis, Filecontentis, (err) => {
        if (err) {
            console.log(err + "\n");
        } else {
            console.log(FileNameis + " File created Successfully. \n");
        }
        repeat();
    });
};
var createfileWizard = () => {
    rl.question("Enter the file name: ", (ans) => {
        FileNameis = ans + ".txt";
        rl.question("Enter the File Content: ", (ans) => {
            Filecontentis = ans;
            createfile();
        });
    });
}
var Readfile = () => {
    fs.readFile(FileNameis, (err, data) => {
        if (err) {
            console.log("Error is: " + err + "\n");
        } else {
            console.log("File Data is: " + data + "\n");
        }
        repeat();
    });
}

var readfileWizard = () => {
    rl.question("Enter the file name: ", (ans) => {
        FileNameis = ans + ".txt"
        Readfile();
    });
};
var appendfile = () => {
    fs.appendFile(FileNameis, Filecontentis, (err) => {
        if (err) {
            console.log(err + "\n");
        } else {
            console.log(FileNameis + " File Saved Successfully. \n");
        }
        repeat();
    });
};
var appendfileWizard = () => {
    rl.question("Enter the file name: ", (ans) => {
        FileNameis = ans + ".txt";
        rl.question("Enter the File Content: ", (ans) => {
            Filecontentis = ans;
            appendfile();
        });
    });
}
var renamefile = (newfilename) => {
    fs.rename(FileNameis, newfilename, (err) => {
        if (err) {
            console.log(err + "\n");
        } else {
            console.log(FileNameis + " File name changed Successfully. \n");
        }
        repeat();
    });
};
var renamefileWizard = () => {
    let newfilename = "";
    rl.question("Enter the old file name: ", (ans) => {
        FileNameis = ans + ".txt";
        rl.question("Enter the new file name: ", (ans) => {
            newfilename = ans + ".txt";
            renamefile(newfilename);
        });
    });
}
var deleteFile = () => {
    fs.unlink(FileNameis, (err) => {
        if (err) {
            console.log(err + "\n");
        } else {
            console.log(FileNameis + " Deleted Successfully. \n");
        }
        repeat();
    });
};
var deletefileWizard = () => {
    rl.question("Enter the file name to Delete Operation: ", (ans) => {
        FileNameis = ans + ".txt";
        deleteFile();
    });
};

var instruction = () => {
    console.log("[1] For Create Folder/Directory");
    console.log("[2] For Delete Folder/Directory");
    console.log("[3] For Create File");
    console.log("[4] For Read File");
    console.log("[5] For Append File");
    console.log("[6] For Rename File");
    console.log("[7] For Delete File");
    console.log("[8] For Exit");
}
var start = () => {
    rl.question("Enter your choice: ", (ch) => {
        if (ch === "1") {
            createDirectoryWizard();
        } else if (ch === "2") {
            deleteDirectoryWizard();
        } else if (ch === "3") {
            createfileWizard();
        } else if (ch === "4") {
            readfileWizard();
        } else if (ch === "5") {
            appendfileWizard();
        } else if (ch === "6") {
            renamefileWizard();
        } else if (ch === "7") {
            deletefileWizard();
        } else if (ch === "8") {
            rl.close();
            console.log("\n");
        } else {
            console.log("Your choice is invalid. \n");
            repeat();
        }
    });
}
var repeat = () => {
    instruction();
    start();
}
console.log("Welcome to DCS!");
repeat();