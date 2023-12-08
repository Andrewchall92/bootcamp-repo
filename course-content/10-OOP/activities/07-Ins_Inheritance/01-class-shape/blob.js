class Blob {
  constructor() {
    this.parentAttr = "I started it all";
    this.example = "I am in the blob";
  }

  printScream() {
    console.log(`${this.parentAttr}!!!!`);
    
  }
}
const myBlob = new Blob();
console.log("*****new Blob*****");
console.log(myBlob);
// example: "I am in the blob"
// parentAttr: "I started it all"
// [[Prototype]]
// Object
// constructor
// class Blob
// printScream
// ƒ printScream()
// [[Prototype]]
// Object

myBlob.printScream()
module.exports = Blob;