<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
  name: 'AppSearch',
  data() {
    return {
      store,
    }
  },
  created() {
    this.getArchetypeList()
  },
  methods: {
    getArchetypeList() {
      axios.get(store.apiArchetypes).then((response) => {
        for (let i = 0; i < 100; i++) {
          const element = response.data[i];
          store.archetypeList.push(element.archetype_name)
        }
      });
    },
    searchCard() {
      store.searchCardList = [];
      store.flagSearch = false;
      if (!store.archetype == '') {
        for (let i = 0; i < 100; i++) {
          if (store.cardList[i].archetype == store.archetype) {
            store.searchCardList.push(store.cardList[i]);
          }
        }
      }
    },
    resetSearch() {
      store.search = '';
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
            <div class="input-group input-group-sm">
              <input type="text" class="form-control shadow-none " id="searchInput" placeholder="Card name" v-model="store.search">
            </div>
          </div>

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
</template>
<style lang="scss" scoped>

.cs-pointer {
    cursor: pointer;
  }
.mr-15{
    margin-right: 15px;
}
</style>