

function prevNewCharClass(){
  curNewCharClassSelection--;
  if(curNewCharClassSelection<0){
    curNewCharClassSelection+=Object.keys(classes).length;
  }
  selectNewCharClass();
}

function nextNewCharClass(){
  curNewCharClassSelection++;
  curNewCharClassSelection = curNewCharClassSelection%Object.keys(classes).length;
  selectNewCharClass();
}

function prevNewCharRace(){
  curNewCharRaceSelection--;
  if(curNewCharRaceSelection<0){
    curNewCharRaceSelection+=Object.keys(races).length;
  }
  selectNewCharRace();
}

function nextNewCharRace(){
  curNewCharRaceSelection++;
  curNewCharRaceSelection = curNewCharRaceSelection%Object.keys(races).length;
  selectNewCharRace();
}

function prevNewCharBackground(){
  curNewCharBackgroundSelection--;
  if(curNewCharBackgroundSelection<0){
    curNewCharBackgroundSelection+=Object.keys(backgrounds).length;
  }
  selectNewCharBackground();
}

function nextNewCharBackground(){
  curNewCharBackgroundSelection++;
  curNewCharBackgroundSelection = curNewCharBackgroundSelection%Object.keys(backgrounds).length;
  selectNewCharBackground();
}

function prevNewCharAlignment(){
  curNewCharAlignmentSelection--;
  if(curNewCharAlignmentSelection<0){
    curNewCharAlignmentSelection+=Object.keys(alignments).length;
  }
  selectNewCharAlignment();
}

function nextNewCharAlignment(){
  curNewCharAlignmentSelection++;
  curNewCharAlignmentSelection = curNewCharAlignmentSelection%Object.keys(alignments).length;
  selectNewCharAlignment();
}
