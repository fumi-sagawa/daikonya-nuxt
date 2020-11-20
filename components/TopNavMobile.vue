<template lang="pug">
div
  //-モバイルナビゲーション
  button.mobile_menu_button_humbergur(v-on:click="flag = false")
    span 
    span 
    span 

  .mobile_navigation(v-bind:class="{open:flag}")
    .logo_area
      img(src="../assets/images/logo.png", alt="")
      img.logo_type(src="../assets/images/logotype_white.svg", alt="")
    button.mobile_menu_button#menu-close(v-on:click="flag = true")
      span.line1 
      span.line2 
    .information_area
      .drawer_navigation
        ul 
          li: nuxt-link(to="/") ホーム
          li: nuxt-link(to="dish") お料理
          li: nuxt-link(to="room") お部屋
      .drawer_information
        .tel
          p.caption 電話番号
          p.main: a(href="tel:0246-22-7015") 0246-22-7015
        .address
          p.caption 住所
          p.sub 〒970-8026
          p.main 福島県いわき市平二町目58-1
      a.map(href="https://goo.gl/maps/Y9NQDPB925fYudQs6" target="_blank") Googleマップで開く
</template>

<style scoped>



.mobile_menu_button_humbergur {
  z-index: 100;
  position: fixed;
  top: 28px;
  right: 43px;
  height: 50px;
  width: 50px;
  border: none;
  background: none;
  align-content: center;
  --humburger_color: white;
}
.mobile_menu_button_humbergur span {
  background-color: var(--humburger_color);
  display: block;
  width: 35px;
  height: 1px;
  margin: 6px 0;
}
@media (min-width: 767px) {
  .mobile_menu_button_humbergur {
    display: none;
  }
}

.mobile_navigation {
  /* visibility: hidden; */
  position: fixed;
  z-index: 100;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  background-color: #292320;
  transition: 0.4s;
}
/* ハンバーガーメニュー開封用 */
.open{
  visibility: hidden;
  opacity: 0%;
}

ul{
  padding: 0;
}

.mobile_navigation img {
  height: auto;
}
@media (min-width: 767px) {
  .mobile_navigation {
    display: none;
  }
}
.mobile_navigation .logo_area {
  position: fixed;
  top: 28px;
  left: 32px;
  display: grid;
  grid-template-columns: 45px 82px;
  column-gap: 9px;
}
.mobile_navigation .logo_area .logo_type {
  align-self: center;
}
.mobile_navigation .mobile_menu_button {
  position: fixed;
  top: 28px;
  right: 43px;
  height: 50px;
  width: 50px;
  border: none;
  background: none;
  display: grid;
  align-content: center;
}
.mobile_navigation .mobile_menu_button span {
  background-color: white;
  display: block;
  width: 35px;
  height: 1px;
}
.mobile_navigation .mobile_menu_button .line1 {
  transform: rotate(45deg);
}
.mobile_navigation .mobile_menu_button .line2 {
  transform: rotate(-45deg);
}
.mobile_navigation .information_area {
  display: grid;
  height: 100%;
  grid-template-columns: 24px repeat(12, 1fr) 24px;
  column-gap: 10px;
  grid-template-rows: 5fr 3.45fr 1.54fr;
}
.mobile_navigation .information_area p, .mobile_navigation .information_area a {
  color: white;
}
.mobile_navigation .information_area .drawer_navigation {
  grid-column: 3/-3;
  grid-row: 1/2;
  align-self: end;
  padding-bottom: 30px;
  border-bottom: white solid 1px;
}
.mobile_navigation .information_area .drawer_navigation ul {
  list-style-type: none;
  padding-inline-start: 0;
  display: grid;
  row-gap: 22px;
}
.mobile_navigation .information_area .drawer_navigation ul a {
  font-size: 24px;
}
.mobile_navigation .information_area .drawer_information {
  grid-column: 3/-3;
  grid-row: 2/3;
  margin-top: 30px;
}
.mobile_navigation .information_area .drawer_information .caption {
  font-size: 18px;
  line-height: 1;
  color: #635d55;
  margin-bottom: 10px;
}
.mobile_navigation .information_area .drawer_information .tel .main {
  font-size: 28px;
  line-height: 1;
}
.mobile_navigation .information_area .drawer_information .address {
  margin-top: 20px;
}
.mobile_navigation .information_area .drawer_information .address .sub {
  font-size: 16px;
  line-height: 1;
  margin-bottom: 8px;
}
.mobile_navigation .information_area .drawer_information .address .main {
  font-size: 16px;
  line-height: 1;
}
.mobile_navigation .information_area .map {
  display: inline-block;
  width: 100%;
  padding: 10px 0px;
  grid-column: 3/-3;
  grid-row: 3/4;
  align-self: start;
  justify-self: center;
  text-align: center;
  border: solid 1px white;
  font-size: 20px;
  letter-spacing: 0.1rem;
  font-family: sans-serif;
}
</style>


<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}


export default {
  data() {
    return {
      flag: true,
    }
  },
  mounted() {
    this.turn_humburger_color()
    // this.invisible()
  },
  methods:{
    turn_humburger_color(){
      gsap.to(".mobile_menu_button_humbergur", { // 動かしたい要素は.a
            // x: 500, // 右方向に500動く
            "--humburger_color": "#343434",
            duration: 0.4, // アニメーションは1秒間
            scrollTrigger: {
              trigger: ".hero_top", // 要素".a"がビューポートに入ったときにアニメーション開始
              start: 'bottom-=20px top', // アニメーション開始位置
              end:  'bottom-=20px top',
              toggleActions: "play none reverse none",
              // markers: true
            }
          })
    },
  }
}


</script>