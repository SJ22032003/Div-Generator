//colors-------
const hexNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//------------
let toCal = document.getElementById("to-cal");
var sum = 0;
//Remove-------
function revDiv() {
  const elements = document.getElementsByClassName("divCss");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
//--------------

//AddDiv--------
const btn = document.querySelector("#btn");
const resDIV = document.getElementById("resDiv");
btn.addEventListener("click", addDiv);
let total = document.getElementById("to-cal");

total.innerHTML = sum;

function addDiv() {
  let hexCol = "#";
  var colVal = document.getElementById("text-value");
debugger;
  var val = document.getElementById("text-value").value;
  sum = eval(sum + Number(val));
  alert(sum);
  total.innerHTML = sum;

  if (val > 0) {
    //colors---------
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * hexNumber.length);
      hexCol += hexNumber[random];
    }
    //--------------

    //DIVs---------
    for (let i = 0; i < val; i++) {
      const newDiv = document.createElement("div");
      console.log("add");
      newDiv.style.backgroundColor = hexCol;
      newDiv.classList.add("divCss");
      newDiv.classList.add("animate__animated", "animate__zoomInLeft");
      resDIV.appendChild(newDiv);

      colVal.classList.remove("err");
      colVal.classList.remove("animate__animated", "animate__headShake");
    }
  } else {
    console.log("error");
    colVal.classList.add("err");
    colVal.classList.add("animate__animated", "animate__headShake");
  }
}

//---------

//Number only input-------

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;

  return true;
}
//-------------------------
