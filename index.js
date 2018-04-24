var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for(let index= 0; index < musicians.length; index++){
    empty.push(musicians[index] + " " + "plays" + " " + instruments[index]);
  }
  return empty
}

f