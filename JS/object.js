///basic syntax
var carinfo={make:"toyota",year:"1990",model:"sumy"}
// now to access toyota value we need to paas make (key) in carinfo as string 
console.log(carinfo["make"])

//object within object example
var mynew={a:"hello",b:[1,2,3,4],c:{inside:['a','b']}}

var myobj={
    prop: 37,
    reportprop:function(){
        console.log("The property is number : "+this.prop);//this keyword use(to call property in a function of an object)
    }
};
console.log(myobj.reportprop());

var simple={
    prop:"hello",
    mymethod:function(){
        console.log("My method was called")
        //how to call this==> simple.mymethod()
    }
}

///objects excercise
//problem 1: to return length of name to console
var employee={
    name:"John Smith",
    job:"Programmmer",
    age:31,
    namelength:function(){
        console.log("length of name is: "+this.name.length)
    }
}

///problem 2 : to alert all of properties and share lastname string 
var employee={
    name:"John Smith",
    job:"Programmmer",
    age:31,
    report:function(){
        alert("Name is : "+this.name+" , Job is: "+this.job+" , and age is: "+this.age)

    },
    lastname:function(){
        console.log("Last name is: "+this.name.split(" ")[1])//split function and arg as where u want to split : so it splits when it encounters " " and [1]is for it to store as array 
    }
}