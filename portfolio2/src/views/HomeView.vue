<template>
  <div class="home">
      <div id="book">
            <input type="checkbox" id="btn1">
            <input type="checkbox" id="btn2">
            <input type="checkbox" id="btn3">

            <div class="firstpage" id="page1">
              <h2>첫 번째 페이지...</h2>
              <span>This is first page...</span>
            </div>

            <div class="frontpage" id="page2">
              <h2>두 번째 페이지...</h2>
              <span>This is first page...</span>
              <label for="btn1" class="btn nbtn-front">O</label>
              <div class="line front"></div>
            </div>
            
            <div class="backpage" id="page3">
              <h2>세 번째 페이지...</h2>
              <span>This is second page...</span>
              <label for="btn1" class="nbtn-back btn">O</label>
              <div class="line back"></div>
            </div>

            <div class="frontpage" id="page4">
              <h2>네 번째 페이지...</h2>
              <span>This is third page...</span>
              <label for="btn2" class="nbtn-front btn">O</label>
              <div class="line front"></div>
            </div>

            <div class="backpage" id="page5">
              <h2>다섯 번째 페이지...</h2>
              <span>This is second page...</span>
              <label for="btn2" class="nbtn-back btn">O</label>
              <div class="line back"></div>
            </div>

            <div class="frontpage" id="page6">
              <h2>여섯 번째 페이지...</h2>
              <span>This is first page...</span>
              <label for="btn3" class="nbtn-front btn">O</label>
              <div class="line front"></div>
            </div>
            
            <div class="backpage" id="page7">
              <h2>일곱 번째 페이지...</h2>
              <span>This is second page...</span>
              <label for="btn3" class="nbtn-back btn">O</label>
              <div class="line back"></div>
            </div>

            <div class="frontpage" id="page8">
              <h2>여덟 번째 페이지...</h2>
              <span>This is first page...</span>
            </div>
      </div>
  </div>

</template>

<style scoped>
@import "./HomeView.css";
</style>

<script>
export default {
  name: 'HomeView',
}
</script>
