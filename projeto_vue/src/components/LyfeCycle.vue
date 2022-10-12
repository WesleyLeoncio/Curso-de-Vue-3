<template>
    <h1>Meu nome é: {{nome}}</h1>
</template>

<script>
export default{
    name: "LyfeCycle",
    data(){
        return {
            nome: "NOME DE TESTE"
        }
    }, 
    created(){
        setTimeout(()=>{
            this.nome = "Ahri Nova"
        },1000);
        
    },
    mounted(){
        setTimeout(()=>{
            this.nome = "Fizz infernal"
        },2000);
    }
}
</script>