<template>
  <div>
    <div>
      <Avatar />
    </div>
    <div>
      <p v-if="user.trabalhando_bool">Estou Trabalhando!</p>
      <p v-else>Estou desempregado!</p>
      <p>Utilizo as seguintes tecnoloogias para back-end:</p>
      <ul>
        <li v-for="(technology, index) in backend_tech" :key="index">
          {{ technology }}
        </li>
      </ul>
      <p>Utilizo as seguintes tecnoloogias para front-end:</p>
      <ul>
        <li v-for="technology in frontend_tech" :key="technology.id">
          {{ technology.language }}
        </li>
      </ul>
      <div>
        <button @click="showEmail">{{ textBotton }}</button>
      </div>
      <p v-show="email_bool">E-mail: {{ user.email }}</p>
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
  props: {
    user: Object,
  },
  data() {
    return {
      email_bool: false,
      textBotton: "Mostrar e-mail",
      backend_tech: ["Java", "Node", "C#"],
      frontend_tech: [
        { id: 1, language: "Html" },
        { id: 2, language: "Css" },
        { id: 3, language: "Js" },
      ],
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