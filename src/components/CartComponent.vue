<template>
<div class="cart">
    <button id="cartbutton" @click="addCart">AddCart</button>
</div>
</template>

<script>
export default {
    methods:{
        addCart(){
            this.$router.push("/Cart")
        }
    }
};
</script>

<style>
</style>