let abbreviation=abbreviationInput.value;

let arr = abbreviation.split('');

console.log(abbreviation);

console.log(arr);

let dictionary = [
    {sign:"0",Trans:"Zero"},
    {sign:"1",Trans:"One"},
    {sign:"2",Trans:"Two"},
    {sign:"3",Trans:"Three"},
    {sign:"4",Trans:"Four"},
    {sign:"5",Trans:"Five"},
    {sign:"6",Trans:"Six"},
    {sign:"7",Trans:"Seven"},
    {sign:"8",Trans:"Eight"},
    {sign:"9",Trans:"Nine"},
    {sign:"A",Trans:"Alpha"},
    {sign:"B",Trans:"Bravo"},
    {sign:"C",Trans:"Charlie"},
    {sign:"D",Trans:"Delta"},
    {sign:"E",Trans:"Echo"},
    {sign:"F",Trans:"Foxtrot"},
    {sign:"G",Trans:"Golf"},
    {sign:"H",Trans:"Hotel"},
    {sign:"I",Trans:"India"},
    {sign:"J",Trans:"Juliett"},
    {sign:"K",Trans:"Kilo"},
    {sign:"L",Trans:"Lima"},
    {sign:"M",Trans:"Mike"},
    {sign:"N",Trans:"November"},
    {sign:"O",Trans:"Oscar"},
    {sign:"P",Trans:"Papa"},
    {sign:"Q",Trans:"Quebec"},
    {sign:"R",Trans:"Romeo"},
    {sign:"S",Trans:"Sierra"},
    {sign:"T",Trans:"Tango"},
    {sign:"U",Trans:"Uniform"},
    {sign:"V",Trans:"Victor"},
    {sign:"W",Trans:"Whiskey"},
    {sign:"X",Trans:"X-ray"},
    {sign:"Y",Trans:"Yankee"},
  ]
  console.log(dictionary);

  
function decipher(){ 
  
  for(i in dictionary){
    if(dictionary[i].sign==me.value) 
    abbreviation.innerHTML=dictionary[i].Trans;
  }
}
