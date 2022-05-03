<template>
    <TopNav />
    <div class="content">
        <h1>Browse through the Blockchain</h1>
        <span>Enter an address below to find more info about this wallet</span>
        <PostAddress />
    </div>
    <FooterView />
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import FooterView from '@/components/FooterView.vue';
import PostAddress from '@/components/PostAddress.vue';

export default {
  name: 'FindAddress',
  components: {
    TopNav,
    FooterView,
    PostAddress,
  },
};

</script>

<style scoped>
body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: rgb(250, 250, 250);
    margin: 0;
}

.content {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-flow: column wrap;
    background-image: url('@/assets/img/gradienta-7E5kq_sW0Ew-unsplash.jpg');
    background-position: left;
    min-height: 40vh;
}

span {
    color: grey;
    font-size: 2em;
    font-weight: 300;
    line-height: 30px;
    text-align: center;
    margin: 1em;
}

h1 {
    color: white;
    text-align: center;
    font-size: 56px;
    max-width: 8em;
    font-weight: 800;
    margin: auto;
    padding: 4%;
}
</style>
