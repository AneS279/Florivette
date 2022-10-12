<script setup>
  var images = [
  'src/assets/Background 1 - Stage.jpg',
  'src/assets/Background 2.jpeg',
  'src/assets/Background 3.jpeg',
  'src/assets/Background 4.jpg'
  ]
  function setAllDotsToGray(){
    document.querySelector('#dot0').style.background = '#bbb'
    document.querySelector('#dot1').style.background = '#bbb'
    document.querySelector('#dot2').style.background = '#bbb'
    document.querySelector('#dot3').style.background = '#bbb'
  }
  function changeBackGround(index){
    setAllDotsToGray()
    document.querySelector('#background_Image').setAttribute("style", "background: url('"+images[index]+"') no-repeat center center fixed;-webkit-background-size: cover; -moz-background-size: cover;-o-background-size: cover")
    document.querySelector('#dot' + index).style.background = '#0056F7'
  }
</script>
    <template>
    
  <div id="background_Image">
    <div id="dots">
      <span class="dot" id="dot0" v-on:click="changeBackGround(0)"></span>
      <span class="dot" id="dot1" v-on:click="changeBackGround(1)"></span>
      <span class="dot" id="dot2" v-on:click="changeBackGround(2)"></span>
      <span class="dot" id="dot3" v-on:click="changeBackGround(3) "></span>
    </div>
  </div>
</template>

  <style scoped>
.dot:before,
.dot:after {
  transition: 0.5s ease-in-out;
}
  #dots{
    flex-direction: row;
    position: relative;
    display: flex;
    bottom: -90vh;
    justify-content: center;
  }
  .dot:hover{
    transform: scale(1.5);
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
  .dot {
  height: 20px;
  margin: 5px;
  width: 20px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
  #background_Image {
    background: url('@/assets/Background 1 - Stage.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;    
    background-size: cover;
    min-height: 100%;
    min-width: 1024px;
  
    /* Set up proportionate scaling */
    width: 100%;
    height: auto;
  
    /* Set up positioning */
    position: fixed;
    top: 0;
    left: 0;
    }
    @media screen and (max-width: 1024px) {
  
      /* Specific to this particular image */
      img.bg {
        left: 50%;
        margin-left: -512px;
        /* 50% */
      }
    }

  #background_Image:after,
  #background_Image:before{
    transition: 0.5s ease-in-out;
  }
  </style>
