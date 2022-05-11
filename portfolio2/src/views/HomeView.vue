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

<style scoped>
@import "./viewcss/HomeView.css";
@import url('https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap');
</style>

<script>
export default {
  data () {
    return {
      text : "이 공간은 제가 좋아하는것을 공유하고 보여드림으로서<br>제 자신을 소개하고자 만든 공간입니다.<br>편히 즐겨주세요     ",
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
