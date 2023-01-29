const $ = (selector) => document.querySelector(selector);

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, "1000");


$('.btn_menu').addEventListener('click', () => {
  $('.menupage').classList.add('on');
});
$('.closebtn').addEventListener('click', () => {
  $('.menupage').classList.remove('on');
});

let menulistLi = $('.menulist').querySelectorAll('li');
menulistLi.forEach((li,index) => {
  li.addEventListener('click', () => {
    $('.menupage').classList.remove('on');
  });
});

$('#logo').addEventListener('click', () => {
  window.scrollTo(0,0);
});

$('.home').addEventListener('click', () => {
  window.scrollTo(0,0);
});
$('.timeline').addEventListener('click', () => {
  window.scrollTo(0,5462);
});
// inspirations 스크롤
$('.inspirations').addEventListener('click', () => {
  window.scrollTo(0,10000);
});

$('.menuladygaga').addEventListener('click', () => {
  window.scrollTo(0,18000);
});

$('.menulennykravitz').addEventListener('click', () => {
  window.scrollTo(0,22500);
});

$('.contactus').addEventListener('click', () => {
  window.scrollTo(0,33000);
});

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);


  if (scrollTop > 1900) {
    $(".title03_01").classList.add('on');
  } else {
    $(".title03_01").classList.remove('on');
  }

  if (scrollTop > 2500) {
    $(".title03_02").classList.add('on');
  } else {
    $(".title03_02").classList.remove('on');
  }

  if (scrollTop > 3800) {
    $(".words").classList.add('on');
  } else {
    $(".words").classList.remove('on');
  }

  // if (scrollTop > 15180) {
  //   $(".inspiration").classList.add('on');
  // } else {
  //   $(".inspiration").classList.remove('on');
  // }

});

  gsap.to('.picture', {
          
    width: 1920,
    y: 100,
    x: 100,
      scrollTrigger: {
      trigger: "#section01",
      start: "top top",
      end: '+=1100',
      scrub: true,
      }
  });

// section04
  ScrollTrigger.create({
    trigger: ".mainimg04",
    pin: true,
    start: "-200 top",
    end: "+=1200"
  });

  gsap.to('.mainimg04 img', {
          
    scale: .7,
      scrollTrigger: {
      trigger: "#section04",
      start: "top top",
      end: '+=1200',
      scrub: true,
      }
  });

// section05
  gsap.to('.fix05', {
          
    scrollTrigger: {
      trigger: ".trigger05",
      start: "top top",
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      scrub: true,
    }
  });

  gsap.to('.h05_frame', {
        
    width: 3000,
    height: 3000,
      scrollTrigger: {
      trigger: "#section05",
      start: "top top",
      end: '+=2000',
      scrub: true,
      }
  });

  gsap.to('.h05_circle', {
        
    rotation: -200,
      scrollTrigger: {
      trigger: "#section05",
      start: "top top",
      end: '+=2000',
      scrub: true,
      }
  });

  gsap.to('.h05_circle', {
        
    opacity: 0,
      scrollTrigger: {
      trigger: "#section05",
      start: "1200 top",
      end: '+=800',
      scrub: true,
      }
  });


    gsap.to('.horizontal05', {
        
    x: -28000,
      scrollTrigger: {
      trigger: "#section05",
      start: "2000 top",
      end: 'bottom bottom',
      scrub: true,
      }
  });


  let inspiDiv = $('.h05_inspiration').querySelectorAll('div');
  gsap.to(inspiDiv[0], {
        
    y: 0,
      scrollTrigger: {
      trigger: "#section05",
      start: "5100 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to(inspiDiv[1], {
        
    y: 0,
      scrollTrigger: {
      trigger: "#section05",
      start: "5200 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to(inspiDiv[2], {
        
    y: 0,
      scrollTrigger: {
      trigger: "#section05",
      start: "5300 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to(inspiDiv[3], {
        
    y: 0,
      scrollTrigger: {
      trigger: "#section05",
      start: "5300 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to(inspiDiv[4], {
        
    y: 0,
      scrollTrigger: {
      trigger: "#section05",
      start: "5300 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to(inspiDiv[5], {
        
    y: 0,
      scrollTrigger: {
      trigger: "#section05",
      start: "5400 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to(inspiDiv[6], {
        
    y: 0,
      scrollTrigger: {
      trigger: "#section05",
      start: "5600 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to(inspiDiv[7], {
        
    y: 0,
      scrollTrigger: {
      trigger: "#section05",
      start: "5900 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to(inspiDiv[8], {
        
    y: 0,
      scrollTrigger: {
      trigger: "#section05",
      start: "6000 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to(inspiDiv[9], {
        
    y: 0,
      scrollTrigger: {
      trigger: "#section05",
      start: "6000 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to(inspiDiv[10], {
        
    y: 0,
      scrollTrigger: {
      trigger: "#section05",
      start: "6300 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to('.page2', {
        
    width: 3000,
      scrollTrigger: {
      trigger: "#section05",
      start: "6800 top",
      end: '+=2000',
      scrub: true,
      }
  });

  gsap.to('.ladytitle_line01 img', {
        
    x: 0,
    stagger: 1,
      scrollTrigger: {
      trigger: "#section05",
      start: "10000 top",
      end: '+=300',
      scrub: true,
      }
  });

  gsap.to('.ladytitle_line02 img', {
        
    x: 0,
    stagger: 1,
      scrollTrigger: {
      trigger: "#section05",
      start: "10000 top",
      end: '+=300',
      scrub: true,
      }
  });

  gsap.to('.artist img', {
        
    x: 0,
    stagger: 1,
      scrollTrigger: {
      trigger: "#section05",
      start: "11500 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to('.lennytitle_line01 img', {
        
    x: 0,
    stagger: 1,
      scrollTrigger: {
      trigger: "#section05",
      start: "15000 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to('.lennytitle_line02 img', {
        
    x: 0,
    stagger: 1,
      scrollTrigger: {
      trigger: "#section05",
      start: "15000 top",
      end: '+=200',
      scrub: true,
      }
  });

  gsap.to('.artistlenny img', {
        
    x: 0,
    stagger: 1,
      scrollTrigger: {
      trigger: "#section05",
      start: "17000 top",
      end: '+=200',
      scrub: true,
      }
  });