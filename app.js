const App = {
    data() {
        return {
            inputValue: '',
            notes: [],
        }
    },
    methods: {
        addNote() {
           if (this.inputValue !== '') {
               this.notes.push(this.inputValue)
               this.inputValue = '' 
           }
        },
        removeNote(i) {
            this.notes.splice(i, 1)
        }

    }
}

Vue.createApp(App).mount('#app')
