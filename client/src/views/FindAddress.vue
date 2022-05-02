<template>
    <TopNav />
    <div class="content">
        <h1>Browse through the Blockchain</h1>
    </div>
    <FooterView />
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import FooterView from '@/components/FooterView.vue';

export default {
  name: 'FindAddress',
  components: {
    TopNav,
    FooterView,
  },
};

</script>

<style scoped>
body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: rgb(250, 250, 250);
    margin: 0;
}

h1 {
    font-size: 56px;
    max-width: 550px;
    margin: auto;
    font-weight: 800;
}

.input{
    border-width: 1px;
    border-color: rgb(210, 210, 210);
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    min-width: 400px;
}

.form{
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    margin-top: 10%;
    padding: 8%;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(215, 215, 215);
    box-shadow:0 10px 20px -10px #9e9e9e;
}

.submit-ref {
    background-image: linear-gradient(45deg, #61f7ff 0%, #33b1ff 100%);
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 14px;
    box-shadow:0 10px 20px -10px #33c9f3;
    transition: 0.4s;
}
</style>
