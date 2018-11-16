var tutorialInfo = document.getElementById("tutorial-template").innerHTML;

var template = Handlebars.compile(tutorialInfo);

var tutorialData = template({
  subject: "Tutorial",
  names: [
  {name: "Remove Strings Arm"},
  {name: "Mirror Arm Bones"},
  {name: "Name and Orient the New Bones"}
        ]
});
document.getElementById("tutorialData").innerHTML += tutorialData;
