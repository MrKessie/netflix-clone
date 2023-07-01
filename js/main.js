const btn = document.querySelector("#start-btn");
const section = document.querySelector(".content");
const email = document.querySelector("#email-box");
const lbl = document.createElement("label");
const img = document.createElement("img");

function printValue(e){
    e.preventDefault();
    section.appendChild(lbl);
    alert(email.value);
    lbl.innerText = "Welcome, " + email.value;
    lbl.style.color = "red";
    lbl.style.fontSize = "40px";
    section.appendChild(img);
    img.src = "/images/net.png";
    img.style.width = "300px";
}

function onHover(){
    img.style.width = "500px"
}

function onLeave(){
    img.style.width = "300px"
}

btn.addEventListener("click", printValue);
img.addEventListener("mouseover", onHover);
img.addEventListener("mouseout", onLeave);

