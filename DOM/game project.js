console.log("connected")

///restart game button
var restart=document.querySelector("#button")

//grab all the squares
var squares=document.querySelectorAll("td")//query sleector all coz we want this to apply for all the squares
///clear all the squares
function clearboard(){
    for(var i=0;i<squares.length;i++){
        squares[i].textContent=" ";//replace X or O with blank space
    }
}
restart.addEventListener("click",clearboard); 

//long method to put x,o and blank cycle in squares
// var onetd=document.querySelector("#onetd")
// onetd.addEventListener("click",function(){
//     if(onetd.textContent=="X"){
//         onetd.textContent="O";
//     }
//     else if(onetd.textContent=="O"){
//         onetd.textContent=" ";
//     }
//     else if(onetd.textContent==" "){
//         onetd.textContent="X";
//     }
// })
/// but this we have to do for every square and that will be long task to do (easy way to do it is using "this" keywork)
//here is the better way to do it
function changemarker(){
    if(this.textContent==" "){
        this.textContent="X";
    }
    else if(this.textContent=="O"){
        this.textContent=" ";
    }
    else if(this.textContent=="X"){
        this.textContent="O";
    }
}

//this is more genric version of function that we wrote earlier and now using This keywork our task becomes easy


//for loop to add event listeners to all the squares
for(var i=0;i<squares.length;i++){
    squares[i].addEventListener("click", changemarker)
}