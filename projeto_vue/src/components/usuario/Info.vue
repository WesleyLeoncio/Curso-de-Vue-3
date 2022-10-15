<template>
  <div>
    <div>
      <Avatar />
    </div>
    <div>
      <p v-if="trabalhando_bool">Estou Trabalhando!</p>
      <p v-else>Estou desempregado!</p>
      <div>
        <button @click="showEmail">{{ textBotton }}</button>
      </div>
      <p v-show="email_bool">E-mail: {{ email }}</p>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
export default {
  name: "Info",
  components: {
    Avatar,
  },
  data() {
    return {
      trabalhando_bool: false,
      email: "email@gmail.com",
      email_bool: false,
      textBotton: "Mostrar e-mail",
    };
  },
  methods: {
    showEmail() {
      this.email_bool = !this.email_bool;
      if (this.email_bool) {
        this.textBotton = "Esconder e-mail";
      } else {
        this.textBotton = "Mostrar e-mail";
      }
    },
  },
};
</script>