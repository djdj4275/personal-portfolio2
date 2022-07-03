<template>
<!-- v-if문과 v-fot 동시사용 주석문 -->
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
    <div class="page">

      <div class="wrapper" id="app">
        <div class="player">

          <div class="player__top">

            <div class="player-cover">
              <!-- 앨범 커버 image -->
              <transition-group :name="transitionName">
                <div class="player-cover__item" v-if="i === currentTrackIndex" 
                :style="{ backgroundImage: `url(${track.cover})` }"
                v-for="(track, i) in tracks" :key="i"></div>
              </transition-group>
              <!-- 음원 설명이 적힐 장소 -->
              <div class="player-cover__item_overlay" v-if="i === currentTrackIndex"
                v-for="(track, i) in tracks" :key="i">{{track.read}}</div>

            </div>

            <div class="player-controls">
              <!-- 좋아요 버튼 -->
              <div class="player-controls__item -favorite" 
              :class="{ active : currentTrack.favorited }" @click="favorite">
                  <svg class="icon">
                  <use xlink:href="#icon-heart-o"></use>
                  </svg>
              </div>
              <!-- 링크 이동 버튼 -->
              <a :href="currentTrack.url" target="_blank" class="player-controls__item">
                  <svg class="icon">
                  <use xlink:href="#icon-link"></use>
                  </svg>
              </a>
              <!-- 뒤로가기 버튼 -->
              <div class="player-controls__item" @click="prevTrack">
                  <svg class="icon">
                  <use xlink:href="#icon-prev"></use>
                  </svg>
              </div>
              <!-- 앞으로가기 버튼 -->
              <div class="player-controls__item" @click="nextTrack">
                  <svg class="icon">
                  <use xlink:href="#icon-next"></use>
                  </svg>
              </div>
              <!-- 플레이 버튼 -->
              <div class="player-controls__item -xl js-play" @click="play">
                  <svg class="icon">
                  <use xlink:href="#icon-pause" v-if="isTimerPlaying"></use>
                  <use xlink:href="#icon-play" v-else></use>
                  </svg>
              </div>
            </div>

          </div>

          <div class="progress" ref="progress">
            <div class="progress__top">
              <!-- 앨범 정보와 진행바 -->
              <div class="album-info" v-if="currentTrack">
                <div class="album-info__name">{{ currentTrack.artist }}</div>
                <div class="album-info__track">{{ currentTrack.name }}</div>
              </div>
              <div class="progress__duration">{{ duration }}</div>
            </div>
            <!-- 노래 진행바 -->
            <div class="progress__bar" @click="clickProgress">
              <div class="progress__current" :style="{ width : barWidth }"></div>
            </div>
            <!-- 노래 전체시간 -->
            <div class="progress__time">{{ currentTime }}</div>
          </div>

        </div>
      </div>

      <!-- 폰트어썸 아이콘 들고옴 use.xlink:href로 재사용가능 -->
      <svg xmlns="http://www.w3.org/2000/svg" hidden xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-heart-o" viewBox="0 0 32 32">
            <title>icon-heart-o</title>
            <font-awesome-icon icon="fa-solid fa-heart" />
          </symbol>
          <symbol id="icon-pause" viewBox="0 0 32 32">
            <title>icon-pause</title>
            <font-awesome-icon icon="fa-solid fa-circle-pause" />
          </symbol>
          <symbol id="icon-play" viewBox="0 0 32 32">
            <title>icon-play</title>
            <font-awesome-icon icon="fa-solid fa-circle-play" />
          </symbol>
          <symbol id="icon-link" viewBox="0 0 32 32">
          <title>link</title>
            <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
          </symbol>
          <symbol id="icon-next" viewBox="0 0 32 32">
            <title>next</title>
            <font-awesome-icon icon="fa-solid fa-forward-step" />
          </symbol>
          <symbol id="icon-prev" viewBox="0 0 32 32">
            <title>prev</title>
            <font-awesome-icon icon="fa-solid fa-backward-step" />
          </symbol>
        </defs>
      </svg>

    </div>
