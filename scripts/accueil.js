var swiperAccueil = new Swiper('.imgPromo .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
       type: 'bullets',
    clickable:'true'
  },
});

gsap.registerPlugin(ScrollTrigger);


//SCROLL ANIMATION GSAP
const sectionsList = document.querySelectorAll('.section');

sectionsList.forEach(section =>{
  const titre = document.querySelectorAll('.titreSection');
  const carte = document.querySelectorAll('.card');
  const sectionMembres = document.querySelectorAll('.membres');
  const sectionPromo = document.querySelector('.imgPromo');
  const sectionVideo = document.querySelector('.video');

  gsap.timeline({
    scrollTrigger: {
      markers: true,
      toggleActions: "play none none reverse",
      trigger: section,
    }
  })
  .fromTo(titre, {
    opacity: 0,
    x: -200,
  },
  {
    x:0,
    opacity: 1,
    duration: 1,
    ease: "none",
  })
  .fromTo(carte, {
    opacity: 0,
    scale:0.1,
    y:"+=100"
  },
  {
    y:0,
    scale:1,
    opacity: 1,
    duration: 1,
    ease: "none",
  })
  .fromTo(sectionPromo, {
    opacity: 0,
    scale:0.1,
  
  },
  {
    y:0,
    scale:1,
    opacity: 1,
    duration: 1,
    ease: "none",
  })
  .fromTo(sectionVideo, {
    opacity: 0,
    scale:0.1,
  
  },
  {
    y:0,
    scale:1,
    opacity: 1,
    duration: 1,
    ease: "none",
  })
});