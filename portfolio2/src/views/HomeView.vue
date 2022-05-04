<template>
  <div class="home">

    <div id="book">
          <input type="checkbox" id="btn1">
          <input type="checkbox" id="btn2">
          <input type="checkbox" id="btn3">

          <div class="frontpage" id="page1">
            <h2>첫 번째 페이지...</h2>
            <span>This is first page...</span>
            <label for="btn1" class="nbtn-front">N</label>
          </div>
          
          <div class="backpage" id="page2">
            <h2>두 번째 페이지...</h2>
            <span>This is second page...</span>
            <label for="btn1" class="nbtn-back">N</label>
          </div>

          <div class="frontpage" id="page3">
            <h2>세 번째 페이지...</h2>
            <span>This is third page...</span>
            <label for="btn2" class="nbtn-front">N</label>
          </div>

          <div class="backpage" id="page4">
            <h2>네 번째 페이지...</h2>
            <span>This is second page...</span>
            <label for="btn2" class="nbtn-back">N</label>
          </div>

          <div class="frontpage" id="page5">
            <h2>다섯 번째 페이지...</h2>
            <span>This is first page...</span>
            <label for="btn3" class="nbtn-front">N</label>
          </div>
          
          <div class="backpage" id="page6">
            <h2>여섯 번째 페이지...</h2>
            <span>This is second page...</span>
            <label for="btn3" class="nbtn-back">N</label>
          </div>
    </div>
  
  </div>

</template>

<style scoped>
* {
  margin: 0;
}
.home {
  position: relative;
  width: 100%;
  height: 1000px;
}

#btn1 {
  display: none;
}
#btn2 {
  display: none;
}
#btn3 {
  display: none;
}
#page1 {
  z-index: 10;
}
#page2 {
  z-index: 9;
}
#page3 {
  z-index: 8;
}
#page4 {
  z-index: 7;
}
#page5 {
  z-index: 6;
}
#page6 {
  z-index: 5;
}
.nbtn-front {
  position: absolute;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border : 1px solid black;
  border-radius: 50%;
  right: 5%;
  top: 45%;
  text-align: center;
}
.nbtn-back {
  position: absolute;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border : 1px solid black;
  border-radius: 50%;
  left: 5%;
  top: 45%;
  text-align: center;
}
#book {
  position: relative;
  width: 800px;
  height: 500px;
}

.frontpage {
  top : 70%;
  left: 90%;
  position: absolute;
  background-color: white;
  width: 80%;
  height: 100%;
  transform-origin: left center;
  transition-duration: 1.5s;
  backface-visibility: hidden;
}
.backpage {
  top : 70%;
  left : 10%;
  position: absolute;
  background-color: white;
  width: 80%;
  height: 100%;
  transform-origin: right center;
  transform: rotateY(180deg);
  transition-duration: 1.5s;
}

#btn1:checked + input + input + #page1{
  transform: rotateY(-180deg);
  opacity: 1;
}

#btn1:checked + input + input + div + #page2{
  transform: rotateY(0deg);
  opacity: 1;
}

#btn2:checked + input + div + div + #page3{
  transform: rotateY(-180deg);
  opacity: 1;
}

#btn2:checked + input + div + div + div + #page4{
  transform: rotateY(0deg);
  opacity: 1;
}

#btn2:checked + input + div + #page2 {
  z-index: 1;
}

#btn3:checked + div + div + div + div + #page5{
  transform: rotateY(-180deg);
  opacity: 1;
}

#btn3:checked + div + div + div + div + div + #page6{
  transform: rotateY(0deg);
  opacity: 1;
}

#btn3:checked + div + div + div + #page4 {
  z-index: 2;
}


</style>

<script>
export default {
  name: 'HomeView',
}
</script>
