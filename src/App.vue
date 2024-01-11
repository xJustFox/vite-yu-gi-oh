<script>
  import AppHeader from './components/AppHeader.vue';
  import AppCards from './components/AppCards.vue';
  import AppSearch from './components/AppSearch.vue';
  import AppLoader from './components/AppLoader.vue';
  import axios from 'axios';
  import { store } from './store.js';

  export default {
    components: {
      AppHeader,
      AppLoader,
      AppSearch,
      AppCards
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
        let apiUrl = store.endpoint;

        if (store.search != '') {
          apiUrl += `&name=${store.search}`;
        };

        if (store.archetype != '') {
          apiUrl += `&archetype=${store.archetype}`;
        };

        axios.get(apiUrl).then((response) => {
          store.loading = true
          store.cardList = response.data.data;
          store.loading = false;
        });
      }
    },
  }
</script>

<template>
  <AppLoader v-if="store.loading" />
  <div v-else>
    <AppHeader :title="store.app_title" />
    <main class="py-4">
      <div class="container my-style-cont">
        <div class="my-row">
          <AppSearch @button_search="getCardList()" @reset_search="getCardList()"/>
          <AppCards v-for="(card, index) in store.cardList" :key="index" :card='card' />
        </div>
      </div>

    </main>
  </div>
</template>

<style lang="scss">
  @use './style/generals.scss' as *;
  @use './style/partials/variables' as *;

  main {
    background-color: #201f1f;

    &:hover {
      cursor: default;
    }

    .my-row {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;

      .my-col-12 {
        width: 100%;
      }
    }

    .my-style-cont {
      background-color: $my-black;
      border-radius: 10px;
      padding: 20px 0;
    }

    .bg-light-dark {
      background-color: #201f1f;
    }

  }
</style>
