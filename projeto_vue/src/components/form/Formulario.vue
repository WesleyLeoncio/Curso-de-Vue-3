<template>
  <div>
    <p>Meu Formulario</p>
    <form action="" @submit="enviarFormulario($event)">
      <div>
        <div>
          <input type="text" v-model="user.name" />
        </div>
        <div>
          <input type="text" v-model="user.email" />
        </div>
        <div>
          <Submit />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ImputText from "./ImputText.vue";
import Submit from "./Submit.vue";
export default {
  name: "Formulario",
  components: {
    ImputText,
    Submit,
  },
  data() {
    return {
      user: { name: "Wesley", email: "email@gmail.com" },
    };
  },
  methods: {
    enviarFormulario(e) {
      e.preventDefault();
      const usuario = this.user;
      console.log(usuario);
    },
  },
};
</script>