/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        emails: [],
        isFull: undefined,
    },
    methods: {
        getRandomEmails() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    console.log(res.data.response);
                    this.emails.push(res.data.response)
                })
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.getRandomEmails();
        }
    }
})
