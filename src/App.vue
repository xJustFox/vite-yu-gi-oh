<script>
  import AppHeader from './components/AppHeader.vue';
  import AppCards from './components/AppCards.vue';
  import AppCardsSearch from './components/AppCardsSearch.vue';
  import AppSearch from './components/AppSearch.vue';
  import AppLoader from './components/AppLoader.vue';
  import axios from 'axios';
  import { store } from './store.js';

  export default {
    components: {
      AppHeader,
      AppLoader,
      AppSearch,
      AppCards,
      AppCardsSearch
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
          setTimeout(() => {
            store.loading = false;
          }, 2000);
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
          <AppSearch @reset_search="getCardList()"/>
          <AppCards v-if="store.flagSearch"/>
          <AppCardsSearch v-else/>
        </div>
      </div>

    </main>
  </div>
</template>

<style lang="scss">
  @use './style/generals.scss' as *;
  @use './style/partials/variables' as *;

  main {
    min-height: calc(100vh - 102px);
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
