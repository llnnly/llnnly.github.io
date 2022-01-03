Vue.directive('scroll', {
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f)
        }
      }
      window.addEventListener('scroll', f)
    }
  })


const App = {
    data() {
        return {
            regform: 'none',
            isRegistered: false
        }
    },
    methods: {
        changeRegForm(display) {
            this.regform = display
        },
        onScroll(evt, el) {
            console.log(evt, el)
        }
    }
}

const app = Vue.createApp(App)
app.mount('#app')