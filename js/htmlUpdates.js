

function updateInfo(){
  get("characterNameValue").innerText = player.character.info.name;
  get("characterClassValue").innerText = player.character.info.class;
  get("characterLevelValue").innerText = player.character.info.level;
  get("characterBackgroundValue").innerText = player.character.info.background;
  get("characterRaceValue").innerText = player.character.info.race;
  get("characterAlignmentValue").innerText = player.character.info.alignment;
  get("characterExperienceValue").innerText = player.character.info.experience;
}
