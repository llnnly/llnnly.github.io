const App = {
    data() {
        return {
            result: '0',
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            operations: ['+', '-', '*', '/'],
            phrases: [
                'Ты даун ты че ввел?',
                'Проще позвонить чем у кого-то занимать',
                'сам соси.',
                'осуждаю'
            ]
        }
    },
    methods: {
        input(char) {
            if ((this.result === '0') || (this.phrases.includes(this.result))) {
                this.result = char.toString()
            } else {
                this.result += char
            }
           
        },
        backspace() {
            this.result = this.result.slice(0, -1)
        },
        reset() {
            this.result = '0'
        },
        toEqualize() {
            try {
                this.result = eval(this.result).toString()
            } catch(e) {
                if ((e.name === 'ReferenceError') || (e.name === 'SyntaxError')) {
                    this.result = 'Ты даун ты че ввел?'
                } else {
                    console.log(e)
                }
            }

            if (this.result === '88005553535') {
                this.result = this.phrases[1]
            } else if (this.result === '300') {
                this.result = this.phrases[2]
            } else if (this.result === '1488') {
                this.result = this.phrases[3]
            }
            
        }
    }
}

const app = Vue.createApp(App)
app.mount('#app')