<script>
import AppCards from './AppCards.vue';

export default {
    name: 'AppMain',
    components: {
        AppCards,
    }
}
</script>

<template lang="">
    <main class="py-4">
        <div class="container test">
            <div class="my-row">
                <div class="my-col-12 text-white mx-5">
                    <form class="row row-cols-lg-auto g-3 align-items-center ">
                        <div class="col-12">
                          <div class="input-group input-group-sm">
                            <input type="text" class="form-control" id="card-name" placeholder="Card name">
                          </div>
                        </div>
                      
                        <div class="col-12">
                          <select class="form-select form-select-sm " id="type-cards">
                            <option selected>Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      
                        <div class="col-12">
                          <button type="submit" class="btn btn-sm btn-primary">Search</button>
                        </div>
                    </form>
                </div>
                <AppCards />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

    main{
        background-color: #201f1f;
        
        .my-row{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;

            .my-col-12{
                width: 100%;
            }
        }
        .test{
            background-color: $my-black;
            border-radius: 10px;
            padding: 20px 0;
        }

        .bg-light-dark{
            background-color: #201f1f;
        }
    }
</style>