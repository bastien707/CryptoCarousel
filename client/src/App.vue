<template>
  <div class="topnav">
    <h2>🎠 CryptoCarousel</h2>
  </div>
  <section id="contentS1">
    <h1 class="gradient-text">
      <span>Welcome to</span>
      <span class="highlight"> CryptoCarousel </span>
      <span>a place to find more on the </span>
      <span class="highlight"> blockchain. </span>
    </h1>
    <p class="p-desc">
      Get up to date with the blockchain by exploring any addresses and keeping
      an eye on your favorite coin 👀
    </p>

    <a class="start-ref" href="#contentS2">
      <button class="start-button">Start now</button>
    </a>
  </section>
  <section id="contentS2">
    <CryptoCard :price="BTC" name="Bitcoin" />
    <CryptoCard :price="ETH" name="Ethereum"/>
    <CryptoCard />
    <CryptoCard />
  </section>
</template>

<script>
import CryptoCard from '@/components/CryptoCard.vue';

export default {
  name: 'App',
  components: {
    CryptoCard,
  },

  data() {
    return {
      BTC: null,
      ETH: null,
    };
  },
  mounted() {
    const connectionBTC = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin');
    let parsedResponseBTC = null;
    connectionBTC.onmessage = (eventBTC) => {
      parsedResponseBTC = JSON.parse(eventBTC.data);
      this.BTC = parsedResponseBTC.bitcoin;
    };
    const connectionETH = new WebSocket('wss://ws.coincap.io/prices?assets=ethereum');
    let parsedResponseETH = null;
    connectionETH.onmessage = (eventETH) => {
      parsedResponseETH = JSON.parse(eventETH.data);
      this.ETH = parsedResponseETH.ethereum;
    };
  },
};
</script>

<style>
@import "@/assets/styles/app.css";
</style>
