<template>
  <div>
    <button @click="primeiro(txt1, $event), segundo(txt2, $event), terceiro()">
      Ativar multiplos eventos
    </button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>

<script>
export default {
  name: "MultiplosEventos",
  data() {
    return {
      multiplos_eventos: "",
      txt1: "Primeiro",
      txt2: "Segundo",
    };
  },
  methods: {
    primeiro(txt, e) {
      this.multiplos_eventos = txt;
    },
    segundo(txt, e) {
      setTimeout(() => (this.multiplos_eventos = txt), 1000);
    },
    terceiro() {
      setTimeout(() => (this.multiplos_eventos = ""), 3000);
    },
  },
};
</script>

