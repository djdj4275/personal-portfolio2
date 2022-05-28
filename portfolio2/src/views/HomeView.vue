<template>
  <div class="home">
      <!-- 타이핑 이벤트 -->
      <div class="typingbox">
        <div class="typing">
          <!-- 타이핑과 함께 진행될 blink -->
          <span v-html="displaytext"></span><span class="blink">|</span>
        </div>
      </div>
      <!-- 책 넘기는 애니메이션 -->
      <div id="book">
            <!-- 넘기는 버튼을 대신할 체크박스 -->
            <input type="checkbox" id="btn1">
            <input type="checkbox" id="btn2">
            <input type="checkbox" id="btn3">

            <div class="firstpage" id="page1">
              <div class="content-left picture1">

                <div class="explanation1">
                  <h2>FIRST PAGE</h2>
                  <span>
                    <br>
                    안녕하세요 이 책장을 하나씩 넘겨보시면 <br>
                    페이지마다 제가 넣어보고자 한 주제가 무엇인지 설명해두었습니다 <br>
                    현재 페이지는 <span class="subject">메인페이지</span>로서 <br>
                    각 페이지별로 어떤 주제를 가지고 있는지 적어두었습니다.
                  </span>
                </div>
                
              </div>
            </div>

            <div class="frontpage" id="page2">
              <div class="content-right picture1">
                <label for="btn1" class="btn nbtn-front">O</label>
                <div class="line front"></div>
              </div>
            </div>
            
            <div class="backpage" id="page3">
              <div class="content-left picture2">

                <div class="explanation2">
                  <h2>SECOND PAGE</h2>
                  <span>
                    <br>
                    두번째 페이지는 <span class="subject">착장소개 페이지</span>입니다. <br>
                    저는 평소 옷에 관심이 많아 다양한 스타일에 관심이 많습니다. <br>
                    이 페이지는 제가 코디했던 룩들을 보여드리고 <br>
                    그 착장에 사용된 옷들의 브랜드를 모아봤습니다. <br>
                    또한 검색창으로 브랜드 이름을 검색하시면 해당 브랜드가 속한 <br>
                    착장만 골라서 보실 수 있도록 해두었습니다.
                  </span>
                </div>

                <label for="btn1" class="nbtn-back btn">O</label>
                <div class="line back"></div>
              </div>
            </div>

            <div class="frontpage" id="page4">
              <div class="content-right picture2">
                <h2>네 번째 페이지...</h2>
                <span>This is third page...</span>
                <label for="btn2" class="nbtn-front btn">O</label>
                <div class="line front"></div>
              </div>
            </div>

            <div class="backpage" id="page5">
              <div class="content-left picture3">
                <label for="btn2" class="nbtn-back btn">O</label>
                <div class="line back"></div>
              </div>
            </div>

            <div class="frontpage" id="page6">
              <div class="content-right picture3">
                
                <div class="explanation3">
                  <h2>THIRD PAGE</h2>
                  <span>
                    <br>
                    세번째 페이지는 <span class="subject">제 플레이리스트</span>입니다. <br>
                    저는 예전부터 음악에 굉장히 관심이 많았습니다. <br>
                    때문에 학생시절 한 밴드의 보컬을 맡으며 <br>
                    지역대회를 나가거나 보컬전공으로 예대진학을 한적이 있습니다. <br>
                    평소에는 장르 가리지않고 듣는편이지만  <br>
                    최근 들어서는 사운드클라우드에 개개인들이 올린 음악들이나 <br>
                    인디적 감성이 느껴지는 음악이 끌려 많이 듣고있습니다.
                  </span>
                </div>

                <label for="btn3" class="nbtn-front btn">O</label>
                <div class="line front"></div>
              </div>
            </div>
            
            <div class="backpage" id="page7">
              <div class="content-left picture4">
                
                <div class="explanation4">
                  <h2>FOURTH PAGE</h2>
                  <span>
                    <br>
                    네번째 페이지는 <span class="subject">전시회 소개</span>입니다. <br>
                    평소 지인들과 만나서 시간을 보낼때면 <br>
                    분위기 좋은 카페나 맛집도 자주 가지만 <br>
                    전시회나 미술관등을 가는것을 좋아하는 편입니다. <br>
                    사는지역이 부산이라 다양한 전시회를 가진 못하지만  <br>
                    제가 가봤던 전시회를 간단하게나마 소개해드리려고 합니다. <br>
                  </span>
                </div>

                <label for="btn3" class="nbtn-back btn">O</label>
                <div class="line back"></div>
              </div>
            </div>

            <div class="frontpage" id="page8">
              <div class="content-right picture4">
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
      // 텍스트 내용
      text : "이 공간에는 제가 좋아하는것을 모아보았습니다.<br>편히 즐겨주셨으면 합니다.<br>(사용된 사진은 직접 찍은 사진을 활용하였습니다.)    ",
      index : 0
    }
  },
  computed : {
    // displaytext가 실행될때마다 위의 text 데이터값의 0(제일 첫 값)에서 0까지(첫 단어)
    // 를 위의 v-html속성 span태그에 넣어줌
    // 이때 computed는 값이 변화시 재 실행하기에 반복 실행됨
    displaytext() {
      return this.text.substring(0,this.index);
    } 
  },
  methods : {
    // 타이핑 시행시에 줄바꿈, 0.15초마다 타이핑 시행
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
    // 페이지 시작시 타이핑 시작
    this.typing();
  }
}
</script>
