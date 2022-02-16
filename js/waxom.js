$("document").ready(function(){

    var left=[],
        bw=$(window).width(),
        ourPostWidth=$(".ourposts").width(),
        len=$(".ourposts .post").length, 
        left1=0,
        left2=$(".ourposts .post").eq(1).position().left,
        left3=$(".ourposts .post").eq(2).position().left,
        i;
        
    for (i=0;i<len;i++){
        left[i]=$(".ourposts .post").eq(i).position().left;

    }
    function reSetLeft() {
        "use strict";
        for (i=0;i<len;i++){
            left[i]=$(".ourposts .post").eq(i).position().left;
    
        }
    }
    function moveToLeft(x) {
        "use strict";
        if (parseInt($(".ourposts .post").eq(len-1).position().left)==parseInt(x)) {
            $(".ourposts .post").css({"left": "-=0"});
        }else {
            $(".ourposts .post").css({"left": "-="+left2});
        }
        if ($(".pagination .left").hasClass("disable")){
            $(".pagination .left").removeClass("disable");
        }
        if (parseInt($(".ourposts .post").eq(len-1).position().left)==parseInt(x)) {
            if(!$(".pagination .right").hasClass("disable")){
                $(".pagination .right").addClass("disable");
            }
        }
    }
    function moveToRight(){
        if (parseInt($(".ourposts .post").eq(0).position().left)==0) {
            $(".ourposts .post").css({"left": "+=0"});
            }else {
            $(".ourposts .post").css({"left": "+="+left2});
        }
        if ($(".pagination .right").hasClass("disable")){
            $(".pagination .right").removeClass("disable");
        }
        if (parseInt($(".ourposts .post").eq(0).position().left)==0) {
            if(!$(".pagination .left").hasClass("disable")){
                $(".pagination .left").addClass("disable");
            }
        }
    }
  
    $(".pagination .right").click (function(){
        if ($(window).width()>767) {
            moveToLeft(left3);          
        }else if ($(window).width()<767 && $(window).width()>500) {
            moveToLeft(left2); 
        }else {
            moveToLeft(left1); 
        }
        reSetLeft();   
    });
    $(".pagination .left").click (function(){
        if ($(window).width()>767) {
            moveToRight();           
        }else if ($(window).width()<767 && $(window).width()>500) {
         moveToRight();
        }else {
            moveToRight();           
        }
        reSetLeft(); 
    });

    $(window).on ("resize",function(){
        if ($(window).width()>767) {
            for (i=0;i<len;i++){
               var l=34;
               $(".ourposts .post").eq(i).css({"left":i*34+"%"});
            }
        }
        if ($(window).width()<767 && $(window).width()>500) {
            for (i=0;i<len;i++){
               var l=51;
               $(".ourposts .post").eq(i).css({"left":l*i+"%"});
            }
        } 
        if ($(window).width()<500) {
            for (i=0;i<len;i++){
               var l=100;
               $(".ourposts .post").eq(i).css({"left":l*i+"%"});
            }
        } 
        reSetLeft(); 
        left1=0;
        left2=$(".ourposts .post").eq(1).position().left;
        left3=$(".ourposts .post").eq(2).position().left;

    });
   
    $(".projects button").click(function(){
       if ($(".projects .project").hasClass("hidden")) {
           $(".projects .hidden").removeClass("hidden").addClass("visible");
       }else if($(".projects .project").hasClass("visible")) {
        $(".projects .visible").removeClass("visible").addClass("hidden");
    }
       if ($(this).text()=="load more") {
           $(this).text("hide some project");
       }else {
           $(this).text("load more");
       }
    });
    function filterProjects(x){
        $(".projects .project").filter(".hide").removeClass("hide");
        $(".projects .project").filter(".visible").removeClass("visible").addClass("hidden");
        $(".projects .project").not(x).addClass("hide");
        $(".last-projects .hidden").filter(".hide").removeClass("hide");
        $(".last-projects .hidden").filter(x).addClass("visible").removeClass("hidden");       
        $(".projects button").hide();
    }
    $(".projects ul .web").click(function(){
        filterProjects(".web");        
    });
    $(".projects ul .photo").click(function(){
        filterProjects(".photo");
    });
    $(".projects ul .ills").click(function(){
        filterProjects(".ills");
    });
    $(".projects ul .mobile").click(function(){
        filterProjects(".mobile");
    });
    $(".projects ul .all").click(function(){
        $(".projects .project").filter(".hide").removeClass("hide");
        $(".projects .project").filter(".visible").removeClass("visible").addClass("hidden");     
        $(".projects button").show();
    })
    $(".projects ul li").click(function(){
        $(".projects ul li").filter(".active").removeClass("active");
        $(this).addClass("active");
    });
    console.log(window.innerWidth);
});
