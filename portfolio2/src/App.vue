<template>
  <div id="app" :style="{'background' : background}">
    <nav>
      <!-- 로고 -->
      <a class="logo"><span class="logo">J</span><span class="logo rotate">D</span></a>
      <!-- 각 페이지 라우터링크 -->
      <router-link to="/" @click.native="checkhome = true">Home</router-link>
      <router-link to="/about" @click.native="checkhome = false">About</router-link>
      <router-link to="/page" @click.native="checkhome = true">Page</router-link>
      <router-link to="/test" @click.native="checkhome = false">Test</router-link>
    </nav>
    
    <router-view/>
  </div>
</template>

<style scoped>
  /* 기본적으로 존재하는 마진값 0으로 하기 */
  * {
    margin: 0;
  }
  /* 전체 app 크기 */
  #app {
    width : 100%;
    height: 100%;
  }
  /* 라우터링크 위치조정 */
  nav {
    padding-top: 30px;
  }
  /* 라우터링크 디자인 */
  a {
    padding: 35px;
    text-decoration: none;
    color: lightgrey;
    font-size: 20px;
    font-weight: bold;
  }
  /* 로고 디자인 */
  .logo {
    border: 2px solid lightgrey;
    font-size: 35px;
  }
  /* 라우터링크 활성화시 색변경 */
  .router-link-exact-active {
    color: khaki;
  }
</style>

<script>
export default {
  data () {
    return {
      // 배경 사진 변화를 위한 데이터
      checkhome : true,
    } 
  },
  computed : {
    // 라우터링크 클릭시 라우터별로 배경 사진 변화
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
