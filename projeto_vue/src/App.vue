<template>
  <div>
    <OlaMundo/>
    <LyfeCycle/>
    <Formulario/>
  </div>
  
</template>

<script>
import OlaMundo from "./components/OlaMundo.vue";
import LyfeCycle from "./components/LyfeCycle.vue";
import Formulario from "./components/form/Formulario.vue";
  export default{
    name: "app",
    components:{
      OlaMundo,
      LyfeCycle,
      Formulario
    }
    
  }
</script>