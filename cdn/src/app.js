const myNameApp = {
    data(){
        return {
            name: "",
            idade: 26,
            input_name: ""
        }
    },
    methods:{
        submitForm(e){
            e.preventDefault();
            this.name = this.input_name;
       }
    }
}

Vue.createApp(myNameApp).mount("#app");

