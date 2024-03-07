console.log("music");

let button = document.querySelector("button");
// let numberButtion = document.querySelector(".number-button");
// let questionButton = document.querySelector(".ss-button");
let result = document.querySelector(".result");
let result1 = document.querySelector(".result1");
// let submitButton = document.querySelector(".submit");
// document.querySelector("number-message").innerHTML = "ok";
//code

button.onclick = function() {
  console.log("number");
  console.log("music");

  let number = document.querySelector(".answer1").value;
  let music = document.querySelector(".answer2").value;

  result1.innerHTML = "you listened" + number + "and..." + music + "YOU JUST LIKE ME FRR"


  if (number >= 20 && music === "scream your heart out") {
    result.innerHTML = "YOU JUST LIKE ME FRR";
  } else if (music === "leave the room" && number <= 10) {
    result.innerHTML = "do you even think you like music?";
  }
  else if (music === "leave the room" && number >= 20){
    result.innerHTML = " I mean you not addicted but you something!;"
  }
   else if (number <= 10 && music === "scream your heart out)"){
  result.innerHTML = "not addicted but just right";
}
  // result.innerHTML = "you listened " + number + " number times."
  // result.innerHTML =
  // let input1 = number(document.querySelector(".pastmonth").value);
  // let input2 = document.querySelector(".")


}








