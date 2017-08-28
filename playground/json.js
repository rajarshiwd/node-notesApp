// var obj = {
//   name : 'raja'
// }
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var stringObj = '{"name":"rajarshi","age" : 24}';
//
// var obj = JSON.parse(stringObj);
//
// console.log(typeof obj);
// console.log(obj);


var fs = require('fs');

var originalNotes = {
  name:'raja',
  city:'mulkallanka',
  state:'andra pradesh',
  country:'india'
}

var originalStringNotes = JSON.stringify(originalNotes);

fs.writeFileSync('notes.json',originalStringNotes);

var notes = fs.readFileSync('notes.json');

var objNotes = JSON.parse(notes);

console.log(typeof objNotes);
console.log(objNotes);
