<script>
import {store} from '../store.js';

export default {
    name: 'AppSearch',
    data() {
        return {
            store,
        }
    },
    methods: {
        resetSearch(){
            store.search = '';
            store.archetype = '';

            this.$emit('reset_search');
        }
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
            <button class="btn btn-sm  btn-primary mr-15" @click="$emit('button_search')">Search</button>
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