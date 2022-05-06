<template>
  <TopNav />
  <section id="contentS1">
    <h1 class="CS1Title">
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
    {{data.price}}
    <div class=card-container>
      <CryptoCard :price="data[0].price"
                  :rank="data[0].rank"
                  :marketCap="data[0].marketCap"
                  :supply="data[0].supply"
                  :symbol="data[0].symbol"
                  :volumeusd24h="data[0].volumeusd24h"
                  :name="data[0].id"
                  :loading= "loadingAPI"/>

      <CryptoCard :price="data[1].price"
                  :name="data[1].id"
                  :rank="data[1].rank"
                  :marketCap="data[1].marketCap"
                  :supply="data[1].supply"
                  :symbol="data[1].symbol"
                  :volumeusd24h="data[1].volumeusd24h"
                  :loading= "loadingAPI"/>

      <CryptoCard :price="data[2].price"
                  :name="data[2].id"
                  :rank="data[2].rank"
                  :marketCap="data[2].marketCap"
                  :supply="data[2].supply"
                  :symbol="data[2].symbol"
                  :volumeusd24h="data[2].volumeusd24h"
                  :loading= "loadingAPI"/>

      <CryptoCard :price="data[3].price"
                  :name="data[3].id"
                  :rank="data[3].rank"
                  :marketCap="data[3].marketCap"
                  :supply="data[3].supply"
                  :symbol="data[3].symbol"
                  :volumeusd24h="data[3].volumeusd24h"
                  :loading= "loadingAPI"/>

      <CryptoCard :price="data[4].price"
                  :name="data[4].id"
                  :rank="data[4].rank"
                  :marketCap="data[4].marketCap"
                  :supply="data[4].supply"
                  :symbol="data[4].symbol"
                  :volumeusd24h="data[4].volumeusd24h"
                  :loading= "loadingAPI"/>

      <CryptoCard :price="data[5].price"
                  :name="data[5].id"
                  :rank="data[5].rank"
                  :marketCap="data[5].marketCap"
                  :supply="data[5].supply"
                  :symbol="data[5].symbol"
                  :volumeusd24h="data[5].volumeusd24h"
                  :loading= "loadingAPI"/>
    </div>
  </section>
  <FooterView />
</template>

<script>
import CryptoCard from '@/components/CryptoCard.vue';
import TopNav from '@/components/TopNav.vue';
import FooterView from '@/components/FooterView.vue';
import json from '@/data.json';

export default {

  name: 'HomePage',
  components: {
    CryptoCard,
    TopNav,
    FooterView,
  },

  data() {
    return {
      loadingAPI: true,
      data: json,
    };
  },
  mounted() {
    const connectionBTC = new WebSocket('ws://82.64.134.56:3988/ws?assets=bitcoin,ethereum,solana,vechain,solana,dogecoin,uniswap');
    let parsedResponse = null;
    connectionBTC.onopen = () => {
      connectionBTC.send('start');
    };
    connectionBTC.onmessage = (event) => {
      this.loadingAPI = false;
      parsedResponse = JSON.parse(event.data);
      for (let i = 0; i < parsedResponse.length; i += 1) {
        this.data[i].id = parsedResponse[i].id;
        this.data[i].price = Math.round(parsedResponse[i].priceusd * 100) / 100;
        this.data[i].rank = Math.trunc(parsedResponse[i].rank);
        this.data[i].marketCap = this.addSpaces(Math.trunc(parsedResponse[i].marketcapusd));
        this.data[i].supply = this.addSpaces(Math.trunc(parsedResponse[i].supply));
        this.data[i].symbol = parsedResponse[i].symbol;
        this.data[i].volumeusd24h = this.addSpaces(Math.trunc(parsedResponse[i].volumeusd24h));
      }
    };
  },

  methods: {
    goto(refName) {
      const element = this.$refs[refName];
      const top = element.offsetTop;
      window.scrollTo(0, top);
    },
    addSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
  },
};
</script>

<style>
@import "@/assets/styles/HomePage.css";
</style>
