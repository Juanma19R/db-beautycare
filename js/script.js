//iniciar scrollspy
$('body').scrollspy({target: '#menu-navegacion'});

//Scroll suavizado
$('#menu-navegacion a').on('click', function(event){
    if(this.hash != ""){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
})

const swiper = new Swiper('.swiper-container', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay:
    {
        delay: 3000,
    },
    loop: true,

    //Parametros
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    }
  }); 