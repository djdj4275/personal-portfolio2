<template>
  <div class="about">

    <div class="search-wrapper" :class="{active : this.bt}">
      <div class="input-holder">
          <input type="text" class="search-input" placeholder="Type to search" v-model="text">
          <button class="search-icon" @click="bt = !bt"><span></span></button>
      </div>
      <span class="close" @click="search"></span>
    </div>

    <!-- flip-card-container -->
    <div class="flip-card-container" style="--hue: 220" v-for="(m,i) in infor1" :key="i">
      <div class="flip-card">

        <div class="card-front">
          <figure>
            <div class="img-bg"></div>
            <img :src="require(`../assets/${m.src}`)">
            <figcaption>Codi Set</figcaption>
          </figure>

          <ul >
            <li>Accessary : {{m.accessary}}</li>
            <li>Outer : {{m.outer}}</li>
            <li>Top : {{m.top}}</li>
            <li>Bottom : {{m.bottom}}</li>
            <li>Shoes : {{m.shoes}}</li>
          </ul>
        </div>

        <div class="card-back">
          <figure>
            <div class="img-bg"></div>
            <img :src="require(`../assets/${m.src}`)">
          </figure>

          <button>Book</button>

          <div class="design-container">
            <span class="design design--1"></span>
            <span class="design design--2"></span>
            <span class="design design--3"></span>
            <span class="design design--4"></span>
            <span class="design design--5"></span>
            <span class="design design--6"></span>
            <span class="design design--7"></span>
            <span class="design design--8"></span>
          </div>
        </div>

      </div>
    </div>
<!-- /flip-card-container -->

  </div>
</template>

<script>
const infor = require("../assets/data.json");

export default {
  data() {
    return {
      infor1 : infor,
      text : "",
      bt : false
    }
  },
  methods : {
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
    }
  }
}
</script>

<style scoped>
@import "./AboutView.css";
</style>

