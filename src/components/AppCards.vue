<script>
import { store } from '../store.js';
export default {
    name: 'AppCards',
    props:{
        card: Object,
    },
}
</script>

<template lang="">
    <div class="my-col">

        <div class="card text-white" style="background-color: #201f1f;">
            <img :src="card.card_images[0].image_url" class="card-img-top" :alt="card.name">
            <div class="card-body card-text-box">
                
                <div class="card-text fs-smaller fw-600 ">{{card.name}}</div>
                <div class="card-text fs-small"><span class="fw-600">Type:</span> {{card.archetype}}</div>
                <div class="card-text fs-small"><span class="fw-600">Description: <br> </span> 
                    {{card.desc}}
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .my-col{
        width: calc(100% / 5 - 40px);

        img{
            width: 100%;
        }
        
        .card-text-box{
            height: 150px;
            overflow: overlay;
            
            
            .fw-600{
                font-weight: 600;
            }
            
            .fs-smaller{
                font-size: smaller;
            }
            .fs-small{
                font-size: small;
            }
        }
        ::-webkit-scrollbar {
            display:none;
        }
          
    }
</style>