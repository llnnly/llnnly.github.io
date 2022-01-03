const swiper = document.querySelector('.swiper')

const mySwiper = new Swiper(swiper, {
	loop: true,
	slidesPerView: 1,
	autoplay: {
    	delay: 1000,
 	},
});