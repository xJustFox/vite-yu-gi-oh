<script>
import { store } from '../store';

export default {
    name: 'AppTotCards',

    data() {
        return {
            store,
        }
    },
    computed: {
        getTotCards() {
            return store.cardList.length
        },
        getTotCardsSearched() {
            return store.searchCardList.length
        }
    }
}
</script>

<template lang="">
    <div class="text-white fs-4">
        Ci sono 
        <span v-if="store.flagSearch" >{{getTotCards}}</span> 
        <span v-else >{{getTotCardsSearched}}</span> 
        carte
    </div>
</template>

<style lang="scss" scoped>
    
</style>