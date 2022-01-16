var a = 10 
var b = 20
a+b
30

keyword nameoffunction(parameter){
    return output
}

function add(a,b){
    return a+b
}

add(1,2)
3
add(5,90)
95
add('hii','javascript')
'hiijavascript'

function isEven(userinput){
    var out;
    if(userinput%2 == 0){
        out = `${userinput} is even`
    }else{
        out = `${userinput} is odd`
    }
    return out
}

isEven(2)
'2 is even'
isEven(35)
'35 is odd'

//es6
let add = (a,b) => {return a+b}
add(1,3)
4