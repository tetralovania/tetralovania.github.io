let tl = new gsap.timeline();

tl.from(".overlay", {backgroundColor: "#241c006e", duration: .5, ease:"none"});
tl.from("#header", {y: -100, duration: .5, ease: "expo.out"});
tl.from(".title", {y: -100, duration: .3, ease: "expo.out", stagger:.05, delay: -.4});
tl.from(".menu-item", {y: -100, duration: .3, ease: "expo.out", stagger:.05, delay: -.3});
tl.from(".page-content-wrapper", {opacity: 0, duration: .3});
tl.from(".page-content", {opacity: 0, duration: .25, delay: -.25});