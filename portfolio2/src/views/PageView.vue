<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
    <div class="page">
        <div class="wrapper" id="app">
        <div class="player">
        <div class="player__top">
            <div class="player-cover">
            <transition-group :name="transitionName">
                <div class="player-cover__item" v-if="i === currentTrackIndex" 
                :style="{ backgroundImage: `url(${track.cover})` }"
                v-for="(track, i) in tracks" :key="i"></div>
            </transition-group>
        </div>
        <div class="player-controls">
            <div class="player-controls__item -favorite" 
            :class="{ active : currentTrack.favorited }" @click="favorite">
                <svg class="icon">
                <use xlink:href="#icon-heart-o"></use>
                </svg>
            </div>
            <a :href="currentTrack.url" target="_blank" class="player-controls__item">
                <svg class="icon">
                <use xlink:href="#icon-link"></use>
                </svg>
            </a>
            <div class="player-controls__item" @click="prevTrack">
                <svg class="icon">
                <use xlink:href="#icon-prev"></use>
                </svg>
            </div>
            <div class="player-controls__item" @click="nextTrack">
                <svg class="icon">
                <use xlink:href="#icon-next"></use>
                </svg>
            </div>
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
            <div class="album-info" v-if="currentTrack">
              <div class="album-info__name">{{ currentTrack.artist }}</div>
              <div class="album-info__track">{{ currentTrack.name }}</div>
            </div>
            <div class="progress__duration">{{ duration }}</div>
          </div>
          <div class="progress__bar" @click="clickProgress">
            <div class="progress__current" :style="{ width : barWidth }"></div>
          </div>
          <div class="progress__time">{{ currentTime }}</div>
        </div>
        <div v-cloak></div>
      </div>
    </div>

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
            audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null,
      tracks: [
        {
          name: "잘가라 구름아",
          artist: "이병현",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/1.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/잘가라 구름아.mp3",
          url: "https://soundcloud.com/leebyounghyeon/9p93sjl9gzdb?ref=clipboard&p=i&c=0&si=030BCD62B0DE40E2A66C0965C9B45296&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: false
        },
        {
          name: "25시",
          artist: "유디",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/4.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/25시.mp3",
          url: "https://soundcloud.com/youaredifferent/25a?ref=clipboard&p=i&c=0&si=026DB4221CD243C291AB8E418D6933C2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: true
        },
        {
          name: "Blah [W.Offmuseum] Prod.EARN",
          artist: "Vann",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/14.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/Blah [W. Offmuseum] Prod. EARN.mp3",
          url: "https://soundcloud.com/041yeaheyeah/blah-w-offmuseum-prod-earn?ref=clipboard&p=i&c=0&si=CAA838915F35485FB52D365DDB818B63&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: false
        },
        {
          name: "Loose",
          artist: "Nodsgn",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/3.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/Loose.mp3",
          url: "https://soundcloud.com/nodsgn/loose?ref=clipboard&p=i&c=0&si=2122A3F3C7C04983BF8030ECBAAA02B3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: false
        },
        {
          name: "Love Me",
          artist: "moonbow(문보우)",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/13.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/Love Me.mp3",
          url: "https://soundcloud.com/moodbymoonbow/love-me?ref=clipboard&p=i&c=0&si=A530B1921A8F4C9E9D57EDF98655C27E&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: true
        },
        {
          name: "널 탓하기엔 나도 수동적인 사람",
          artist: "brwn",
          cover: "https://raw.githubusercontent.com/djdj4275/source-file/master/2.jpg",
          source: "https://raw.githubusercontent.com/djdj4275/source-file/master/노래/널 탓하기엔 나도 수동적인 사람.mp3",
          url: "https://soundcloud.com/6rwn/bsg8dugasw76?ref=clipboard&p=i&c=0&si=1D29AE63F5BA4001B0758775F65B5D78&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: false
        }]
        }
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
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
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
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
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
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
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
};
</script>
