<template>
    <ContentLoader
      v-if="isCard === 'true'"
      height= '350'
      width= '300 '
    >
      <rect x="75" y="40" rx="4" ry="4" width="150" height="20" />
      <rect x="75" y="304" rx="4" ry="4" width="150" height="10" />
      <rect x="85" y="323" rx="3" ry="3" width="130" height="6" />
      <rect x="10" y="77" rx="15" ry="15" width="280" height="200" />
    </ContentLoader>
    <ContentLoader
      viewBox="0 0 340 80"
      v-else
    >
      <rect x="9" y="4" rx="0" ry="0" width="320" height="22" />
      <rect x="18" y="14" rx="0" ry="0" width="303" height="6" />
      <rect x="11" y="33" rx="0" ry="0" width="108" height="13" />
      <rect x="129" y="33" rx="0" ry="0" width="60" height="13" />
      <rect x="196" y="33" rx="0" ry="0" width="60" height="13" />
    </ContentLoader>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';

export default {
  components: {
    ContentLoader,
  },
  props: {
    isCard: String,
  },
};
</script>
