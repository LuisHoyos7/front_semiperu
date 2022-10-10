<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <template v-if="this.$store.state.auth">
      <span>{{ this.$store.state.user.name }}</span> |
      <button @click="logout">logout</button>
    </template>
    <template v-else>
      <router-link to="/login">Login</router-link>
    </template>
  </nav>
  <router-view/>
</template>
<script>
  export default{
    methods:{
      async logout(){
        await this.$store.dispatch("logout");
        return this.$router.replace("/login");
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
