<template>
  <div id="app" :style="{'background' : background}">
    <nav>
      <router-link to="/" @click.native="checkhome = true">Home</router-link> |
      <router-link to="/about" @click.native="checkhome = false">About</router-link> |
      <router-link to="/page" @click.native="checkhome = false">Page</router-link> |
      <router-link to="/test" @click.native="checkhome = false">Test</router-link>
    </nav>

    <router-view/>
  </div>
</template>

<style scoped>
  #app {
    width : 100%;
    height: 100%;
  }
</style>

<script>
export default {
  data () {
    return {
      checkhome : true,
    } 
  },
  computed : {
    background() {
    if (this.checkhome) {
      return "url("+require("./assets/8.jpg")+")";
    }
    else {
      return "#000000";
    }
    }
  }
}
</script>
