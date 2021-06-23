const App = {
    data() {
        return{
            counter: 0,
            inputValue: '',
            counterTitle: 'Count:',
            todoPlaceHolder: 'Enter your task...',
            todos:['Do my first Vue.js App', 'Git push that App']
        }
    },
    methods:{
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        },
        addNewTodo() {
            if (this.inputValue.split(' ') != ''){
                this.todos.push(this.inputValue)
                this.inputValue = ''
            }
        },
        inputChange(event) {
            this.inputValue = event.target.value
        },
        deleteTodo(idx) {
            this.todos.splice(idx, 1)
        }
    }
}

Vue.createApp(App).mount('#app')