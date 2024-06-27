var tl0 =gsap.timeline({
    delay:.5,
    duration:1
});
tl0
.from(".textarea p",{
    opacity: 0
})
.from(".textarea a",{
    opacity: 0
})
.from(".textarea h2",{
    opacity: 0
})
.from(".textarea h1",{
    opacity: 0
})

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
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



gsap.to(".section-2 img", {
    top: "-100%",
    duration:10
}, 'clod')
gsap.to(".overlay-1", {
    opacity: 0,
    duration: 2,
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
        duration: 5
    }, 'clod')
    gsap.to(".overlay-1", {
        opacity: 0,
        duration: 1,
        delay: 0
    }, 'clod')
    gsap.to(".mainHeading", {
        fontSize: "15vw",
        duration: 5,
    }, 'clod')

});



