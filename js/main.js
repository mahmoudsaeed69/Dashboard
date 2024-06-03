let navBar=document.querySelector(".novction-bar")
let list=document.querySelectorAll(".novction-bar ul li")
let mainContent=document.querySelectorAll(".main-content")
let togelBar=document.querySelector(".nave-body .input-serch .tol-bar")
let activeClass=togelBar.querySelector(".no-active")
let title=document.querySelector("title")
            togelBar.onclick=function(){
        if(activeClass.classList.contains("no-active")){
            activeClass.classList.replace("no-active","on")
        } else{
            
            activeClass.classList.replace("on","no-active")
            navBar.style="dispaly:none"

        }
        if(activeClass.classList.contains("on")){
            navBar.style="display: block"

        }
        }
        

for(let i=0;i<=list.length;i++){
    list[i].onclick=function(){
        list.forEach((li)=>{
            li.classList.remove("active")
        })
        list[i].classList.add("active")
        mainContent.forEach((ele)=>{
            ele.classList.remove("active")
        })
        document.querySelector(`${list[i].dataset.content}`).classList.add("active")
        title.innerHTML=list[i].querySelector("span").innerHTML        
    }
}
