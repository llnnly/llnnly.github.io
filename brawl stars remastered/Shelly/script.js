$(document).ready(function() {
    const container = '.info .swiper .swiper-container .swiper-slide .stat'
    $.each($(container), (ind, elem) => {
        for (let i = 0; i < parseInt(elem.classList[1][5]); i++) {
            let image = document.createElement("img")
            image.src = 'assets/like.png'
            if ($(container).width()/5 > $(container).height()) {
                image.style.width = $(container).height() + 'px'
                image.style.height = $(container).height() + 'px'
            } else {
                image.style.width = $(container).width()/5 + 'px'
                image.style.height = $(container).width()/5 + 'px'
            }
            image.style.padding = '0 10px'
            elem.appendChild(image)
        }
        
    })
});