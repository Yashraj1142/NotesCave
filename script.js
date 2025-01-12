// var crsr = document.querySelector("#cursor")
// var main = document.querySelector("#main")

// main.addEventListener("mousemove", function(dets){
//     crsr.style.left = dets.x+"px";
//     crsr.style.top = dets.y+"px";
// })

function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });

    // Sync Locomotive Scroll with ScrollTrigger
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: "transform",  // Always try to use "transform" for better performance
    });

    // Refresh Locomotive Scroll and ScrollTrigger on updates
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}


function init2() {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#footer"),
        smooth: true,
    });

    // Sync Locomotive Scroll with ScrollTrigger
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#footer", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: "transform",  // Always try to use "transform" for better performance
    });

    // Refresh Locomotive Scroll and ScrollTrigger on updates
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

function gsapAni() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section-1 h1",
            scroller: "#main",
            start: "top 30%",
            end: "top 0%",
            scrub: 3,
        }
    });

    tl.to("#section-1 h1", { x: -400 }, "anim");
    tl.to("#section-1 h2", { x: 400 }, "anim");
    tl.to("#section-2 video", { width: "90%" }, "anim");
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Disables right-click context menu
});

document.addEventListener('keydown', function (e) {
    // Disable Print Screen key (PrtSc)
    if (e.keyCode === 44) {
        e.preventDefault();
    }
});



// Initialize everything
init();
gsapAni();
init2();