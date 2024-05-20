import generator from "generate-password";

let passwords = generator.generateMultiple(3, {
  length: 10,
  uppercase: false,
});

// [ 'hnwulsekqn', 'qlioullgew', 'kosxwabgjv' ]
console.log(passwords);
