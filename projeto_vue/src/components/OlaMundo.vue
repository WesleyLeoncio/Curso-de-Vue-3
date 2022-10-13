<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ nome }}</h1>
    <info/>
  </div>
</template>

<script>
import Info from "./Info.vue";
export default {
  name: "OlaMundo",
  components: {
    Info,
  },
  data() {
    return {
      nome: "Nome: Wesley Leôncio Da Cruz",
      msg: "Mensagem: Ola Mundo!",
    };
  },
};
</script>