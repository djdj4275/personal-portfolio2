<template>
    <div class="test">
        <div class="container">

            <div v-for="(m,i) in coordinate1" :key="i">
                <div class="card">
                    <h2>{{m.title}}</h2>
                    <p>{{m.text}}</p>
                    <div class="pic"></div>
                    <div class="dotline"></div>
                    <div class="social">
                        <font-awesome-icon class="icon" @click="facebook" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
                        <font-awesome-icon class="icon" @click="mapopen = true" icon="fa-solid fa-location-dot" />
                        <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                    </div>
                    <button></button>
                </div>
            </div>

        </div>

        <transition name="fade">
        <div v-if="mapopen" class="black-bg">
            <div class="white-bg">
                <kakao-map class="kakao" />
            </div>
        </div>
        </transition>

    </div>
</template>

<script>
import KakaoMap from '../components/KakaoMap.vue';

const coordinate = require('../assets/coordinate.json');

export default {
    components: { KakaoMap },
    data() {
        return {
            mapopen : false,
            coordinate1 : coordinate
        }
    },
    methods : {
      facebook() {
        window.open('https://naver.com');
      }
    }
}
</script>

<style scoped src="./viewcss/TestView.css">
</style>