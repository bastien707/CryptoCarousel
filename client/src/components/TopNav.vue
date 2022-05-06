<template>
  <div class="topnav">
    <h2>🎠 CryptoCarousel</h2>
    <router-link to="/">
      <h3>Home</h3>
    </router-link>
    <router-link to="/Address">
      <h3>Address</h3>
    </router-link>
    <router-link to="/About">
      <h3>About</h3>
    </router-link>
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
    align-content: center;
    flex-flow: row wrap;
    justify-content: space-between;
    height: 5vh;
    background-color: rgb(255, 255, 255);
    box-shadow:0 10px 20px -10px #cdcdcd;
    height: 6em;
    padding: 0 2%;
}

h2, a {
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
}

a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  width: 8em;
  height: 2.5em;
  border-radius: 15px;
}

a.router-link-exact-active {
  background-image: linear-gradient(135deg, #ff25e2 0%, #5010e6 100%);
  box-shadow: 0 10px 20px -10px #cd33f3;
  color: white;
}
</style>
