let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let result=document.getElementById("pass");
let btn3=document.getElementById("btn3");
let image=document.getElementById("image");
let genrate=()=>{
    
    // for(let i=0;i<9;i++){
       let pass=Math.ceil(100000000+Math.random()*900000000);
    // }
    result.value=pass;
    

}
let display=()=>{
    if(result.type==="password"){
        result.type="text";
        image.classList.remove("fa-eye-slash");
        image.classList.add("fa-eye");
    }
    else{
        result.type="password";
        image.classList.remove("fa-eye");
        image.classList.add("fa-eye-slash");
    }

}
let copy=()=>{//TO MAKE COPY FUNCTION USE navigator.clipboard.writeText() method.
    let value=result.value;
    if(value!=""){
        navigator.clipboard.writeText(value)
        .then(()=>{
            alert("PASSWORD IS COPIED");
            btn1.innerHTML="COPIED";
             setTimeout(()=>{
                
                btn1.innerHTML="COPY";
            },4500);
        })
        .catch(err=>{
           alert("FAILED TO COPY ");
           console.log("copy failed ",err);
        });
    }
}
btn1.addEventListener("click",copy);
btn2.addEventListener("click",genrate);
btn3.addEventList