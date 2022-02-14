// api url
const api_url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c";

const img_poster = "https://image.tmdb.org/t/p/w1280"



// Defining async function
async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        for (let a of data.results) {
            let main = document.querySelector("main")

            //new tags
            let items_wrapper = document.createElement("div");
            let img = document.createElement("img");
            let info = document.createElement("div");
            let info_h3 = document.createElement("h3");
            let span = document.createElement("span");
            let overview = document.createElement("div");
            let overview_h3 = document.createElement("h3");

            //new classes
            items_wrapper.classList.add("items-wrapper");
            img.classList.add("img");
            info.classList.add("info");
            span.classList.add("info-span");
            info_h3.classList.add("info-h3");
            overview.classList.add("overview");
            overview_h3.classList.add("overview-h3");

            //new texts
            info_h3.innerHTML = a.title
            span.innerHTML = a.vote_average
            overview_h3.innerHTML = "overview";
            overview.innerHTML = a.overview

            //colors of vote average
            if (a.vote_average < 5) {
                span.classList.add("red");
            } else if (a.vote_average < 8 && a.vote_average >= 5) {
                span.classList.add("orange");
            } else {
                span.classList.add("green");
            }

            //location of tags
            main.append(items_wrapper);
            items_wrapper.append(img);
            items_wrapper.append(info);
            info.append(info_h3);
            info.append(span);
            overview.prepend(overview_h3);
            items_wrapper.append(overview);

            img.src = `${img_poster}${a.poster_path}`;

        }

    }

}
// Calling that async function
getapi(api_url);