<template>
  <div class='card'>
    <h2>{{name}}</h2>
    <br>
    <h2>{{price}}$</h2>
  </div>
</template>

<script>
export default {
  name: 'CryptoCard',
  props: {
    name: String,
    price: String,
  },
};
</script>

<style scoped>
    .card {
        display: flex;
        flex-flow: column wrap;
        text-align: center;
        margin: auto;
        padding: 10% 7%;
        background-color: aliceblue;
        border-radius: 10px;
    }
</style>
