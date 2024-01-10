<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppLoader from './components/AppLoader.vue';
  import axios from 'axios';
  import { store } from './store.js';

  export default {
    components: {
      AppHeader,
      AppMain,
      AppLoader
    },
    data() {
      return {
        store
      }
    },
    created() {
      this.getCardList()
    },
    methods: {
      getCardList() {
        axios.get(store.endpoint).then((response) => {
          store.cardList = response.data.data;
          store.loading = false;
        })
      }
    },
  }
</script>

<template>
  <AppLoader v-if="store.loading"/>
  <div v-else>
    <AppHeader :title="store.app_title"/>
    <AppMain />
  </div>
</template>

<style lang="scss" scoped>
@use './style/generals.scss' as *;
@use './style/partials/variables' as *;

</style>
