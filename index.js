let fnameEle =document.getElementById("fname");
let lnameEle = document.getElementById("lname");
let pwdEle = document.getElementById("pwd");
let cnfpwdEle = document.getElementById("cnf-pwd");
let emailEle = document.getElementById("email");
var numberEle = document.getElementById("number");

let fnameError = document.getElementById("fname-error");
let lnameError = document.getElementById("lname-error");
let pwdError = document.getElementById("pwd-error");
let cnfPwdError = document.getElementById("cnf-pwd-error");
let emailError = document.getElementById("email-error");
let numberError = document.getElementById("number-error");

function validate1() {
    let regexp = /^[a-zA-Z]{2,50}$/
    if (fnameEle.value === "") {
        fnameError.textContent = "*this field is required"
        return false
    }else if(regexp.test(fnameEle.value) === false){
        fnameError.textContent = "*please enter valid name"
        return false
    } else {
        fnameError.textContent = ""
        return true
    }
}
function validate2() {
    let regexp = /^[a-zA-Z]{2,50}$/
    if (lnameEle.value === "") {
        lnameError.textContent = "*this field is required"
        return false
    }else if(regexp.test(lnameEle.value) === false){
        lnameError.textContent = "*please enter valid name"
        return false
    } else {
        lnameError.textContent = ""
        return true
    }
}
function validate3() {
    let regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
    if (pwdEle.value === "") {
        pwdError.textContent = "*this field is required"
        return false
    }else if(regexp.test(pwdEle.value) === false){
        pwdError.textContent = "*please enter valid password"
        return false
    } else {
        pwdError.textContent = ""
        return true
    }
}
function validate4() {
    if(cnfpwdEle.value === "") {
        cnfPwdError.textContent = "*this field is required"
        return false
    }else if(pwdEle.value !== cnfpwdEle.value){
        cnfPwdError.textContent = "*password and confirm password are not matched"
        return false
    }else {
        cnfPwdError.textContent = ""
        return true
    }
}
function validate5() {
    let index = emailEle.value.indexOf("@")
    console.log(index);
    if (emailEle.value == "") {
        emailError.textContent = "this field is required"
        return false
    }else if(index==-1) {
        emailError.textContent = "please enter valid email"
        return false
    }else {
        emailError.textContent = ""
        return true
    }
}
function validate6() {
    let regexp = /^[6-9][0-9]{9}$/
    if (numberEle.value == "") {
        numberError.textContent = "this field is required"
        return false
    }else if (regexp.test(numberEle.value)==false){
        numberError.textContent=("mobile number must be starts with 6-9 and numeric only")
        return false
    }else if (numberEle.value.length!==10){
        numberError.textContent=("mobile number contains mimimum 10 numbers")
        return false
    } else {
       numberError.textContent = ""
        return true
    }
}

function validation() {
    let v1 = validate1();
    let v2 = validate2();
    let v3 = validate3();
    let v4 = validate4();
    let v5 = validate5();
    let v6 = validate6();

    return v1 && v2 && v3 && v4 && v5 && v6; 

}