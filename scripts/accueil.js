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

  gsap.timeline({
    scrollTrigger: {
      markers: true,
      toggleActions: "play none none reverse",
      trigger: section,
    }
  })
  .fromTo(titre, {
    opacity: 0,
    fontSize: 0,
  },
  {
    opacity: 1,
    fontSize: 50,
    duration:1,
  })
});