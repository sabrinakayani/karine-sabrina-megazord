const swiper = new Swiper('.headerDisco .swiper-container', {
    effect: 'fade',
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
});

gsap.registerPlugin(ScrollTrigger);

const sectionList = document.querySelectorAll('section');

sectionList.forEach(section => {
  const image = section.querySelector('.image');
  const title = section.querySelector('.title');
  const year = section.querySelector('.year');
  
  gsap.timeline({
    scrollTrigger: {
      markers: true,
      trigger: banner,
      start: 'bottom bottom'
    }
  })
  .from(image, {
    scale:2
  })
  .from(title, {
        y:100,
        opacity:0
        })
  .from(year,{
    opacity:0
  })
});
