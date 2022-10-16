<template>
  <div>
    <Header />
    <OlaMundo />
    <LyfeCycle />
    <Formulario />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import OlaMundo from "./components/OlaMundo.vue";
import LyfeCycle from "./components/LyfeCycle.vue";
import Formulario from "./components/form/Formulario.vue";
export default {
  name: "app",
  components: {
    Header,
    OlaMundo,
    LyfeCycle,
    Formulario,
  },
};
</script>

<style>
body {
  background-color: #333;
  color: #fff;
}
</style>