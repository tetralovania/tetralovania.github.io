let tl = new gsap.timeline();

tl.from(".overlay", {backgroundColor: "#241c006e", duration: .5, ease:"none"});
tl.from(".header", {y: -100, duration: .5, ease: "expo.out"});
tl.from(".title", {y: -100, duration: .3, ease: "expo.out", stagger:.05, delay: -.4});
tl.from(".menu-item", {y: -100, duration: .3, ease: "expo.out", stagger:.05, delay: -.3});