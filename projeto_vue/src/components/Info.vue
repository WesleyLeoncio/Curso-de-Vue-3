<template>
    <div>
        <p v-if="trabalhando_bool">Estou Trabalhando!</p>
        <p v-else>Estou desempregado!</p>
        <p v-show="email_bool">Meu email é: {{email}}</p>
    </div>
</template>

<script>
export default {
    name: "Info",
    data(){
        return{
            trabalhando_bool: false,
            email: "email@gmail.com",
            email_bool: true
        }
    }
}
</script>