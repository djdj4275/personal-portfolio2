<template> 
    <div id="map"></div> 
</template>

<script> 
export default { 
    props : [
        "Lat", "Lng"
    ],
    data() {
        return {
            map : null,
        };
    },
    methods : { 
        initMap() { 
            const container = document.getElementById('map'); 
            const options = { 
                center: new kakao.maps.LatLng(this.Lat, this.Lng),
                level: 5,
            }; 
            const map = new kakao.maps.Map(container, options); 

            // 마커추가하려면 객체를 아래와 같이 하나 만든다.
            const marker = new kakao.maps.Marker({
                position: map.getCenter()
            });
            marker.setMap(map);
        },
        addScript() {
            const script = document.createElement('script');
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f3fb8613a0fed156a637727856ea6ad2';
            document.head.appendChild(script)
        }
    },
    mounted() { 
        window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
    },
}
</script> 

<style scoped>
#map {
    width: 500px;
    height: 500px;
    border: 1px solid black;
    box-shadow: 5px 5px 10px gray;
} 
</style>


