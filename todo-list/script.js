const inputBox = document.getElementById("input-box");
const abcd = document.getElementById("abcd");
let inputab = "false";

function MaddeEkle() {
    if (inputBox.value === '') {
        alert("Doldurman gerek!");

    }

    else {
        let li = document.createElement("li");
        const parag = document.createElement("p");
        li.innerText = inputBox.value;
        parag.appendChild(li);
        abcd.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        let i = document.createElement("i");
        i.innerHTML = "\u2730";
        li.appendChild(i);
        li.appendChild(span);
    }
    saveData();
}
abcd.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        if (inputab === "false") {
            e.target.classList.toggle("zey");
            saveData();
        }
        console.log(inputab);
        console.log(e.target.parentElement.getAttribute("contenteditable"));
        console.log(e.target.innerText);

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData() {
    const items = localStorage.getItem("data");
    const isThere = items.includes(inputBox.value);
    console.log(isThere);
    console.log(inputBox.value.length);
    localStorage.setItem("data", abcd.innerHTML);
    localStorage.setItem("val", inputBox.value);
}
function MaddeGoster() {
    abcd.innerHTML = localStorage.getItem("data");
}
MaddeGoster();
inputBox.addEventListener("keyup", function (Event) {
    if (Event.key == "Enter") {
        MaddeEkle(inputBox.value)
        inputBox.value = "";
    }
});
function MaddeSil() {
    abcd.innerHTML = localStorage.getItem("data");
}
function MaddeSil() {
    document.querySelector("#abcd").innerHTML = "";
    saveData();
}

abcd.addEventListener("click", function (e) {
    if (e.target.tagName === "I") {
        console.log(e.target.parentElement.getAttribute("contenteditable"));
        if (e.target.parentElement.getAttribute("contenteditable") === "true") {
            e.target.parentElement.setAttribute("contenteditable", "false");
            inputab = "false";
        }
        else {
            e.target.parentElement.setAttribute("contenteditable", "true");
            inputab = "true";
        }
    }
    saveData();

}, false);

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function myFunction() {
    var x = document.getElementById().checked;
    document.getElementById("demo").innerHTML = x;
  }
  function Kaldir(){
    var element = document.querySelectorAll(".zey");
    console.log(element);
    element.forEach(li => li.classList.toggle("zey1"));
    saveData();
  }