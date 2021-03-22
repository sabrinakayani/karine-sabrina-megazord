var swiperAccueil = new Swiper('.imgPromo .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
       type: 'bullets',
    clickable:'true'
  },
});

gsap.registerPlugin(ScrollTrigger);


const sectionsList = document.querySelectorAll('.section');

sectionsList.forEach(section =>{
  const titres = document.querySelectorAll('.titreSection');

  gsap.timeline({
    scrollTrigger:{
      markers: true,
      toggleActions: "play none none reverse",
      trigger: section,
    }
  })
  .fromTo(titres, {
    opacity:0,
  },
  {
    opacity:1,
  })
});