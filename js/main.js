
var player = {
  character : {
    info : {
      name : "placeholder",
      class : "placeholder",
      level : 0,
      background : "placeholder",
      race : "placeholder",
      alignment  : "placeholder",
      experience : 0,
    },
    stats : {

    },
  },
  achievements : {

  },
};

let curNewCharClassSelection = 0;
let curNewCharRaceSelection = 0;
let curNewCharBackgroundSelection = 0;
let curNewCharAlignmentSelection = 0;


// createHtmlNewCharClassElements();
// createHtmlNewCharRaceElements();

updateInfo();
createNewChar();

setInterval(tick,20);

function tick(){

}


function createNewChar(){
  selectNewCharClass();
  selectNewCharRace();
  selectNewCharBackground();
  selectNewCharAlignment();
  get("newCharacterForm").style.display = "inline-block";
}

function selectNewCharClass(){
  let characterClass = classes[Object.keys(classes)[curNewCharClassSelection]];
  get("newCharClass").innerText = characterClass.name;
  get("newCharClassDescription").innerText = characterClass.description;
  get("newCharClassPortrait").src = "images/"+characterClass.img;
}

function selectNewCharRace(){
  let characterRace = races[Object.keys(races)[curNewCharRaceSelection]];
  get("newCharRace").innerText = characterRace.name;
  get("newCharRaceDescription").innerText = characterRace.description;
  get("newCharRacePortrait").src = "images/"+characterRace.img;
}

function selectNewCharBackground(){
  let characterBackground = backgrounds[Object.keys(backgrounds)[curNewCharBackgroundSelection]];
  get("newCharBackground").innerText = characterBackground.name;
  get("newCharBackgroundDescription").innerText = characterBackground.description;
  get("newCharBackgroundPortrait").src = "images/"+characterBackground.img;
}

function selectNewCharAlignment(){
  let characterAlignment = alignments[Object.keys(alignments)[curNewCharAlignmentSelection]];
  get("newCharAlignment").innerText = characterAlignment.name;
  get("newCharAlignmentDescription").innerText = characterAlignment.description;
  get("newCharAlignmentPortrait").src = "images/"+characterAlignment.img;
}
