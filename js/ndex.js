var user =document.querySelector(".user");
var email =document.querySelector(".email");
var pass =document.querySelector(".pass");
var submit =document.querySelector(".submit");
var par =document.querySelector(".par");
var login =document.querySelector(".login");
var emailsgin =document.querySelector(".email-sgin");
var passsgin =document.querySelector(".pass-sgin");
var username =document.getElementById("username");
var logout =document.getElementById("logout");
var allarry =[];
if(allarry === null){
    allarry=[];
}else{
    allarry=JSON.parse(localStorage.getItem("allarry"))
}

function savedata(){
if(email.value ==="" || pass.value==="" || user.value===''){
    par.innerText=" ALL inputs required";
       par.classList.add("red");   
}
else if(email.value !=null && pass.value !=null && user.value !=null){
    var element={
        user:user.value,
        email:email.value,
        pass:pass.value,
    }
    par.innerText= "success";
    par.classList.add("green");
    par.classList.remove("red");
    clear();
   allarry.push(element);
   localStorage.setItem("allarry",JSON.stringify(allarry));
   location.href="sgin.html";
}
}
if(submit != null){
    submit.addEventListener('click',function(){
        if(checksignup() ){
            par.innerHTML="email is exist";
            par.classList.add("red");
        }else if(!checksignup() && vailEmail()){
        savedata();
        }
            
        })
}
 function clear(){
    email.value =""; pass.value =""; user.value ="";
    setInterval(() => {
        par.innerHTML=""
    }, 300);
 }
 function checksignup(){
    for(var i=0;i < allarry.length;i++){
        if(allarry[i].email.toLowerCase() === email.value.toLowerCase()){
            return true
        }
    }
 }
 function vailEmail(){
    const emailvaild= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    const testing =emailvaild.test(email.value);
    if(testing===true){
         email.style.color="green";
          return true;

 }else{
return false;
 }
}

function checksgin(){
    if(emailsgin.value !=="" && passsgin.value!==""){
par.innerHTML="";
if(check()){
    location.href="home.html"
}else{
    par.innerHTML=" incorrect is email or password";  
    par.classList.add("red"); 
}
    }
    else{
        par.innerHTML=" ALL inputs are required";  
        par.classList.add("red"); 
    }
}

if(login !=null){
    login.addEventListener('click',function(){
        checksgin()
    })
}
function check(){
    for(var i=0;i< allarry.length;i++){
        if(allarry[i].email.toLowerCase() === emailsgin.value.toLowerCase() &&allarry[i].pass.toLowerCase() === passsgin.value.toLowerCase()){
            localStorage.setItem("name",JSON.stringify(allarry[i].user));
            return true;

        }
    }
}
function getname(){
    var namelog= JSON.parse(localStorage.getItem("name"))
    username.innerHTML=`welcome ${namelog}`;
}


if(logout !=null){
    logout.addEventListener('click',function(){
        localStorage.removeItem("name");
        location.href="sgin.html";
    })
}