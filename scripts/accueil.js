var swiperAccueil = new Swiper('.imgPromo .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:'true'
  },
});

gsap.registerPlugin(ScrollTrigger);
//SCROLL ANIMATION GSAP
const bannersList= document.querySelectorAll('.bannerAccueil');

bannersList.forEach(banner =>{
  const titre = banner.querySelectorAll('.titreSection');
  const carte =  banner.querySelectorAll('.card');
  const sectionPromo =  banner.querySelector('.swiper-container');
  const sectionVideo =  banner.querySelector('.youtube');

  gsap.timeline({
    scrollTrigger: {
      markers: true,
      toggleActions: "play none none reverse",
      trigger: banner,
    }
  })
  .fromTo(titre, {
    opacity: 0,
    fontSize: 0,
  },
  {
    fontSize: 50,
    opacity: 1,
    duration: 1,
    ease: "none",
  })

  .fromTo(carte, {
    opacity: 0,
    scale: 0.1,
    y: "+=100"
  },
  {
    y:0,
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "none",
  })

  .fromTo(sectionPromo, {
    opacity: 0,
    scale: 0.1,
    y: "+=100"
  },
  {
    y:0,
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "none",
  })

  .fromTo(sectionVideo, {
    opacity: 0,
    scale: 0.1,
    y: "+=100"
  },
  {
    y: 0,
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "none",
  })
});