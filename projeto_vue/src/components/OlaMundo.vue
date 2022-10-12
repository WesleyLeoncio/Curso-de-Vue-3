<template>
    <div>
        <h1>{{msg}}</h1>
        <h1>{{nome}}</h1>
    </div>
</template>

<script>
export default{
    name: "OlaMundo",
    data(){
        return {
            nome: "Nome: Wesley Leôncio Da Cruz",
            msg: "Mensagem: Ola Mundo!"
        }
    }
}
</script>