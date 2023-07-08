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

function loadData(){
    const div = document.createElement("div");
    const lbl = document.createElement("label");
    const lbl2 = document.createElement("label");
    const p = document.createElement("p");
    const p2 = document.createElement("p");

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
      .then((json) => {
        p.innerText= json["title"];
        lbl.innerText = "Title of work";
        lbl2.innerText = json["completed"];
        p2.innerText = "Completed of work"
        div.appendChild(lbl);
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(lbl2)
        section.appendChild(div);
        
        


        
      })
}
loadData();

btn.addEventListener("click", printValue);
img.addEventListener("mouseover", onHover);
img.addEventListener("mouseout", onLeave);

