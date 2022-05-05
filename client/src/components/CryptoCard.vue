<template>
  <div class='card-container'>
    <div class='card-info-loading' v-if="loading === true">
      <div >
        <ContentLoading isCard='true'/>
      </div>
    </div>
    <div class='card-info' v-else>
      <div>
        <h2 class='uppercase'>{{name}}</h2>
        <h2 class='price'>${{price}}</h2>
      </div>
      <div class="coin-data">
        <strong>Rank</strong>
        <p>{{rank}}</p>
        <strong>Market Cap</strong>
        <p>${{marketCap}}</p>
        <strong>Circulating supply</strong>
        <p>{{supply}}<strong>{{symbol}}</strong></p>
        <strong>Last 24h volume</strong>
        <p>${{volumeusd24h}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ContentLoading from '@/components/ContentLoading.vue';

export default {
  name: 'CryptoCard',
  props: {
    name: String,
    rank: Number,
    price: Number,
    marketCap: String,
    supply: String,
    symbol: String,
    volumeusd24h: String,
    loading: Boolean,
  },
  components: {
    ContentLoading,
  },
};
</script>

<style scoped>
    .card-container {
        width: 20em;
        height: 25em;
        margin: 40px 40px;
        background-color: rgb(255, 255, 255);
        border-radius: 20px;
        transition: 200ms;
    }

    .card-info {
        padding:10%;
        text-align: center;
        display: flex;
        flex-flow: column wrap;
    }

    .uppercase::first-letter {
      text-transform: capitalize;
    }

    .coin-data {
      display: flex;
      margin: auto;
      flex-flow: column wrap;
    }

    .price {
      padding: 0.4em;
    }

    h2 {
      background-image: linear-gradient(135deg, #ff25e2 0%, #5010e6 100%);
      background-clip: text;
      color: transparent;
    }

    strong {
      padding: 0.5em;
    }

    p {
      font-weight: 200;
      color: rgb(90, 90, 90);
    }

    .card-container:hover {
      transition: 200ms;
      scale: 1.05;
      box-shadow: 0 0px 20px 5px #363636;
    }
</style>
