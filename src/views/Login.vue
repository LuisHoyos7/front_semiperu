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
export default {
  name: 'HomeView',
  
  data: () =>({
    form:{
      email : "luishoyosolaya@gmail.com",
      password : "12345678",
    }
  }),
  methods:{
    async login(){
        await this.$store.dispatch("login",this.form);
        return this.$router.replace("/");
    },
  },
};
</script>
