<template>
    <div class="test">
        <div class="container">

            <div v-for="(m,i) in $store.getters.getCoordinate" :key="i">
                <div :class="[`card`, `${m.card}`]">
                    <h2>{{m.title}}</h2>
                    <p>{{m.text}}</p>
                    <div class="pic"></div>
                    <div class="dotline"></div>
                    <div class="social">
                        <font-awesome-icon class="icon" @click="facebook" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
                        <font-awesome-icon class="icon" @click="open(m.Lat,m.Lng)" icon="fa-solid fa-location-dot" />
                        <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                    </div>
                    <button></button>
                </div>
            </div>

        </div>

        <transition name="fade">
        <div v-if="mapopen" class="black-bg">
            <div class="white-bg">
                <kakao-map :Lat="lat" :Lng="lng" class="kakao" />

                <div class="slideShow">
                    <button @click="moveleft" class="slideShow_left">&lang;</button>
                    <div class="slideShow_itembox">
                        <ul class="slideShow_items" ref="slideshow">
                            <li><img class= "slideShow_item" src="../assets/1.jpg" /></li>
                            <li><img class= "slideShow_item" src="../assets/2.jpg" /></li>
                            <li><img class= "slideShow_item" src="../assets/3.jpg" /></li>
                            <li><img class= "slideShow_item" src="../assets/4.jpg" /></li>
                        </ul>
                    </div>
                    <button @click="moveright" class="slideShow_right">&rang;</button>
                </div>

                <button @click="mapopen=false" class="kakaooff">X</button>
            </div>
        </div>
        </transition>

    </div>
</template>

<script>
import KakaoMap from '../components/KakaoMap.vue';

    let currentIdx = 0; //현재 슬라이드 index 
    const slideCount = 4; // 슬라이드 개수

export default {
    components: { KakaoMap },
    data() {
        return {
            mapopen : false,
            lat : "",
            lng : "",
        }
    },
    methods : {
        facebook() {
        window.open('https://naver.com');
        },
        open(Lat,Lng) {
            this.mapopen=true;
            this.lat = Lat;
            this.lng = Lng;
        },
        moveSlide(num) {
            this.$refs.slideshow.style.transform = `translateX(${-num * 200 + "px"})`;
            console.log(this.$refs.slideshow.style.trasform);
            currentIdx = num; 
        },
        moveleft() {
            if (currentIdx !== 0) 
                this.moveSlide(currentIdx - 1);
        },
        moveright() {
            if (currentIdx !== slideCount - 1) {
            this.moveSlide(currentIdx + 1);
            }
        },
    },
}
</script>

<style scoped src="./viewcss/TestView.css">
</style>