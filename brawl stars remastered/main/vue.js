const App = {
    data() {
        return {
            menuClass: 'menuToLeft',
            btnMenuClass: 'rotate-360',
            headerClass: '',
        }
    },
    methods: {
        toggleMenu() {
            console.log('d')
            this.menuClass = this.menuClass === 'menuToRight' ? 'menuToLeft' : 'menuToRight'
            this.btnMenuClass = this.btnMenuClass === 'rotate360' ? 'rotate-360' : 'rotate360'
        },
        startAnimation() {
            this.headerClass = 'start'
        }
    },
    beforeMount(){
        this.startAnimation()
     },
}
Vue.createApp(App).mount('body')