<template>
  <div class="about">
    <h1>\{{msg}}</h1>
    <h2>Learn more about
      <a href="https://github.com/koajs-templates/vue.git">koajs-templates/vue</a>.
    </h2>
    <router-link to="/">Go to home</router-link>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        msg: 'Welcome to use koajs-templates/vue template.',
      };
    },
  };
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
