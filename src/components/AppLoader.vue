<script>
import { store } from '../store.js'

export default {
    name: 'AppLoader',
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div>
        <div class="loader">
            <div class="text">
                {{store.app_title}}
            </div>
            <div class="circle-loader"></div>
            <div class="text loading">Loading</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: #201f1f;

        .text {
            color: gray;
            font-size: 50px;
        }

        .loading {
            color: gray;
            display: inline-block;
            position: relative;
            font-size: 48px;
            font-family: Arial, Helvetica, sans-serif;
            box-sizing: border-box;
        }

        .loading::after {
            content: '';
            width: 5px;
            height: 5px;
            background: currentColor;
            position: absolute;
            bottom: 10px;
            right: -5px;
            box-sizing: border-box;
            animation: animloader 1s linear infinite;
        }

        @keyframes animloader {
            0% {
                box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0);
            }

            50% {
                box-shadow: 10px 0 white, 20px 0 rgba(255, 255, 255, 0);
            }

            100% {
                box-shadow: 10px 0 white, 20px 0 white;
            }
        }

        .circle-loader {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            position: relative;
            animation: rotate 1s linear infinite
          }
          .circle-loader::before {
            content: "";
            box-sizing: border-box;
            position: absolute;
            inset: 0px;
            border-radius: 50%;
            border: 5px solid gray;
            animation: prixClipFix 2s linear infinite ;
          }
      
          @keyframes rotate {
            100%   {transform: rotate(360deg)}
          }
      
          @keyframes prixClipFix {
              0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
              25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
              50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
              75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
              100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
          }
    }
</style>