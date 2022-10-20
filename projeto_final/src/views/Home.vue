<template>
  <div>
    <Banner />
    <div class="main-container">
      <h1>Monte o seu buger:</h1>
      <BurgerForm />
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import BurgerForm from "../components/BurgerForm.vue";
export default {
  components: { Banner, BurgerForm },
  name: "Home",
};
</script>

<style scoped>
</style>