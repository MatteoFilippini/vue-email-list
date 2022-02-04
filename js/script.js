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
        emails: ['pippo', 'pluto'],
    }
})
