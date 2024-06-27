var slider = document.querySelector(".slider")

var open = document.querySelector("#mobile-nav-open")

var close = document.querySelector("#mobile-nav-close")

console.log(open)

open.addEventListener("click",()=>{
    close.style.display="initial"
    open.style.display="none"
    slider.style.left="0%"
})

close.addEventListener("click",()=>{
    open.style.display="initial"
    close.style.display="none"
    slider.style.left="-100%"
});




// Cloud Animation
gsap.to(".section-2 img", {
    top: "-100%",
    duration: 10
}, 'clod')
gsap.to(".overlay-1", {
    opacity: 0,
    duration: 5,
    delay: 2
}, 'clod')
gsap.to(".mainHeading", {
    fontSize: "10vw",
    duration: 5,
}, 'clod')



// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(max-width: 799px)", () => {

    // this setup code only runs when viewport is at least 800px wide
    gsap.to(".section-2 img", {
        top: "-100%",
        duration: 10
    }, 'clod')
    gsap.to(".overlay-1", {
        opacity: 0,
        duration: 5,
        delay: 2
    }, 'clod')
    gsap.to(".mainHeading", {
        fontSize: "15vw",
        duration: 5,
    }, 'clod')

});

//Testimonial Slider

$(document).ready(function() {
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        draggable: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            }
        ]
    });
});


$(document).ready(function() {
  $('.testimonial-slider').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 600,
      draggable: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
          }
      ]
  });
});





//


var tl1 = gsap.timeline({scrollTrigger:{
  trigger:"#main",
 //markers:true,
  start:"50% 50%",
  end:"150% 50%",
  scrub:2,
  pin:true
}});
tl1
.to("#center",{
 height: "100vh",
},'a')
.to("#top",{
  top: "-50%",
},'a')
.to("#bottom",{
  bottom: "-50%",
},'a')
.to("#top-h1",{
  top: "60%"
},'a')
.to("#bottom-h1",{
  bottom: "-30%"
},'a')
.to("#center-h1",{
 top: "-30%"
},'a')
.to(".content",{
 delay: -0.2,
 marginTop: "0%"
})

// product slider


var tl = gsap.timeline({scrollTrigger:{
  trigger:"#main-1",
 // markers:false,
  start:"50% 50%",
  end:"150% 50%",
  scrub:1.5,
  pin:true,
}});
tl
.to("#lineone",{
  marginTop: "-120vh",
},'baba')
.to("#linetwo",{
  marginTop: "20vh",
},'baba')

$('.textarea h1').textillate({initialDelay: 200, in: { effect: 'fadeInUp',delayScale:1, delay: 40 } });

//
