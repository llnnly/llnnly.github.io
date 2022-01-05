const App = {
    data() {
        return {
            menuClass: 'menuToLeft',
            btnMenuClass: 'rotate-360',
            onlyMenuClass: '',
            headerClass: '',
            winWidth: window.innerWidth,
        }
    },
    methods: {
        toggleMenu() {
            if (this.winWidth > 1500) {
                this.menuClass = this.menuClass === 'menuToRight' ? 'menuToLeft' : 'menuToRight'
                this.btnMenuClass = this.btnMenuClass === 'rotate360' ? 'rotate-360' : 'rotate360'
            } else {

                this.onlyMenuClass = this.onlyMenuClass === 'menuShowed' ? 'menuHidden' : 'menuShowed'
                this.btnMenuClass = this.btnMenuClass === 'rotate360' ? 'rotate-360' : 'rotate360'
            }
            
        },
        startAnimation() {
            this.headerClass = 'start'
        },
        getMenuClass() {
            if (this.winWidth < 1500) {
                this.onlyMenuClass = 'menuHidden'
            }
        }
    },
    beforeMount(){
        this.startAnimation()
        this.getMenuClass()
     },
}
Vue.createApp(App).mount('body')