var student=["akshat","tanmay","keshav","kshitij"]
var ask=prompt("would you like to start student roaster app: y/n")

var quit_or_not=true
while(quit_or_not){
    if(ask=="y"){
        var select_command=prompt("select which command you want to perform: add,remove,dislay,quit")
        if(select_command=="add"){
            var add_new=prompt("enter student name to add")
            student.push(add_new)
        }
        else if(select_command=="remove"){
            var rem=prompt("name of student you want to remove")
            var index=student.indexOf(rem)//.indexof function to find index of any particular elemnet
            student.splice(index,1)//using pop will remove it from last element but splice removes from specific index
        }
        else if(select_command=="display"){
            var size=student.length
            var i=0;
            while(i<=size){
                console.log(student[i])
                i=i+1;
            } 
        }
        else if(select_command=="quit"){
            quit_or_not=false;
            console.log("ended program")
        }
}
else if(ask=="n"){
    quit_or_not=false;
    console.log("ended program")
}
}
    