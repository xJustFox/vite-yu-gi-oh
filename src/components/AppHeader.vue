<script>
export default {
    name: 'AppHeader',
    props:{
        title: String,
    }
}
</script>

<template lang="">
    <header>
        <div class="container-fluid p-3">
            <img src="../assets/imgs/logo.png" alt="">
            <h1 class="d-inline-block m-0 align-middle px-3">{{title}}</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    header{
        background-image: url('../assets/imgs/pattern.png');
        background-color: $my-black;
        color: #fff;

        img{
            height: 70px;
        }

        &:hover{
            cursor: default;
        }
    }
</style>