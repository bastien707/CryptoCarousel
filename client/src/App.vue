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
  <section id="contentS2"></section>
  <router-view />
</template>

<style>
@import "@/assets/styles/app.css";
</style>
