<template>
  <div class="home">
    <button @click="me">Obtener usuario</button>
    <pre>{{ user }}</pre>
    <form @submit.prevent="login">
      <input v-model="form.email" type="email" placeholder="email..."/><br />
      <input v-model="form.password" type="password" placeholder="password..."/><br />
      <button>Login</button>
    </form>
  </div>
</template>

<script>

import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
axios.defaults.withCredentials = true;

export default {
  name: 'HomeView',
  
  data: () =>({
    user : {},
    form:{
      email : "luishoyosolaya@gmail.com",
      password : "12345678",
    }
  }),
  
  methods:{
    me(){
       axios.get('http://localhost:8000/api/user')
       .then(res=>{
          console.log(res.data);
       }).catch(err=>{
          console.log(err.response.data);
       });
    },
    login(){
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {
            axios.post("http://localhost:8000/login", this.form).then(res =>{
              console.log(res); 
              if(res){
                    this.user = res.data;
                    new Swal({
                      title : 'Exito',
                      text : 'Se realizo el inicio de sesión con exito',
                      icon: 'success'
                    });
                }
            })
        });
    },
  },
};
</script>
