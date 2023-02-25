// Change Bg nav while scrolldown
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('bg-white'); else nav.classList.remove('bg-white')
}
window.addEventListener('scroll', scrollHeader)


// Change Active class on navbar
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 400;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.add('nav-active')
        }else{
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.remove('nav-active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// UVP Swipper
var swiper = new Swiper(".uvpSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// UVP Swipper
var swiper = new Swiper(".testiSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Template Swipper
var swiper = new Swiper(".templateSwiper", {
   
    spaceBetween: 100,
    breakpoints:{
      640: {
        slidesPerView: 1,
        spaceBetween: 50, 
      },
      776: {
        slidesPerView: 2,
      }
    },
    // loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




// ========================= Counter Animation ======================
const counters = document.querySelectorAll('.counter');
const speed = 1000; // The lower the slower
const counterSection = window.document.getElementById('counterSection')

if (counterSection) {
 
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
  
      // Lower inc to slow and higher to slow
      const inc = target / speed;
  
      // console.log(inc);
      // console.log(count);
  
      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = Math.ceil(count + inc);
        // Call function every ms
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
  
    updateCount();
  });
}

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

// window.requestAnimationFrame(counterSection);

sr.reveal('.hero-header', {delay: 400})
sr.reveal('.about-title',{delay: 400})
sr.reveal('.about-description',{delay: 500, origin: 'right'})
sr.reveal('.aboutus-data',{delay: 400})
sr.reveal('.aboutus-img',{delay: 50, origin: 'top'})
sr.reveal('.testimoni-title',{delay: 200, origin: 'top'})
sr.reveal('.testiSwiper',{delay: 400, origin: 'left'})
sr.reveal('.template-header',{delay: 200, origin: 'top'})
sr.reveal('.templateSwiper',{delay: 400, origin: 'left'})
sr.reveal('.team-title',{delay: 200, origin: 'top'})
sr.reveal('.card-team',{delay: 200, origin: 'left'})
sr.reveal('.team-foto',{delay: 700, origin: 'left'})