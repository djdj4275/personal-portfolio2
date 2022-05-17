<template>
    <div class="test">
        <div class="container">
            <div class="card">
                <h2>North</h2>
                <i class="fas fa-arrow-right"></i>
                <p>a lonely trip.</p>
                <div class="pic"></div>
                <div class="dotline"></div>
                <div class="social">
                    <font-awesome-icon class="icon" @click="facebook" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
                    <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                    <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                </div>
                <button></button>
            </div>
            <div class="card card2">
                <h2>Vauxhall</h2>
                <i class="fas fa-arrow-right"></i>
                <p>a lonely trip.</p>
                <div class="pic"></div>
                <div class="dotline"></div>
                <div class="social">
                    <font-awesome-icon class="icon" @click="facebook" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
                    <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                    <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                </div>
                <button></button>
            </div>
            <div class="card card2">
                <h2>Vauxhall</h2>
                <i class="fas fa-arrow-right"></i>
                <p>a lonely trip.</p>
                <div class="pic"></div>
                <div class="dotline"></div>
                <div class="social">
                    <font-awesome-icon class="icon" @click="facebook" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
                    <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                    <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                </div>
                <button></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods : {
      facebook() {
        window.open('https://naver.com');
      }
    }
}
</script>

<style scoped src="./viewcss/TestView.css">
</style>