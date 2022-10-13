<template>
  <div>
    <div>
      <ImputText />
    </div>
    <div>
      <ImputText />
    </div>
    <div>
      <Submit />
    </div>
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
};
</script>