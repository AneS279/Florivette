<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
import Background_Image from './First_Page.vue'
</script>
<template>
<input id="menu-hamburguer" type="checkbox" @click="show = !show"/>
<label for="menu-hamburguer">
  <div class="menu">
    <span class="hamburguer"></span>
    <div class="options" v-if="show">
      <slot />
    </div>
  </div>
</label>
</template>

<style>
@import url('http://fonts.cdnfonts.com/css/franklin-gothic-demi-cond');
*,
*:before,
*:after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.menu {
  background: rgba(255, 255, 255, 0.067);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: fixed;
  left: 25px;
}

.options{
  background-color: rgba(255, 255, 255, 0.067);
  color: #fff;
  top: 75px;
  /* left: 0px; */
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Franklin Gothic Demi Cond', sans-serif;
  font-size: 150%;
  position: absolute;
  transition: 1s ease-in-out;
}
.hamburguer {
  position: relative;
  display: block;
  background: rgb(254, 254, 254);
  width: 30px;
  height: 5px;
  top: 29px;
  left: 15px;
  transition: 0.5s ease-in-out;
}

.hamburguer:before,
.hamburguer:after {
  background: rgb(254, 254, 254);
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 0.5s ease-in-out;
}

.hamburguer:before {
  top: -10px;
}

.hamburguer:after {
  bottom: -10px;
}
.hamburguer:hover{
  cursor: pointer;
}
input {
  display: none;
}

input:checked ~ label .hamburguer {
  transform: rotate(45deg);
}

input:checked ~ label .hamburguer:before {
  transform: rotate(90deg);
  top: 0;
}

input:checked ~ label .hamburguer:after {
  transform: rotate(90deg);
  bottom: 0;
}
</style>
