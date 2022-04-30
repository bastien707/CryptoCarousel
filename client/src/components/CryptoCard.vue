<template>
  <div class='card-container'>
    <div class='card-data-loading' v-if="loading === true">
      <div >
        <ContentLoading />
      </div>
    </div>
    <div class='card-data' v-else>
        <h2>{{name}}</h2>
        <h2>{{price}}$</h2>
      </div>
  </div>
</template>

<script>
import ContentLoading from '@/components/ContentLoading.vue';

export default {
  name: 'CryptoCard',
  props: {
    name: String,
    price: String,
    loading: Boolean,
  },
  components: {
    ContentLoading,
  },
};
</script>

<style scoped>
    .card-container {
        width: 250px;
        height: 250px;
        margin: 40px 40px;
        background-color: rgb(255, 255, 255);
        border-radius: 20px;
    }

    .card-data {
        padding:10%;
        text-align: center;
        display: flex;
        flex-flow: column wrap;
    }
</style>