</template>

<style scoped src="./viewcss/PlayListView.css">
</style>

<script>
export default {
    data : function() {
        return {
      audio: null, // 오디오 데이터
      barWidth: null, // 진행바 넓이
      duration: null, // 진행 시간
      currentTime: null, // 노래 전체시간
      isTimerPlaying: false, // 노래 시작유무
      currentTrack: null, // 노래 정보
      currentTrackIndex: 0, // 노래 정보 갯수
      transitionName: null, // 트랜지션 이름 (변경시 사용)
      tracks: [ // 각각의 노래 정보 (가공할 데이터)
        {
          name: "잘가라 구름아",
          artist: "이병현",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/1.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/잘가라 구름아.mp3",
          url: "https://soundcloud.com/leebyounghyeon/9p93sjl9gzdb?ref=clipboard&p=i&c=0&si=030BCD62B0DE40E2A66C0965C9B45296&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: false,
          read : "음 저 구름들은 다 어디로 가는지 정말 궁금해 어쩌면 너도 같은 곳을 보고는 있지 않을까 하늘엔 널 닮은 구름만 가득해 바라보다 나 바란다면 너와 마주할 수는 없는 걸까 텅 빈 거리 서걱이는 맘 바래진 기억만이 남아 잘 가라 구름아 널 닮은 구름아 난 같은 자리에 있지만 온 세상 돌아라 그 위에 하늘과 난 같은 자리에 있지만 텅 빈 거리 서걱이는 맘 저무는 기억만이 남아 잘 가라 구름아 널 닮은 구름아 난 같은 자리에 있지만 온 세상 돌아라 그 위에 하늘과 난 같은 자리에 있지만 우 바라볼 수밖에 없는 나 저 구름을 타고 날 데려가 잘 가라 구름아 널 닮은 구름아 난 같은 자리에 있지만 온 세상 돌아라 그 위에 하늘과 난 같은 자리에 있지만 음"
        },
        {
          name: "25시",
          artist: "유디",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/4.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/25시.mp3",
          url: "https://soundcloud.com/youaredifferent/25a?ref=clipboard&p=i&c=0&si=026DB4221CD243C291AB8E418D6933C2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: true,
          read : "난 밀린 잠을자 오랜만에 깨지않아서 밀린 잠을자 내 꿈이 오래기억나게 또 밀린 잠을 자는동안 내꿈이 이뤄지네 하루 반나절을 꿈속에 살고있어 어때 난 밀린 잠을 자고 있어 요즘 생각이 너무 많아 내가 원했던 삶이 이게 맞나 싶기도 하고 돈을 벌고나서 첫째로 하고싶은게 있다면 엄마 몰래 깜짝이벤트 현금 다발을 바쳐 25시간을 살고있는거 같아 요즘은 잠도 안와 시간을 버리는가 싶기도 하고 남들처럼 평범하게 지내고있는가 하면 아무것도 하지 못해 우는 시간도 아까워 i`m fine yeah 난 진심을 원해 주변 래퍼 들 을 보면 괜히 자격지심 땜에 맘이 편하지가 않아 나도 돈이 많았다면 내가 노력하는 만큼 이뤄지는게 있다면 요즘 교회도 안나가 간절한게 없나봐 또 요즘 생각이 넘 많아 근데 하는게 없잖아 그냥 이렇게 지내다 20살이 되겠지 뭐 지금이순간 보다 숨통좀 트이겠지 뭐 uh 난 밀린 잠을자 오랜만에 깨지않아서 밀린 잠을자 내 꿈이 오래기억나게 또 밀린 잠을 자는동안 내꿈이 이뤄지네 하루 반나절을 꿈속에 살고있어 어때 i feel 'i know' un to the dy 내가 지은 이름처럼 알지 특별한 사람이 되야해 거울에 대고 마치 최면을 걸듯이 말해 하루는 역시나 짧지 근데 밀려있는건 잠 뿐만이 아니라 같이 음악 하고있는 종빈이랑 작업해야해 계속 랩을하는 성빈이랑 랩을해야해 옆에 종민이랑 같이 또또 랩을해야돼 그니까 민규야 너 다시 시흥 놀러와야돼 i feel 'i know' 내가 전에 말했잖아 성공 해야만해 그래 내친구들 자랑스럽게 또 엄마 주변 아줌마들이 부러워죽을만큼 내 목에 피가 터지고 당장 쓰러질 만큼 살면서 이토록 미친듯 해본적없었거든 그니까 한번만 믿고 뒤를 봐두랬거든 동명아 형이 말한거처럼 음악으로 비뤄 먹지 못한대도 음악 계속 해야하거든 난 밀린 잠을자 오랜만에 깨지않아서 밀린 잠을자 내 꿈이 오래기억나게 또 밀린 잠을 자는동안 내꿈이 이뤄지네 하루 반나절을 꿈속에 살고있어 어때 i feel 'i know'"
        },
        {
          name: "Blah [W.Offmuseum] Prod.EARN",
          artist: "Vann",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/14.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/Blah [W. Offmuseum] Prod. EARN.mp3",
          url: "https://soundcloud.com/041yeaheyeah/blah-w-offmuseum-prod-earn?ref=clipboard&p=i&c=0&si=CAA838915F35485FB52D365DDB818B63&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: false,
          read : "낯선 향기를 아직 기억해 잊을 수 없어 오늘도 잠을 설쳐 난 갈수록 쌓여가는 부재중 나의 calling 얽힌 기억들이 나를 바닥으로 falling Back in my dream and feel like drinking 역겨움에 속을 전부 비워내 봐도 Back in my dream and why I’m waiting 짙은 안개 속을 헤매고 있어 긴 시간이 지나도 결국 다시 돌아가 너를 지우려 해도 지워지지 않는걸 낯선 너의 향기와 그때 네 표정 내게 자꾸 맴돌아 하루는 먼데 나는 하나 모른 척 너를 이해하는 척 떨어지는 눈물은 감추기에 바빴어 That's what makes me drives me crazy Tell me why Teach me baby bye bye bye bye 오늘도 난 따따따따라따 술에 취해 blah blah blah blah blah Tell me why Teach me baby bye bye bye bye 오늘도 난 따따따따라따 술에 취해 blah blah blah Yeah You're far away 묻고 싶었어 How was ur day Girl there's nothing to say 네게 무슨 말을 뱉어 너 때문에 남겨진 기억이 da dara ra da 많은 것들이 떠나간 내게 왜 이러는데 긴 시간이 지나도 결국 다시 돌아가 너를 지우려 해도 지워지지 않는걸 낯선 너의 향기와 그때 네 표정 내게 자꾸 맴돌아 하루는 먼데 나는 하나 모른 척 너를 이해하는 척 떨어지는 눈물은 감추기에 바빴어 That's what makes me drives me crazy Tell me why Teach me baby bye bye bye bye 오늘도 난 따따따따라따 술에 취해 blah blah blah blah blah Tell me why Teach me baby bye bye bye bye 오늘도 난 따따따따라따 술에 취해 blah blah blah"
        },
        {
          name: "Loose",
          artist: "Nodsgn",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/3.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/Loose.mp3",
          url: "https://soundcloud.com/nodsgn/loose?ref=clipboard&p=i&c=0&si=2122A3F3C7C04983BF8030ECBAAA02B3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: false,
          read : "숨이 막혀 다시 한숨 뱉어봐도 모르겠어 마음이 어딜 가는지도 No 무너져 내려 매일 마다 그런 눈으로 보지마 무서워 스스로 상처 내는 게 내가 나를 외면하고 아무것도 안 보이는 곳에서 혼자 웅크리고 있어 숨이 막혀 다시 한숨 뱉어봐도 모르겠어 마음이 어딜 가는지도 No I loose my mind 무의미하게만 느껴져 전부 다 재미없어 I loose my mind 아무 힘이 없어 난 I just want you know 난 아무것도 아닌듯해 허우적대다 잠들어 기대기만을 원해 아직도 안 보여 너에 비해 난 너무 작게만 느껴지는걸 But I need you I just want you Now I can not 숨이 막혀 다시 한숨 뱉어봐도 모르겠어 마음이 어딜 가는지도 No I loose my mind 무의미하게만 느껴져 전부 다 재미없어 I loose my mind 아무 힘이 없어 난 I just want you know I loose my mind 무의미하게만 느껴져 전부 다 재미없어 I loose my mind 아무 힘이 없어 난 I just want you know"
        },
        {
          name: "널 탓하기엔 나도 수동적인 사람",
          artist: "brwn",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/2.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/널 탓하기엔 나도 수동적인 사람.mp3",
          url: "https://soundcloud.com/6rwn/bsg8dugasw76?ref=clipboard&p=i&c=0&si=1D29AE63F5BA4001B0758775F65B5D78&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: false,
          read : "영혼을 씻어내려 긴장감은 반복 반복 무너진 건물에서 상처입은 팔을 뻗고 I got issues but I don't mention for now. I got issues but I don't mention for now. 형식적인 말투 질투가 쌓여가 언급하기 싫은 모습 고갤 돌릴까 꽤나 열정적인 몇개월의 사이가 다야 탓하기엔 나도 수동적인 사람 영혼을 씻어내려 긴장감은 반복 반복 무너진 건물에서 상처입은 팔을 뻗고 I got issues but I don't mention for now. I got issues but I don't mention for now. 하나씩 박힌 울타리를 걷어보려 표현 해도 싫다며 땀이 식어 끈적거리는 피부 피곤해 반응 하지 않아도 돼 거릴 둬 조금은 I can`t blame 뒤집은 옷 무너진 신뢰 불안정 다 말 실수는 연속성 헌신같은 건 그만 하자 영혼을 씻어내려 긴장감은 반복 반복 무너진 건물에서 상처입은 팔을 뻗고 I got issues but I don't mention for now. I got issues but I don't mention for now. 영혼을 씻어내려 긴장감은 반복 반복 무너진 건물에서 상처입은 팔을 뻗고 I got issues but I don't mention for now. I got issues but I don't mention for now. 탓하기엔 나도 수동적인 사람 영혼을 씻어내려 긴장감은 반복 반복 무너진 건물에서 상처입은 팔을 뻗고 I got issues but I don't mention for now. I got issues but I don't mention for now. 탓하기엔 나도 수동적인 사람"
        }]
        }
  },
  methods: {
    // 플레이버튼 클릭시 오디오객체 플레이, 시작상태 true/false
    play() { 
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    // 노래의 전체시간과 진행시간 분,초 계산
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    // 진행바 부분 클릭시 플레이시작, 바 퍼센티지 계산
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    // 진행바 클릭시에 값 반환후 updateBar 실행
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    // 뒤로감과 동시에 트랜지션 추가, 플레이어 리셋
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    // 앞으로감과 동시에 트랜지션 추가, 플레이어 리셋
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    // 모든값 리셋
    resetPlayer() {
      this.barWidth = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    // 좋아요버튼 누르기
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  }, 
  created() {
    let vm = this; // 현재 오디오 지정
    this.currentTrack = this.tracks[0]; // 생성시에 트랙에 첫값을 새로 배열생성
    this.audio = new Audio(); // 오디오 객체 생성
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() { // 현재 재생위치 변경시 generateTime 실행
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() { // 음원 데이터 로드시 generateTime 실행
      vm.generateTime();
    };
    this.audio.onended = function() { // 음원 종료시에 generateTime 실행
      vm.nextTrack(); // 다음곡으로 넘김
      this.isTimerPlaying = true; // 바로 다시 플레이어 자동 실행
    };
  },
  destroyed() {
    this.audio.pause();
  }
};
</script>
