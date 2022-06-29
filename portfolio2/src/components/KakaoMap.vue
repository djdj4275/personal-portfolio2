<template>
    <!-- 카카오맵 전체 박스 -->
    <div id="map"></div> 
</template>

<script> 
export default { 
    props : [ 
        "Lat", "Lng" // props로 받아올 위도 경도 값
    ],
    data() {
        return {
        };
    },
    methods : { 
        initMap() { // 맵 객체에
            const container = document.getElementById('map'); // 생성될 위 div
            const options = { // 위도,경도값 / 확대 가능횟수 (5번)
                center: new kakao.maps.LatLng(this.Lat, this.Lng),
                level: 5,
            };  // 카카오맵에 접근하여 div와 옵션값 넣음 
            const map = new kakao.maps.Map(container, options); 

            // 카카오맵 마커를 위의 map의 센터에 위치시킴
            // 마커추가하려면 객체를 아래와 같이 하나 만든다.
            const marker = new kakao.maps.Marker({
                position: map.getCenter()
            });
            marker.setMap(map); // 마커를 map기준으로 생성
        },
        addScript() { // 스크립트에 initMap 함수를 넣어 api키로 실행시킴
            const script = document.createElement('script');
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f3fb8613a0fed156a637727856ea6ad2';
            document.head.appendChild(script)
        }
    },
    mounted() { // 카카오맵 컴포넌트 마운트시에 메소드 조건 실행
        window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
    },
}
</script> 

<style scoped>
#map {
    width: 500px;
    height: 600px;
    border: 1px solid black;
    box-shadow: 5px 5px 10px gray;
    transition: all 0.5s;
} 
@media screen and (max-width: 1024px) {
    #map {
        width: 300px;
        height: 400px;
    } 
}
</style>


