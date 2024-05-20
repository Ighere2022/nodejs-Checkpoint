import fs from "fs";

const createFile = () => {
  //use fs module to create the file
  fs.writeFile("./welcome.txt", "Hello Node", (err, data) => {
    if (err) {
      console.log(err);
    }
  });
};

createFile();

const readDocs = () => {
  fs.readFile("./welcome.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
};

readDocs();
