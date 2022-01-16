/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)+Number(b);
    document.getElementById('output').innerText=`Sum of number is ${out}`
}
function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = a-b;
    document.getElementById('output').innerText=`Sub of number is ${out}`
}*/

function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(opt == "add"){
        out = `Sum of number is ${Number(a)+Number(b)}`;
    }else{
        out = `Sub of number is ${Number(a)-Number(b)}`;
    }
    document.getElementById('output').innerText=out
}