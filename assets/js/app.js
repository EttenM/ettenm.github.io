gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


ScrollTrigger.normalizeScroll(true)

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 1.5,
  effects: true,
  scrub: true
});


      const smoothLinks = document.querySelectorAll('a[href^="#"]');
        for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        let id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
                     behavior: 'smooth',
                    block: 'start'
        
          });
            });
        };
          
// const smoothLinks = document.querySelectorAll('a[href^="#"]');
// for (let smoothLink of smoothLinks) {
//     smoothLink.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = smoothLink.getAttribute('href');

//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//        
//     });
// };

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
      document.querySelector(".header-inner").classList.toggle("open");
      document.querySelector(".intro-wrapper").classList.toggle("open");

  })
  })
  
  window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.up_btn');
    scroll.classList.toggle("active", window.scrollY>500)
  })

    document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".up_btn").addEventListener("click", function() {
      smoother.scrollTop(0, true);

  })
  })

  

