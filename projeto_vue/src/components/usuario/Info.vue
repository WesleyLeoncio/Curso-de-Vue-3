<template>
  <div>
    <div>
      <Avatar />
    </div>
    <div>
      <p v-if="trabalhando_bool">Estou Trabalhando!</p>
      <p v-else>Estou desempregado!</p>
      <p v-show="email_bool">Meu email é: {{ email }}</p>
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
      email_bool: true,
    };
  },
};
</script>