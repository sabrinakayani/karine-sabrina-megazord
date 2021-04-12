var swiperAccueil = new Swiper('.imgPromo .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:'true'
  },
});

gsap.registerPlugin(ScrollTrigger);
//SCROLL ANIMATION GSAP
const sectionsList= document.querySelectorAll('.section');

sectionsList.forEach(section =>{
  const titre = section.querySelectorAll('.titreAccueil');
  const carte =  section.querySelectorAll('.card');
  const sectionPromo =  section.querySelector('.swiper-container');
  const sectionVideo =  section.querySelector('.youtube');

  gsap.timeline({
    scrollTrigger: {
      markers: false,
      toggleActions: "play none none reverse",
      trigger: section,
      start: 'top 50%',
    }
  })
  .fromTo(titre, {
    opacity: 0,
    fontSize: 0,
  },
  {
    fontSize: 50,
    opacity: 1,
    ease: "none",
  })

  .fromTo(carte, {
    opacity: 0,
    scale: 0.1,
  },
  {
    scale: 1,
    opacity: 1,
    ease: "none",
  })

  .fromTo(sectionPromo, {
    opacity: 0,
    scale: 0.1,
  },
  {
    scale: 1,
    opacity: 1,
    ease: "none",
  })

  .fromTo(sectionVideo, {
    opacity: 0,
    scale: 0.1,
  },
  {
    scale: 1,
    opacity: 1,
    ease: "none",
  })
});

const cassette = document.querySelector('.spriteCassette');
let timeout;

gsap.to("main", {
  scrollTrigger: {
    scrub: true,
    markers: false,
    trigger: 'main',
    onUpdate: (e) => {
      clearTimeout(timeout);
      timeOut = setTimeout(() =>{
        cassette.classList.remove('scrollHaut');
        cassette.classList.remove('scrollBas');
        cassette.classList.add('idle');
      },500)
      if (e.direction == 1){
        cassette.classList.remove('scrollHaut');
        cassette.classList.add('scrollBas');
        cassette.classList.remove('idle');
      }
      else{
        cassette.classList.add('scrollHaut');
        cassette.classList.remove('scrollBas');
        cassette.classList.remove('idle');
      }
    },
  },
});