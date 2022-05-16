<template>
  <div class="home">
      <div class="typingbox">
        <div class="typing">
          <span v-html="displaytext"></span><span class="blink">|</span>
        </div>
      </div>
      <div id="book">
            <input type="checkbox" id="btn1">
            <input type="checkbox" id="btn2">
            <input type="checkbox" id="btn3">

            <div class="firstpage" id="page1">
              <div class="content-left">
                <h2>첫 번째 페이지...</h2>
                <span>This is first page...</span>
              </div>
            </div>

            <div class="frontpage" id="page2">
              <div class="content-right">
                <h2>두 번째 페이지...</h2>
                <span>This is first page...</span>
                <label for="btn1" class="btn nbtn-front">O</label>
                <div class="line front"></div>
              </div>
            </div>
            
            <div class="backpage" id="page3">
              <div class="content-left">
                <h2>세 번째 페이지...</h2>
                <span>This is second page...</span>
                <label for="btn1" class="nbtn-back btn">O</label>
                <div class="line back"></div>
              </div>
            </div>

            <div class="frontpage" id="page4">
              <div class="content-right">
                <h2>네 번째 페이지...</h2>
                <span>This is third page...</span>
                <label for="btn2" class="nbtn-front btn">O</label>
                <div class="line front"></div>
              </div>
            </div>

            <div class="backpage" id="page5">
              <div class="content-left">
                <h2>다섯 번째 페이지...</h2>
                <span>This is second page...</span>
                <label for="btn2" class="nbtn-back btn">O</label>
                <div class="line back"></div>
              </div>
            </div>

            <div class="frontpage" id="page6">
              <div class="content-right">
                <h2>여섯 번째 페이지...</h2>
                <span>This is first page...</span>
                <label for="btn3" class="nbtn-front btn">O</label>
                <div class="line front"></div>
              </div>
            </div>
            
            <div class="backpage" id="page7">
              <div class="content-left">
                <h2>일곱 번째 페이지...</h2>
                <span>This is second page...</span>
                <label for="btn3" class="nbtn-back btn">O</label>
                <div class="line back"></div>
              </div>
            </div>

            <div class="frontpage" id="page8">
              <div class="content-right">
                <h2>여덟 번째 페이지...</h2>
                <span>This is first page...</span>
              </div>
            </div>
    </div>
  </div>

</template>

<style scoped src="./viewcss/HomeView.css">
</style>

<script>
export default {
  data () {
    return {
      text : "이 공간에는 제가 좋아하는것을 모아보았습니다.<br>편히 즐겨주셨으면 합니다.<br>(사용된 사진은 전부 직접 찍은 사진을 활용하였습니다.)    ",
      index : 0
    }
  },
  computed : {
    displaytext() {
      return this.text.substring(0,this.index);
    } 
  },
  methods : {
    typing() {
      if (this.index <= this.text.length) {
        this.index ++;
        if (this.text[this.index] == "<") {
        this.index +=2;
      }
      }
      else {
        this.index = 0;
      }
      setTimeout(this.typing,150);
    }
  },
  created () {
    this.typing();
  }
}
</script>
