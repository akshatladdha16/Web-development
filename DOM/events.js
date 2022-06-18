var headone=document.querySelector("#one")
var headtwo=document.querySelector("#two")
var headthree=document.querySelector("#three")

/// mouse over and mouseout events
headone.addEventListener('mouseover',function(){
    headone.textContent="Mouse currently over";
    headone.style.color='red';
})
headone.addEventListener('mouseout',function(){
    headone.textContent="Hover over me";
    headone.style.color='black';
})


//click event
headtwo.addEventListener("click",function(){
    headtwo.textContent="Clicked on";
    headtwo.style.color='lightblue'
})


//double click
headthree.addEventListener("dblclick",function(){
    headthree.textContent="I was double clicked";
    headthree.style.color='red';
})