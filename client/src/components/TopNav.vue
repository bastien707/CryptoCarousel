<template>
  <div class="topnav">
    <nav>
      <h2>🎠 CryptoCarousel</h2>
      <router-link to="/">Home</router-link>
      <router-link to="/Address">Address</router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'TopNav',
};
</script>

<style scoped>
  .topnav{
    display: flex;
    height: 5vh;
    background-color: rgb(255, 255, 255);
    box-shadow:0 10px 20px -10px #cdcdcd;
    padding: 2%;
}
</style>
