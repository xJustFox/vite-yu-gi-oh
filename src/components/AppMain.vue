<script>
import AppCards from './AppCards.vue';
import { store } from '../store.js';

export default {
    name: 'AppMain',
    components: {
        AppCards,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <main class="py-4">
        <div class="container my-style-cont">
            <div class="my-row">

                <div class="my-col-12 text-white mx-5">
                    <form class="row row-cols-lg-auto justify-content-end  g-3 align-items-center ">
                        <div class="col-12">
                          <div class="input-group input-group-sm">
                            <input type="text" class="form-control" id="card-name" placeholder="Card name">
                          </div>
                        </div>
                      
                        <div class="col-12">
                          <select class="form-select form-select-sm cs-pointer" id="type-cards">
                            <option selected>Archetype</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                    </form>
                </div>

                <AppCards v-for="(card, index) in store.cardList" :key="index" :card='card' />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

main{
    background-color: #201f1f;
    
    &:hover{
        cursor: default;
    }
    .my-row{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;

            .my-col-12{
                width: 100%;
            }
        }
        .my-style-cont{
            background-color: $my-black;
            border-radius: 10px;
            padding: 20px 0;
        }

        .bg-light-dark{
            background-color: #201f1f;
        }

        .cs-pointer{
            cursor: pointer;
        }

    }
</style>