<template>
  <div class="home">
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

    login(){
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {
            axios.post("http://localhost:8000/api/login", this.form).then(res =>{
                if(res){
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
