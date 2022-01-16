const getId = () => {
    var id = Math.floor(Math.random() * 10000);
    document.getElementById('uid').value=id
}

function validateFname(){
    var name = document.getElementById('fname').value;
    if(name.trim().length == 0){
        document.getElementById('fout').innerText="Please Enter FirstName"
    }else{
        document.getElementById('fout').innerText=""
    }
}

const validateEmail = () => {
    var email = document.getElementById('email').value;
    if(email.trim().length == 0){
        document.getElementById('eout').innerText="Please Enter Email"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            document.getElementById('eout').innerText="Please Enter Valid Email"
        }else{
            document.getElementById('eout').innerText=""
        }
    }
}

function validatePwd(){
    var pwd = document.getElementById('pwd').value;
    if(pwd.length < 15 ){
        if(pwd.length < 8 ){
            document.getElementById('pout').innerText="Min length of password should be 8";
            document.getElementById('ppout').style.display="block";
            document.getElementById('ppout').style.backgroundColor="red"
        }else if(pwd.length < 11 ){
            document.getElementById('pout').innerText="";
            document.getElementById('ppout').style.backgroundColor="orange"
        }
    }else{
        document.getElementById('ppout').style.backgroundColor="green"
    }
}

function showPassword(){
    var pwd = document.getElementById('pwd');
    if(pwd.type == 'password'){
        pwd.type = 'text'
    }else{
        pwd.type = 'password'
    }
}

function validatecPwd(){
    var pwd = document.getElementById('pwd').value;
    var cpwd = document.getElementById('cpwd').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="Password Does Not Match";
    }else{
        document.getElementById('cpout').innerText=""
    }
}

const getCity = () => {
    var lang = document.getElementById('lang').value;
    document.getElementById('langOut').innerText=`Your lang is ${lang}`
}

const formSubmut = () => {return}