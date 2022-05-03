<template>
    <TopNav />
    <h1>About</h1>
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
