<template>
  <div class="footer">
    <h2>© Copyright 2022</h2>
  </div>
</template>

<script>

export default {
  name: 'FooterView',
};
</script>

<style scoped>

  .footer{
    display: flex;
    align-content: center;
    flex-flow: row wrap;
    justify-content: space-between;
    height: 5vh;
    background-color: rgb(0, 0, 0);
    height: 6em;
    padding: 0 2%;
}

h2  {
  color: white;
}
</style>
