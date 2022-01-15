if(condition){
    // do something
}else{
    // do something
}

var a = 10
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

Number 10 is even

var a = 11
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM1839:5 Number 11 is odd



var name = "Kanika"

if(name=="Nikita"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} you are unknown`)
}

"Hi Kanika you are unknown"

///////ternary (single line if else)
condition?if condition pass:if condition fail

var a = 10
a>10?"Hii":"Bie"
'Bie'

var a = 10
a>10?a+1:a-1
9
var a = 9
a>10?a+1:a-1
8
var a = 11
a>10?a+1:a-1
12