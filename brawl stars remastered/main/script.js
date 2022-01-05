//toggle menu
const btn_tog_menu = $('.img')
const tog_menu = $('.menu')

let count = 0

btn_tog_menu.click(() => {
    if (count == 0) {
        btn_tog_menu.removeClass('rotate-360')
        tog_menu.animate({right: "0"}, 500)
        btn_tog_menu.animate({right: "20vw"}, 500)
        btn_tog_menu.addClass('rotate360')
        
        count = 1
    } else {
        btn_tog_menu.removeClass('rotate360')
        tog_menu.animate({right: "-20vw"}, 500)
        btn_tog_menu.animate({right: "10px"}, 500)
        btn_tog_menu.addClass('rotate-360')
        count = 0
    }
})


//animate start screen
const start_screen = $('.start-logo')[0]
const start_title = $('.start-logo h1')

function animate() {
    start_title.animate({opacity: "1"}, {duration: 2000})
    .delay(3000)
    start_title.animate({}, () => {
        start_screen.animate({opacity: "0"}, 2000)
    })
    // .queue(() => {
    //     start_screen.animate({opacity: "0"})
    // })


    // start_screen.queue(() => {
        
    // })
    
    // setTimeout(() => {
    //     start_screen.animate({opacity: "0"}, {
    //         duration: 2000,
    //         complete: () => {
    //             console.log('2')
    //             start_screen.addClass("hide-start-logo")
    //         }
    //     })
    // }, 3000)
}
animate()

