<template>
  <div id="app" :style="{'background' : background}">
    <nav>
      <!-- 로고 -->
      <a class="logo"><span class="logo">J</span><span class="logo rotate">D</span></a>
      <!-- 각 페이지 라우터링크 -->
      <router-link to="/" @click.native="checkhome = true">Home</router-link>
      <router-link to="/fashion" @click.native="checkhome = false">Fashion</router-link>
      <router-link to="/playlist" @click.native="checkhome = true">PlayList</router-link>
      <router-link to="/exhibition" @click.native="checkhome = false">Exhibition</router-link>
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
  @media screen and (max-width: 1200px) {
    a {
      padding: 30px;
      font-size: 20px;
    }
  }
  @media screen and (max-width: 968px) {
    a {
      padding: 20px;
      font-size: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    a {
      padding: 15px;
      font-size: 15px;
    }
  }
  @media screen and (max-width: 480px) {
    a {
      font-size: 12px;
      padding: 10px;
    }
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
  },
  mounted () {
    if (window.location.pathname == "/fashion" || window.location.pathname == "/exhibition") {
      this.checkhome = false;
    }
  }
}
</script>
