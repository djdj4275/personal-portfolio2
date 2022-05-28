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

<style scoped src="./viewcss/PageView.css">
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
          read : "안녕하세요1"
        },
        {
          name: "25시",
          artist: "유디",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/4.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/25시.mp3",
          url: "https://soundcloud.com/youaredifferent/25a?ref=clipboard&p=i&c=0&si=026DB4221CD243C291AB8E418D6933C2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: true,
          read : "안녕하세요2"
        },
        {
          name: "Blah [W.Offmuseum] Prod.EARN",
          artist: "Vann",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/14.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/Blah [W. Offmuseum] Prod. EARN.mp3",
          url: "https://soundcloud.com/041yeaheyeah/blah-w-offmuseum-prod-earn?ref=clipboard&p=i&c=0&si=CAA838915F35485FB52D365DDB818B63&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: false,
          read : "안녕하세요3"
        },
        {
          name: "Loose",
          artist: "Nodsgn",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/3.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/Loose.mp3",
          url: "https://soundcloud.com/nodsgn/loose?ref=clipboard&p=i&c=0&si=2122A3F3C7C04983BF8030ECBAAA02B3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: false,
          read : "안녕하세요4"
        },
        {
          name: "Love Me",
          artist: "moonbow(문보우)",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/13.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/Love Me.mp3",
          url: "https://soundcloud.com/moodbymoonbow/love-me?ref=clipboard&p=i&c=0&si=A530B1921A8F4C9E9D57EDF98655C27E&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: true,
          read : "안녕하세요5"
        },
        {
          name: "널 탓하기엔 나도 수동적인 사람",
          artist: "brwn",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/2.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/널 탓하기엔 나도 수동적인 사람.mp3",
          url: "https://soundcloud.com/6rwn/bsg8dugasw76?ref=clipboard&p=i&c=0&si=1D29AE63F5BA4001B0758775F65B5D78&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: false,
          read : "안녕하세요6"
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
  }
};
</script>
