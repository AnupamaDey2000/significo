function homepageAnimation(){
    gsap.set(".slidesm",{scale:5})

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger:".home",
            start:"top top",
            end:"bottom bottom",
        
           scrub:2
        }
    })
    
    tl
    .to(".vdodiv",{
        '--clip':"0%",
        ease:Power2
    },'a')
    .to(".slidesm",{
        scale:1,
        ease:Power2
    },'a')
    
    .to(".rgt",{
        xPercent:-30,
        stagger:0.1,
        ease:Power2
      
    },'a')
    
    .to(".lft",{
        xPercent:30,
    stagger:0.1,
        ease:Power4
    },'a')
}
 homepageAnimation();


 function realpageAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
   
            scrub:2
        
        },
        xPercent:-200,
        ease:Power4
     })
    
 }
 realpageAnimation();

 function teampageAnimation(){
    document.querySelectorAll(".listelem")
    .forEach(function(el){
       el.addEventListener("mousemove",function(dets){
         
          gsap.to( this.querySelector(".picture"),{
           opacity:1,
           ease:Power4,
           x:   gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX),
           duration:0.5
          })
       })
       el.addEventListener("mouseleave",function(dets){
           gsap.to( this.querySelector(".picture"),{
               opacity:0,
               ease:Power4,
               duration:0.5
              })
       })
    })
 }
 teampageAnimation();




 function parapageAnimation(){
    var clutter="";
 document.querySelector(".textpara")
 .textContent.split("")
 .forEach(function(e){
    if(e ==="")clutter +=`<span>&nbsp;</span>`
    clutter +=`<span >${e}</span>`
 })
    document.querySelector(".textpara").innerHTML =clutter;

    gsap.set(".textpara span",{opacity:.1})
   
    gsap.to(".textpara span",{
       scrollTrigger:{
           trigger:".para",
           start:"top 40%",
   
           end:"bottom 90%",
           scrub:.3
       },
      opacity:1,
      stagger:.03,
   
      ease:Power4
    })
 }
 parapageAnimation();

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
loco();


function capsulesAnimation(){
  gsap.to(".capsule:nth-child(2)",{
    scrollTrigger:{
        trigger:".capsules",
        start:"top 75%",

        end:"bottom bottom",
        scrub:1
    },
    y:0,
    ease:Power4
  })
}
capsulesAnimation();

function bgColour(){
    document.querySelectorAll(".section")
    .forEach(function(e){
       ScrollTrigger.create({
        trigger:e,
        start:"top 50%",
        end: "bottom 50%",
    
        onEnter:function(){
    
            document.body.setAttribute("theme",e.dataset.color)
     
        },
        onEnterBack:function(){
            document.body.setAttribute("theme",e.dataset.color)
           
     
        }
       })
    })
    
}
bgColour();
