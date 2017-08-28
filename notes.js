var fs = require('fs');

module.exports.age = 24;

var  fetchData = ()=>{
  try{
    var read = fs.readFileSync('json-data.json');
     return JSON.parse(read);

  }catch(e){
  return [];
  }

}

var saveNotes = (notes)=>{

  fs.writeFileSync('json-data.json',JSON.stringify(notes));

}

addNotes = (title,body)=>{
  var notes = fetchData();
  var note ={
    title,
    body
  }



var duplicateJSON = notes.filter((note)=> note.title === title);

if(duplicateJSON.length === 0) {

  notes.push(note);
  saveNotes(notes);


} else{
  return "undefined";
}

}

var removeNotes = (title)=>{

// create a notes
var allNotes = fetchData();
// looping over the notes
var haveToRemove = allNotes.filter((note)=> note.title !== title);
saveNotes(haveToRemove);
}

var  readNotes = (title)=> {

  var notes = fetchData();
  var serachResult = notes.filter((note)=> note.title === title);

if(serachResult.length > 0 ){
  return true;
}else{
  return false;
}

}

var getAllNotes = ()=>{
  return fetchData();
}

var printAllNotes = (note)=>{
  console.log(`Title : ${note.title}`);
  console.log(`Body : ${note.body}`);
}

module.exports = {
  addNotes,
  removeNotes,
  readNotes,
  getAllNotes,
  printAllNotes
}
// module.exports.add = (a,b) => {
//   return a+b;
// }
