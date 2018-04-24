var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var facts = ["He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"];

function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for(let index= 0; index < musicians.length; index++){
    empty.push(musicians[index] + " " + "plays" + " " + instruments[index]);
  }
  return empty
}

function johnLennonFacts(facts){
  var empty=[];
  var index= 0;
  while(index < facts.length){
    empty.push(facts[index]+ "!!!")
    index++;
  }
  return empty;
}

function iLoveTheBeatles(n){
  var empty = [];
  do{
    empty.push("I love the Beatles!");
    n++
  }
  while(n < 15);

  return empty;
}
