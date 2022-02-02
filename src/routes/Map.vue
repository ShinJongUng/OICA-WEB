<template>
  <div class="container-md">
    <div class="come-to">
      오시는 길
      <hr />
    </div>
    <div id="map"></div>

    <div class="titles">
      학교 주소
    </div>
    <div class="words">
      경상남도 양산시 물금읍 황산로 733-21 3층
    </div>
    <div class="titles">
      학교 전화번호
    </div>
    <div class="words">
      TEL) 055-387-2941
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.kakao && window.kakao.maps
      ? this.initMap()
      : this.addKakaoMapScript();
  },
  methods: {
    addKakaoMapScript() {
      const script = document.createElement("script");
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0";
      document.head.appendChild(script);
    },
    initMap() {
      var container = document.getElementById("map"); 
      var options = {
        center: new kakao.maps.LatLng(35.3351575394625, 129.01074046469583), 
        level: 2
      };

      var map = new kakao.maps.Map(container, options);
      var markerPosition  = new kakao.maps.LatLng(35.3351575394625, 129.01074046469583); //마커 표시 위치
      var marker = new kakao.maps.Marker({
      position: markerPosition
      });
      marker.setMap(map);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
#map {
  width: 100%;
  height: 500px;
  
}
.container-md{
  
  text-align: center;
  font-family: 'Nanum Gothic', sans-serif;
  margin-top: 60px;

  .come-to{
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
  }

  .titles{
    margin-top: 100px;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 32px;
    float:none;
  }
  .words{
    font-weight: 400;
    font-size: 17px;
  }
}
</style>
