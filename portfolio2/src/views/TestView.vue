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
                <button @click="mapopen=false" class="kakaooff">X</button>
            </div>
        </div>
        </transition>

    </div>
</template>

<script>
import KakaoMap from '../components/KakaoMap.vue';

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
        }
    }
}
</script>

<style scoped src="./viewcss/TestView.css">
</style>