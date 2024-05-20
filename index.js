import fs from "fs";

//Task 01
//* A function to create a file called hello-world.js

const createFile = () => {
  //use fs module to create the file
  fs.writeFile(
    "./hello-world.js",
    'Console.log("Hello world")',
    (err, data) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

// createFile();
