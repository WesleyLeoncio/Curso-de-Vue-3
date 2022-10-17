<template>
  <div>
    <MultiplosEventos />
    <Reutilizacao />
    <Reutilizacao />
    <h1>{{ msg }}</h1>
    <h1>{{ nome }}</h1>
    <info :user="user"/>
  </div>
</template>

<script>
import Info from "./usuario/Info.vue";
import Reutilizacao from "./Reutilizacao.vue";
import MultiplosEventos from "./MultplosEventos.vue";
export default {
  name: "OlaMundo",
  components: {
    MultiplosEventos,
    Info,
    Reutilizacao,
  },
  data() {
    return {
      nome: "Nome: Wesley Leôncio Da Cruz",
      msg: "Mensagem: Ola Mundo!",
      user: {email:"wesley@gmail.com", trabalhando_bool: false}
    };
  },
};
</script>