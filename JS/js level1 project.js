var fname=prompt("Enter your first name")
var lname=prompt("Enter your last name")
var age=prompt("enter your age")
var size=prompt("enter your height in cm")
var pet=prompt("ENter your pet's name")

var count=0
if(fname[0]==lname[0]){
    count++;
}
if(age>20&&age<30){
    count++;
}
if(size>=170){
    count++;
}
if(pet[pet.length-1]=="y"){//function is pet.length not pet.length()
    count++;
}
if(count==4){
    console.log("Here is a secret message for you SPY")
}else{
    console.log("Hey user thankyou for sharing this information.")
}
