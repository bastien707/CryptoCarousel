<template>
    <TopNav />
    <section id="container">
        <span>Check out project by clicking on the
          <span class="highlight">link</span>
          below !
        </span>
        <a class='github' href="https://github.com/bastien707/CryptoCarousel">Github</a>
    </section>
    <FooterView />
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import FooterView from '@/components/FooterView.vue';

export default {
  name: 'AboutView',
  components: {
    TopNav,
    FooterView,
  },
};

</script>

<style scoped>

#container {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
}

span {
  max-width: 600px;
  text-align: center;
  font-weight: 700;
  font-size: 48px;
}

.highlight {
    background-image: linear-gradient(135deg, #ff25e2 0%, #5010e6 100%);
    background-clip: text;
    color: transparent;
    transition: 200ms;
}

.highlight:hover {
  background-image: linear-gradient(135deg, #5010e6 0%, #ff25e2 100%);
}

.github {
  font-weight: 700;
  font-size: 2em;
  text-decoration: none;
  color: white;
  background-color: black;
  border-radius: 0.5em;
  padding: 1em 2em;
  transition: 200ms;
}

.github:hover {
  background-color: rgb(58, 58, 58);
}

</style>
