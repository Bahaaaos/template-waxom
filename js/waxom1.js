let post=document.querySelectorAll(".ourposts .post");
let l=post.length;
let width=32;


let leftIcon=document.querySelector(".pagination .left");
leftIcon.onclick=function(){//function for pagination posts to left
    let   w=window.innerWidth;
 rightIcon.classList.remove("disable");
 if (w>767){
     if (post[0].style.left!=="0%"){
        let lft=[];
        if (post[1].style.left=="0%"){
            leftIcon.classList.add("disable");
        }
        post.forEach((el,i)=>{           
            lft[i]=parseInt(el.style.left);
            el.style.left=(lft[i]+34).toString()+"%";
        })
    }
    }else if (w<767 && w>500){
        if (post[0].style.left!=="0%"){
            let lft=[];
            if (post[1].style.left=="0%"){
                leftIcon.classList.add("disable");
            }
            post.forEach((el,i)=>{           
                lft[i]=parseInt(el.style.left);
                el.style.left=(lft[i]+52).toString()+"%";
            });
        }
    }else{
        if (post[0].style.left!=="0%"){
            let lft=[];
            if (post[1].style.left=="0%"){
                leftIcon.classList.add("disable");
            }
            post.forEach((el,i)=>{           
                lft[i]=parseInt(el.style.left);
                el.style.left=(lft[i]+100).toString()+"%";
            });

        }
    }
 
}



let rightIcon=document.querySelector(".pagination .right");
rightIcon.onclick=function(){//function for pagination posts to right
 let   w=window.innerWidth;
 leftIcon.classList.remove("disable");
 if (w>767){
     if (post[l-1].style.left!=="68%"){
        let lft=[];
        if (post[l-2].style.left=="68%"){
            rightIcon.classList.add("disable");
        }
        post.forEach((el,i)=>{           
            lft[i]=parseInt(el.style.left);
            el.style.left=(lft[i]-34).toString()+"%";
        })
    }
    }else if (w<767 && w>500){
        if (post[l-1].style.left!=="52%"){
            let lft=[];
            if (post[l-2].style.left=="52%"){
                rightIcon.classList.add("disable");
            }
            post.forEach((el,i)=>{           
                lft[i]=parseInt(el.style.left);
                el.style.left=(lft[i]-52).toString()+"%";
            });
        }
    }else{
        if (post[l-1].style.left!=="0%"){
            let lft=[];
            if (post[l-2].style.left=="0%"){
                rightIcon.classList.add("disable");
            }
            post.forEach((el,i)=>{           
                lft[i]=parseInt(el.style.left);
                el.style.left=(lft[i]-100).toString()+"%";
            });

        }
    }
}
window.onresize=function(){//to reset left for post on resize window
   let w=window.innerWidth;
   rightIcon.classList.remove("disable");

   leftIcon.classList.add("disable");

   if (w>767){
       post.forEach((el,i)=>{
           el.style.left=(i*34).toString()+"%";
        el.style.width="32%";
       });
   }else if(w>500){
        post.forEach((el,i)=>{
            el.style.left=(i*52).toString()+"%";
            el.style.width="48%";

        });
   }else{
    post.forEach((el,i)=>{
        el.style.left=(i*100).toString()+"%";
        el.style.width="100%";

    });
   }
}
let w=window.innerWidth;
if (w>767){
    post.forEach((el,i)=>{
        el.style.left=(i*34).toString()+"%";

    })
}else if(w>500){
    post.forEach((el,i)=>{
        el.style.left=(i*52).toString()+"%";

    })
}else{
    post.forEach((el,i)=>{
        el.style.left=(i*100).toString()+"%";

    })
}
let btn=document.querySelector(".projects  button");
let project=document.querySelectorAll(".projects .project");
btn.onclick=function(){  //function to show more or hide some project
    project.forEach((el)=>{
        if(el.classList.contains("hidden")){
            el.classList.remove("hidden");
             el.classList.add("visible");      
        }else if (el.classList.contains("visible")){
            el.classList.remove("visible");
            el.classList.add("hidden");
        }
    })
    if(this.textContent=="load more"){  // to change the text in the button
        this.textContent="hide some project";

    }else {
        this.textContent="load more";
    }
     
}
let list=document.querySelectorAll(".projects li");
let web=document.querySelector(".projects ul .web");
let photo=document.querySelector(".projects ul .photo");
let ills=document.querySelector(".projects ul .ills");
let mobile=document.querySelector(".projects ul .mobile");
function filter(x) {///function for filter project on click on nav 
    for (let i=0; i<project.length;i++){
        if(project[i].classList.contains("visible")){
            project[i].classList.remove("visible");
            project[i].classList.add("hidden");
        }
        if (project[i].classList.contains("hide")){
            project[i].classList.remove("hide");
        }
    }
    project.forEach(el => {
        if(el.classList.contains(x)){
            if(el.classList.contains("hidden")){
                el.classList.remove("hidden");
                el.classList.add("visible");
            }
        }else if(!el.classList.contains(x) && !el.classList.contains("hidden")){
            el.classList.add("hide");
        }
    });
    btn.style.display="none";
    list.forEach(el=>{
        el.classList.remove("active");
    })


}
web.onclick=function(){
    filter("web");
    this.classList.add("active");
}
photo.onclick=function(){
    filter("photo");
    this.classList.add("active");
}
ills.onclick=function(){
    filter("ills");
    this.classList.add("active");
}
mobile.onclick=function(){
    filter("mobile");
    this.classList.add("active");
}
let all=document.querySelector(".projects ul .all");
all.onclick=function() { //to show all project when click on nav item "all"
    for (let i=0; i<project.length;i++){
        if(project[i].classList.contains("visible")){
            project[i].classList.remove("visible");
            project[i].classList.add("hidden");
        }
        if (project[i].classList.contains("hide")){
            project[i].classList.remove("hide");
        }
    }
    btn.style.display="block";
    btn.textContent="load more";

}