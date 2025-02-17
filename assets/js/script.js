alert("hello world");

let teamItem = document.querySelectorAll(".team-item");
let team1 = document.querySelector(".team1");
let team2 = document.querySelector(".team2");
let team3 = document.querySelector(".team3");
let team4 = document.querySelector(".team4");

const TEAM = [team1, team2, team3, team4];

// MouseOver
for (let i = 0; i < teamItem.length; i++) {
  console.log(teamItem[i]);
  if (!teamItem[i].classList.contains('team1'))  {
  teamItem[i].addEventListener("click", () => {
    teamItem[i].classList.add("team1");
  })} 
  else if (!teamItem[i].classList.contains('team2'))  {
    teamItem[i].addEventListener("click", () => {
      teamItem[i].classList.add("team2");
    })} else if
  

}

// MouseOut
for (let i = 0; i < team.length; i++) {
  teamItem[i].addEventListener("mouseout", () => {
    if (teamItem[i].classList.contains("team1")) {
      teamItem[i].classList.remove("team1");
    } else if (teamItem[i].classList.contains("team2")) {
      teamItem[i].classList.remove("team2");
    } else if (teamItem[i].classList.contains("team3")) {
      teamItem[i].classList.remove("team3");
    } else if (teamItem[i].classList.contains("team4")) {
      teamItem[i].classList.remove("team4");
    }
  });
}

/* FONCTION AVEC PARAMETRES*/
