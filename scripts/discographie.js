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
  const imageAlbum = section.querySelector('.imgAlbum');
  const txtAlbum = section.querySelector('.txtAlbum');
  const imageAlbumPair = section.querySelector('.imgAlbumPair');
  const txtAlbumPair = section.querySelector('.txtAlbumPair');
  const titleYoutube = section.querySelector('.titreSection');
  const youtube = section.querySelector('.youtube');

  gsap.timeline({
    scrollTrigger: {
      start: 'center 80%',
      toggleActions: "play none none reverse",
      trigger: section,
    }
  })
    .from(imageAlbum, {
      x: '100vw',
      duration: 1
    }, "0")
    .from(txtAlbum, {
      x: '-100vw',
      duration: 1
    }, "0")
    .from(imageAlbumPair, {
      x: '-100vw',
      duration: 1
    }, "0")
    .from(txtAlbumPair, {
      x: '100vw',
      duration: 1
    }, "0")
    .from(titleYoutube, {
      opacity: 0,
      fontSize: 0,
    }, "0")
    .from(youtube, {
      opacity: 0,
      scale: 0,
    }, "0")
});


const polaroid = document.querySelector('.spriteDiscographie');
let timeOut;

gsap.to("main", {
  scrollTrigger: {
    trigger: 'main',
    onUpdate: (e) => {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        polaroid.classList.remove('scroll-down');
        polaroid.classList.remove('scroll-up');
        polaroid.classList.add('attente');
      }, 500)
      if (e.direction == 1) {
        polaroid.classList.add('scroll-down');
        polaroid.classList.remove('scroll-up');
        polaroid.classList.remove('attente');
      }
      else {
        polaroid.classList.remove('scroll-down');
        polaroid.classList.add('scroll-up');
        polaroid.classList.remove('attente');
      }
    },
  },
});
