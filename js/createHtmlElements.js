
// 
// function createHtmlNewCharClassElements(){
//   let classNames = Object.keys(classes);
//   for(let x = 0;x < classNames.length;x++){
//     let selectedClass = classes[classNames[x]];
//     let classElement = create("div");
//     classElement.className = "newCharElement";
//     classElement.onclick = function(){selectNewCharClass(classNames[x]);};
//     let className = create("div");
//     className.className = "newCharClassNameElement";
//     className.innerText = selectedClass.name;
//     classElement.appendChild(className);
//     let classImage = create("img");
//     classImage.className = "newCharClassImgElement";
//     classImage.src = "images/"+selectedClass.img;
//     classElement.appendChild(classImage);
//     get("newCharClasses").appendChild(classElement);
//   }
// }
//
// function createHtmlNewCharRaceElements(){
//   let raceNames = Object.keys(races);
//   for(let x = 0;x < raceNames.length;x++){
//     let selectedRace = races[raceNames[x]];
//     let raceElement = create("div");
//     raceElement.className = "newCharElement";
//     raceElement.onclick = function(){selectNewCharRace(raceNames[x]);};
//     let raceName = create("div");
//     raceName.className = "newCharRaceNameElement";
//     raceName.innerText = selectedRace.name;
//     raceElement.appendChild(raceName);
//     let raceImage = create("img");
//     raceImage.className = "newCharRaceImgElement";
//     raceImage.src = "images/"+selectedRace.img;
//     raceElement.appendChild(raceImage);
//     get("newCharRaces").appendChild(raceElement);
//   }
// }
