// function moneyCount() {
//     alert('Внимание, вы зашли на страницу с Шелли. Пока она позирует для вас, каждую секунду ваш долг перед создателями сайта увеличивается на 1.37 рубля. После закрытия страницы средства спишутся с вашей карты. Если вы не имеете таких денег, просим, чтобы вы покинули страницу.')
    
//     let money = 0
//     let isCounting = false

//     setInterval(() => {
//         if (window.scrollY !== window.innerHeight) {
//             money = parseFloat((1.37 + money).toFixed(2))
//             $('.count').text('Вы должны ' + money)
//         }
//     }, 1000)
    
    
// }


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
    // moneyCount()
});