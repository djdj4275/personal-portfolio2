<template>
  <div class="about">
    <!-- 브랜드 검색창 -->
    <div class="search-wrapper" :class="{active : this.bt}">
      <font-awesome-icon class="resetBtn" @click="reset" icon="fa-solid fa-arrow-rotate-right" />
      <div class="input-holder">
          <input type="text" class="search-input" placeholder="Type to search" v-model="text">
          <button class="search-icon" @click="bt = !bt"><span></span></button>
      </div>
      <span class="close" @click="search"></span>
    </div>

    <!-- 카드들을 json파일을 들고온 배열로 반복 -->
    <div class="flip-card-container" v-for="(m,i) in infor1" :key="i">
        <div class="flip-card">

          <div class="card-front">
            <figure>
              <img :src="require(`../assets/${m.src}`)">
              <figcaption>Codi Set</figcaption>
            </figure>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img :src="require(`../assets/${m.src}`)">
            </figure>

            <button>Hold</button>

            <ul class="cloth">
              <li>Accessary : {{m.accessary}}</li>
              <li>Outer : {{m.outer}}</li>
              <li>Top : {{m.top}}</li>
              <li>Bottom : {{m.bottom}}</li>
              <li>Shoes : {{m.shoes}}</li>
            </ul>

            <!-- 카드 뒷면의 줄 애니메이션 -->
            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
            </div>
          </div>

        </div>
    </div>

  </div>
</template>

<script>
// 미리 작성해둔 카드 브랜드 데이터json 불러옴
const infor = require("../assets/data.json");

export default {
  data() {
    return {
      infor1 : infor, // 불러온 json을 데이터에 넣어줌
      text : "", // 검색창에 들어올 값
      bt : false // 버튼 값
    }
  },
  methods : {
    // 검색창 클릭시 필터를 거쳐서 배열을 다시 넣어줌
    search() {
      let textsearch = this.infor1.filter( 
        (item)=>{
          for (let i in item) {
            if (item[i].match(this.text)) {
              return true;
            }
          }
          return false;
      });
      this.infor1 = textsearch;
    },
    reset() {
      this.infor1 = infor;
    }
  }
}
</script>

<style scoped src="./viewcss/FashionView.css">
</style>

