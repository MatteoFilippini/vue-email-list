/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Evitare i doppioni nella lista delle mail
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
                    // assegno il dato ottenuto in una variabile
                    let emailRand = res.data.response;
                    // controllo che non sia gia presente nell array
                    while (!this.emails.includes(emailRand)) {
                        // lo inserisco nell array
                        this.emails.push(emailRand)
                    }
                })
        }
    },
    mounted() {
        // richiamo l api 10 volte
        for (let i = 0; i < 10; i++) {
            this.getRandomEmails();
        }
    }
})
