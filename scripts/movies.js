// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let movieAdd=JSON.parse(localStorage.getItem("movie1")) || []

let movies_div=document.getElementById("movies")
let id;
 async function searchMovies(){

    //const url ="https://www.omdbapi.com/?apikey=6a41ddca&s=om_shanti_om"
try{
const query= document.getElementById("search").value;

const res=await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`)

const data=await res.json();

const movies=data.Search;
// appendMovie(movies)
return movies

// console.log("data",data)

}
catch(err){
    console.log("err",err);
    }

}


function appendMovie(data){
    //optimization


movies_div.innerHTML=null
    data.forEach(el => {
        
        let p=document.createElement("p");
        p.innerText=el.Title;
        
        let img=document.createElement("img")
        img.src=el.Poster

        let btn=document.createElement("button")
        btn.innerText="Book Now";

        btn.addEventListener("click",function (){
            addToMovie(el);
        })

movies_div.append(img,p,btn);
document.querySelector("#movies").append(movies_div);

    });

}
function addToMovie(el){

    console.log(el)
    movieAdd.push(el)
    localStorage.setItem("movie1",JSON.stringify(movieAdd))
    // alert("add")
    location.href = "checkout.html";
}


async function main(){

let data= await searchMovies();

if(data === undefined){
    return false;
}

appendMovie(data);

}



function debounce(func,delay){

if(id){
    clearTimeout(id)
}

    id= setTimeout(() => {
        
        func();

    }, delay);
}


