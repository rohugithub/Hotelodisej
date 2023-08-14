gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  mutiplier:2
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



gsap.from("#page1 img",{
  
  scale:.4,
  delay:.6,
  borderRadius:"50px",
  duration:2,
})

var tl1 =gsap.timeline()


tl1.from("#nav-prt2 h3",{
  
  y:-50,
  duration:.8,
  opacity:0,
  delay:1
})
tl1.from("#nav h2",{
  y:-50,
  duration:.8,
  opacity:0,
  delay:1
},"ab")

tl1.from("#nav-prt3 button",{
  y:-50,
  duration:.8,
  opacity:0,
  delay:1

},"ab")

tl1.from("#nav-prt3 a",{
  y:-50,
  duration:.8,
  opacity:0,
  delay:1
},"ab")


let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page1',
      scroller:'#main',
      start:'top 10%',
      end:"bottom 10%",
      scrub:2,
      //markers:true,
      // smooth:true
      
  },

})
tl2.from("#nav-prt2 h3",{
  
  fontSize:"65px",
  duration:1.9,
   delay:.1,
   

},"anim")

tl2.from("#nav-prt2>h3>span",{
  
  fontSize:"22px",
  duration:1.9,
   

},"anim")

gsap.from("#nav",{
  scrollTrigger:{
    trigger:"#nav",
    scroller:"#main",
    start:"top 50%",

    scrub:2
  },
  
  opacity:1,
  duration:1
})



let clutter =""
function split(){
   
    document.querySelector("#page2>h2").textContent.split("").forEach(function(item){
        clutter+= `<span>${item}</span>`
  
    })
    document.querySelector("#page2>h2").innerHTML=clutter;
  
  }
  split();
  

  gsap.to("#page2>h2>span",{
    scrollTrigger:{
      trigger:'#page2>h2>span',
      scroller:'#main',
      start:'bottom 40%',
      end:' -40% bottom',
      scrub:2.15,
      //markers:true,
      
    },
    stagger:.1,
    opacity:1,
    delay:.5,
    color:"#F7F7EE"
  })


  



  let clutter1 =""
function split1(){
   
    document.querySelector("#page3>#text>h2").textContent.split("").forEach(function(item){
        clutter1+= `<span>${item}</span>`
  
    })
    document.querySelector("#page3>#text>h2").innerHTML=clutter1;
  
  }
  split1();
  

  gsap.to("#page3>#text>h2>span",{
    scrollTrigger:{
      trigger:'#page3>#text>h2>span',
      scroller:'#main',
      start:'top 50%',
      end:' 90% bottom',
      scrub:2.15,
      //markers:true,
    },
    stagger:.1,
    opacity:1,
    delay:.5,
    color:"#444C34"
  })


  var tl=gsap.timeline({
    scrollTrigger:{
      trigger:"#image-container",
      scroller:"#main",
      //markers:true,
      start:'top 40%',
      end:' 40% bottom',
      scrub:5.5,
      smooth:true
    }
  })

  tl.from("#image-container p",{
    y:20,
    opacity:0,
    
  })
  tl.from("#image-container h2",{
    y:50,
    opacity:0,
    

  })

  tl.from("#image-container>#part1>#sec2",{
    y:80,
    opacity:0,
    
  })
  tl.from("#image-container>#part2>#sec3",{
    y:20,
    opacity:0,
  
    
  })

  tl.from("#image-container>#part2>#sec4",{
    y:20,
    opacity:0,
  
    
  })

  
 
  gsap.from("#page1>#nav",{
    scrollTrigger:{
      trigger:'#page1>#nav',
      scroller:'#main',
      start:'top 2%',
      
      scrub:2.15,
      //markers:true,
      
    },

    y:-800,
    opacity:0

  })





  gsap.to("#svg-contain",{
    scrollTrigger:{
      trigger:"#svg-contain .u-icon--separator-main",
      scroller:"#main",
      start:"top 40%",
      end:"top 50%",
      scrub:3,
      smooth:true,
      //markers:true
    },
    x:130,
    duration:1.5,

  })

  gsap.to("#svg-contain",{
    scrollTrigger:{
      trigger:"#svg-contain .u-icon--separator-secondary ",
      scroller:"#main",
      start:"top 40%",
      end:"top 50%",
      scrub:3,
      //markers:true,
      
    },
    x:100,
    duration:1.5,
  })