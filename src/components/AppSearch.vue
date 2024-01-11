<script>
import AppTotCards from './AppTotCards.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
  name: 'AppSearch',
  data() {
    return {
      store,
    }
  },
  components:{
    AppTotCards,
  },
  created() {
    this.getArchetypeList()
  },
  methods: {
    getArchetypeList() {
      for (let i = 0; i < store.cardList.length; i++) {
        const archetype = store.cardList[i].archetype;
        if (typeof archetype === 'string') {
          if (!store.archetypeList.includes(archetype)) {
            store.archetypeList.push(archetype);
          }
        }
      }
    },
    searchCard() {
      store.searchCardList = [];
      store.flagSearch = false;
      store.loading = true;
      if (!store.archetype == '') {
        for (let i = 0; i < store.cardList.length; i++) {
          if (store.cardList[i].archetype == store.archetype) {
            store.searchCardList.push(store.cardList[i]);
          }
        }
      }
      setTimeout(() => {
        store.loading = false;
      }, 500);
    },
    resetSearch() {
      store.archetype = '';
      store.flagSearch = true;

      this.$emit('reset_search');
    },
  },
}
</script>
<template lang="">
    <div class="my-col-12 text-white mx-5">
        <div class="row row-cols-lg-auto justify-content-end  g-3 align-items-center">

          <div class="col-12">
            <select class="form-select form-select-sm cs-pointer shadow-none" id="type-cards" v-model="store.archetype">
              <option value="" selected>Archetype</option>
              <option v-for="(type, index) in store.archetypeList" :key="index"  :value="type">{{type}}</option>
            </select>
          </div>

          <div class="col-12">
            <button class="btn btn-sm  btn-primary mr-15" @click="searchCard()">Search</button>
            <button class="btn btn-sm  btn-warning" @click="resetSearch">Reset</button>
          </div>
        </div>
    </div>
    <div class="my-col-12 text-center ">
      <AppTotCards />
    </div>
</template>
<style lang="scss" scoped>

.cs-pointer {
    cursor: pointer;
  }
.mr-15{
    margin-right: 15px;
}
</style>