
let check=JSON.parse(localStorage.getItem("checkmovie ")) ||[]

function confirm(){

    event.preventDefault();
     
    let user_name=document.querySelector("#user_name").value

     let number=document.querySelector("#number").value
     
     check.map(function(el){

        if(el.user_name == 100 && number==100){
            alert("success")
        }
        else{
            alert("Insuffient Balance")
        }
     })

     
}