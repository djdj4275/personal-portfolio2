<template>
    <div class="test">
        <div class="container">
            <!-- store에 있는 위도,경도등의 값을 포함한 json파일로 전시회 카드 반복생성 -->
            <div v-for="(m,i) in $store.getters.getCoordinate" :key="i">
                <div :class="[`card`, `${m.card}`]">
                    <h2>{{m.title}}</h2>
                    <p>{{m.text}}</p>
                    <div class="pic"></div>
                    <div class="dotline"></div>
                    <div class="social">
                        <font-awesome-icon class="icon" @click="facebook" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
                        <!-- 아이콘 클릭시 모달창을 열며 json안의 위도,경도값을 들고감 -->
                        <font-awesome-icon class="icon" @click="open(m.Lat,m.Lng)" icon="fa-solid fa-location-dot" />
                        <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                    </div>
                    <button></button>
                </div>
            </div>

        </div>

        <!-- 모달창 -->
        <transition name="fade">
        <div v-if="mapopen" class="black-bg">
            <div class="white-bg">
                <!-- 모달창 생성시에 위도, 경도값을 props로 들고감 -->
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
            // 모달창 열고닫는 기준인 데이터
            mapopen : false,
            // 반복문에서 들고올 위도,경도값
            lat : "",
            lng : "",
        }
    },
    methods : {
        facebook() {
        window.open('https://naver.com');
        },
        // 함수 실행시 위도,경도를 데이터의 lat, lng에넣어주고, 모달창을 열어줌
        open(Lat,Lng) {
            this.mapopen=true;
            this.lat = Lat;
            this.lng = Lng;
            currentIdx = 0;
        },
        // 함수실행시 slideshow에 접근하여 해당값만큼 픽셀이동
        moveSlide(num) {
            this.$refs.slideshow.style.transform = `translateX(${-num * 200 + "px"})`;
            currentIdx = num; 
        },
        // 왼쪽, 오른쪽 버튼 둘다 if조건문으로 첫장과 끝장일때 넘어가지않도록함
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