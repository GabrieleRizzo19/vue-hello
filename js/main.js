const { createApp } = Vue;

createApp({
    data(){
        return{
            message: "Hello Vue",
            img: "./img/01.webp"
        }
    }
}).mount("#app")