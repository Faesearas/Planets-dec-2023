import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PlanetMath from './js/planetMath.js';

function planetCalc(e) {
  e.preventDefault();
  let planetInput = document.getElementById("inputPlanet").value;
  let userDateInput = document.getElementById("inputDate").value;
  let userDate = new PlanetMath(userDateInput);
  userDate.yearCompare(planetInput);
  document.getElementById("earthResult").innerText = userDate.userAge;
  document.getElementById("selectionResult").innerText = userDate.pntAge;
}

window.addEventListener("load", function () {
  document.querySelector("form#planetCalc").addEventListener("submit", planetCalc);
});