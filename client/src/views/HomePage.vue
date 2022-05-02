<template>
  <TopNav />
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
    <button class="explore-button" @click="goto('S2')">Explore</button>
  </section>
  <section id="contentS2" ref="S2">
    <h1 class=CS2Title>Today's Cryptocurrency Prices</h1>
    <div class=card-container>
      <CryptoCard :price="price[0].BTC" name="Bitcoin" :loading="loadingAPI[0].BTC"/>
      <CryptoCard :price="price[1].ETH" name="Ethereum" :loading="loadingAPI[1].ETH"/>
      <CryptoCard :price="price[2].MON" name="Monero" :loading="loadingAPI[2].MON"/>
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
    </div>
  </section>
</template>

<script>
import CryptoCard from '@/components/CryptoCard.vue';
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'HomePage',
  components: {
    CryptoCard,
    TopNav,
  },

  data() {
    return {
      loadingAPI: [{ BTC: true }, { ETH: true }, { MON: true }],
      price: [{ BTC: null }, { ETH: null }, { MON: true }],
    };
  },
  mounted() {
    const connectionBTC = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero');
    let parsedResponse = null;
    const temp = [{ BTC: null }, { ETH: null }, { MON: null }];
    connectionBTC.onmessage = (event) => {
      parsedResponse = JSON.parse(event.data);
      this.price[0].BTC = parsedResponse.bitcoin;
      if (typeof this.price[0].BTC === 'string') {
        temp[0].BTC = this.price[0].BTC;
      } else if (temp[0].BTC === null) {
        this.loadingAPI[0].BTC = true;
      } else {
        this.price[0].BTC = temp[0].BTC;
        this.loadingAPI[0].BTC = false;
      }

      this.price[1].ETH = parsedResponse.ethereum;
      if (typeof this.price[1].ETH === 'string') {
        temp[1].ETH = this.price[1].ETH;
      } else if (temp[1].ETH === null) {
        this.loadingAPI[1].ETH = true;
      } else {
        this.price[1].ETH = temp[1].ETH;
        this.loadingAPI[1].ETH = false;
      }

      this.price[2].MON = parsedResponse.monero;
      if (typeof this.price[2].MON === 'string') {
        temp[2].MON = this.price[2].MON;
      } else if (temp[2].MON === null) {
        this.loadingAPI[2].MON = true;
      } else {
        this.price[2].MON = temp[2].MON;
        this.loadingAPI[2].MON = false;
      }
    };
  },

  methods: {
    goto(refName) {
      const element = this.$refs[refName];
      const top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>

<style>
@import "@/assets/styles/HomePage.css";
</style>
