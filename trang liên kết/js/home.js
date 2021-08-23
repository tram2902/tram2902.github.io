// OwlCarousel

$('.feature__food .owl-carousel').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5500,
    loop: true,
    items: 4,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        730: {
            items: 3
        },
        1000: {
            items: 4
        },
    }
});

// amout 

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

const price = document.querySelector('.price');

plus.addEventListener('click', () => {
    const amout = document.querySelector('.input_amout');
    amout.value++;
})

minus.addEventListener('click', () => {
    const amout = document.querySelector('.input_amout');
    if (amout.value <= 1) {
        amout.value = 1;
    } else {
        amout.value--;
    }
})
//feature

var container = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("feature__food");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  container++;
  if (container > x.length) {container= 1}    
  x[container-1].style.display = "block";  
  setTimeout(carousel, 2000);}
