<template>
  <div id="app" :style="{'background' : background}">
    <nav>
      <a class="logo"><span class="logo">J</span><span class="logo rotate">D</span></a>
      <router-link to="/" @click.native="checkhome = true">Home</router-link>
      <router-link to="/about" @click.native="checkhome = false">About</router-link>
      <router-link to="/page" @click.native="checkhome = true">Page</router-link>
      <router-link to="/test" @click.native="checkhome = false">Test</router-link>
      <router-link to="/kakaomap">카카오맵</router-link>
    </nav>

    <router-view/>
  </div>
</template>

<style scoped>
  * {
    margin: 0;
  }
  #app {
    width : 100%;
    height: 100%;
  }
  nav {
    padding-top: 30px;
  }
  a {
    padding: 35px;
    text-decoration: none;
    color: lightgrey;
    font-size: 20px;
    font-weight: bold;
  }
  .logo {
    border: 2px solid lightgrey;
    font-size: 35px;
  }
  .router-link-exact-active {
    color: khaki;
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
      return "url("+require("./assets/11.jpg")+")";
    }
    else {
      return "url("+require("./assets/9.jpg")+")";
    }
    }
  }
}
</script>
