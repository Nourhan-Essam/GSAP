gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } });

tl.from(".title", { 
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", 
    y: 100, 
    rotate: 5,
    opacity: 0
})
.from(".description", { 
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    y: 30, 
    opacity: 0 
}, "-=1") 
.from(".cta-button", { 
    scale: 0, 
    opacity: 0, 
    ease: "back.out(2)" 
}, "-=0.8");



gsap.from(".card", {
    scrollTrigger: {
        trigger: ".features",
        start: "top 90%", 
        end: "bottom 20%",
   
toggleActions: "play none none reverse", 
    },
    opacity: 0,
    scale: 0.5,
    y: 200,
    rotateX: -50, 
    stagger: 0.5, 
    transformPerspective: 1000
});



const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        gsap.to(card, {
            rotationY: x * 30, 
            rotationX: -y * 30,
            scale: 1.1,
            boxShadow: "0 20px 40px rgba(0,255,136,0.2)", 
            ease: "power2.out",
            duration: 0.4
        });
        

        gsap.to(card.querySelector('.icon'), {
            x: x * 40,
            y: y * 40,
            duration: 0.4
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
            rotationY: 0, 
            rotationX: 0, 
            scale: 1, 
            boxShadow: "none",
            duration: 0.7,
            ease: "elastic.out(1, 0.3)" 
        });
        
        gsap.to(card.querySelector('.icon'), { x: 0, y: 0 });
    });
});