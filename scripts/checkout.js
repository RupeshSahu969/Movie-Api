// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time



let movieAdd=JSON.parse(localStorage.getItem("movie1")) || []

// console.log(movieAdd)

function confirm(){

    event.preventDefault();
     
    let user_name=document.querySelector("#user_name").value

     let number=document.querySelector("#number").value
     
     movieAdd.map(function(el){

        if(el.user_name == 100 && number==100){
            alert("success")
        }
        else{
            alert("Insuffient Balance")
        }
     })

     
}

movieAdd.map(function (el,index){

let box=document.createElement("div")

let p=document.createElement("p");
p.innerText=el.Title;

let img=document.createElement("img")
img.src=el.Poster

box.append(p,img)
document.querySelector("#movie").append(box)



});