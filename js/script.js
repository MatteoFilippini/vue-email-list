/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        emails: [],
    },
    methods: {
        getRandomEmails() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    console.log(res.data.response)
                })
        }
    },
    mounted() {
        this.getRandomEmails();
    }
})
