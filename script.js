


function reavelSpan(){
    document.querySelectorAll(".reveal")
  .forEach(function(elem){
    var parent = document.createElement("span")
    var child = document.createElement("span")

    parent.classList.add("parent")
    child.classList.add("child")

    child.innerHTML = elem.innerHTML
    parent.appendChild(child)

    elem.innerHTML=""
    elem.appendChild(parent)
  })
}

reavelSpan();
function loader(){
  var tl = gsap.timeline()

tl

   .from(".child span",{
    opacity:0,
    stagger:.3,
    x:"100%",
    duration:1,
    delay:-0.3,
    ease:Expo.easeInOut
   })


  .to(".parent .child",{
    y:"-100%",
    duration:1,
    
    ease:Expo.easeInOut
  })

  .to(".frist",{
    height:0,
    duration:2,
    ease:Expo.easeInOut
  })
  .to(".second",{
    height:"100%",
    duration:2,
    delay:-2,
    ease:Expo.easeInOut
  })
  .to(".third",{
    height:"100%",
    duration:2,
    delay:-1.6,
    ease:Expo.easeInOut
  })
  .to(".second",{
    display:"none"
  })
  .to(".third",{
    opacity:0
  })
  .to(".third",{
    display:"none"
  })
  .to(".loader",{
    display:"none",
    delay:-1
  })
  .from(".uone h1, .utwo h5, .uthree h5 ,.ltwo h1,.lone svg, .heading h1",{
    opacity:0,
    // stagger:.3,
    y:"100%",
    duration:1,
    delay:-0.9,
    ease:Expo.easeInOut
   })
  
}
loader();
// var main = document.querySelector(".main")
// var crs =document.querySelector(".cur")
// main.addEventListener("mousemove",function(dets){
//     crs.style.left= dets.x + "px"                                       //It only Works If cursor position is absolute
//     crs.style.top = dets.y + "px"
// })


function cursor(){
  var page6 = document.querySelector(".main")
  var cur2 = document.querySelector(".cur")

 page6.addEventListener("mousemove",function(dets){
  
gsap.to(cur2,{
    x:dets.x,
    y:dets.y,
   
  })
 })

}
cursor()
function fixedImage(){
  var elemC = document.querySelector(".elem-box")
  var fixed = document.querySelector(".fixed-image")
 
  elemC.addEventListener("mouseenter", function () {
   fixed.style.display = "block"
 })
 elemC.addEventListener("mouseleave", function () {
   fixed.style.display = "none"
 })
 
 var elems = document.querySelectorAll(".elem")
 elems.forEach(function (e) {
   e.addEventListener("mouseenter", function () {
       var image = e.getAttribute("data-image")
       fixed.style.backgroundImage = `url(${image})`
   })
 })
}
fixedImage()
function smooth(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector(".main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
smooth()
