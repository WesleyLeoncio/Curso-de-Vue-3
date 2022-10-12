<template>
  <div>
    <OlaMundo/>
    <LyfeCycle/>
  </div>
  
</template>

<script>
import OlaMundo from "./components/OlaMundo.vue";
import LyfeCycle from "./components/LyfeCycle.vue"
  export default{
    name: "app",
    components:{
      OlaMundo,
      LyfeCycle
    }
    
  }
</script>