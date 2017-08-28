console.log('the app is starting');
//built in modules
var fs = require('fs');
var os = require('os');
var yargs = require('yargs');

//third party modules
var _ = require ('lodash');

//created modules for use in code
var notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0];

console.log(process.argv);
console.log(argv);

// add
if(command === 'add'){
var success = notes.addNotes(argv.title,argv.body);

if(success == "undefined"){
  console.log("repeated title");
}else{
  console.log('notes successfully added');
}
}


//remove
if(command === 'remove'){
  console.log('start removing');
  notes.removeNotes(argv.title);
}

//read
if(command === 'read'){
 var res = notes.readNotes(argv.title);
 if(res){
   console.log(`notes found ${argv.title}`);
 }else {
   console.log('notes not found');
 }
}

//list
if(command === 'list'){
  var allNotes = notes.getAllNotes();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.printAllNotes(note));





}



























// var filterarray = _.uniq(['raja',1,'raja',1]);
// console.log(filterarray);

// console.log(_.isString(true));
// console.log(_.isString('true'));
// var res = notes.add(3,5);
// console.log(res);
// var user = os.userInfo();
//
// fs.appendFile('greetings.txt',`hello ${user.username} ! ${notes.age}`,function(err){
//   if(err){
//     console.log('unbale to create a file')
//   }
// });
