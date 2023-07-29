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
    // const lbl = document.createElement("label");
    const lbl2 = document.createElement("label");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    // const img1 = document.createElement("img");

    fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(response => response.json())
      .then((json) => {
        for(let i = 0; i < 3; i++){
            let img1 = document.createElement("img");
            img1.src = json[i]["url"];
            img1.style.width = "200px";

            //style image
            // img1.className = "shadow rounded border p-3 m-3";
            // img1.addEventListener("mouseover, onHover");

            div.appendChild(img1);
        }

        //console.log(json)
        section.appendChild(div);
            
      })
}

function discoverMovies(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjY0ZWZhYWFhZTNjYTVjOWI2ODhkYWQ4YzVmMmU4YiIsInN1YiI6IjYxNTI3M2E5ZDFjYTJhMDA0MjYxNGM2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XIg3w2HDHuUf6JBdCpUolGFOnsjYZltVN3hMeYrBppU'
        }
      };
      
      fetch('https://api.themoviedb.org/3/discover/movie', options)
        .then(response => response.json())
        .then(response => {

            const results = response["results"];
            for (let i = 0; i < 30; i++) {
                const div = document.createElement("div");
                const h4 = document.createElement("h4");
                const img = document.createElement("img");
                const desc = document.createElement("p");
                const yearText = document.createElement("p");
                h4.innerText = results[i]["title"];
                //img.src = "https://api.themoviedb.org/3/discover/movie" + results[i]["poster_path"];
                img.src = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
                desc.innerText = results[i]["overview"];
                yearText.innerText = results[i]["release_date"];

                div.appendChild(img);
                div.appendChild(h4);
                div.appendChild(desc);
                div.appendChild(yearText);
                div.className = "card shadow border m-4 p-4 w-25";
                section.className = "d-flex flex-wrap justify-content-center"
                section.appendChild(div);

                //const element = array[i];
                
            }
            console.log(response["results"])
        }
            )
        .catch(err => console.error(err));
}

//loadData();
discoverMovies();

btn.addEventListener("click", printValue);
img.addEventListener("mouseover", onHover);
img.addEventListener("mouseout", onLeave);

