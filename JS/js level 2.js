function hello(){
    console.log("hello user");
}
function hello_you(name="Rahul"){//here rahul is default value if we don't give any value in name
    return "hello "+name
}
function times5(num){
    var result=num*5;
    return result;
}
//functions excercise
//problem 1
function sleepin(weekday,vacation){
    if(weekday!=true||vacation==true){
        return true;
    }
    else return false;
}
//problem2
function monkey_trouble(asmile,bsmile){
    if((asmile==true&&bsmile==true)||(asmile!=true&&bsmile!=true)){
        return true;
    }else return false;
}
///problem 3
var return_str=""
function string_times(str,n){
    while(n--){
        return_str=return_str+str;
    }
    return return_str;
}
///probelm 4
function lucky_sum(a,b,c){
    if(a==13){
        return 0;
    }
    if(b==13){
        return a;
    }
    if(c==13){
        return a+b;
    }
    return a+b+c;
}

//problem 5
function speed_ticket(speed,bday){
    if(bday==true){
        if(speed<=65){
            return 0;
        }
        else if(speed>65&&speed<=85){
            return 1;
        }
        else return 2;
    }
    if(speed<=60){
        return 0;
    }
    else if(speed>60&&speed<=80){
        return 1;
    }
    else return 2;
}

/// ARRAYS


