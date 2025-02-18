// alert("hello world");

let teamItem = document.querySelectorAll(".team-item");
let teamContent = document.querySelectorAll(".cardContent");
let team = ["team1", "team2", "team3", "team4"];

function teamHover(number, team) {
  teamItem[number].addEventListener("mouseover", () => {
    if (!teamItem[number].classList.contains(team)) {
      teamItem[number].classList.add(team);
      teamContent[number].style.color = "white";
    } else {
      teamItem[number].classList.remove(team);
      teamContent[number].style.color = "";
    }
  });

  teamItem[number].addEventListener("mouseout", () => {
    if (teamItem[number].classList.contains(team)) {
      teamItem[number].classList.remove(team);
    } else {
      teamItem[number].classList.add(team);
    }
  });
}

for (i = 0; i < teamItem.length; i++) {
  teamHover(i, team[i]);
}

// if you are not ok, use this, else use the basic forms validation js
(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
