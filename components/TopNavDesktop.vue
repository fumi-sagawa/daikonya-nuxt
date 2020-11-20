<template lang="pug">
  //- デスクトップナビゲーション
  nav.top_desktop_navigation
    ul 
      li: nuxt-link(to="/") ホーム
      li: nuxt-link(to="dish") お料理
      li: nuxt-link(to="room") お部屋
    ul
      li: nuxt-link(v-scroll-to="'#access'" to="#") アクセス
      li: nuxt-link(v-scroll-to="'#tel_number'" to="#") ご予約
</template>

<style scoped>


.top_desktop_navigation {
  z-index: 100;
  position: fixed;
  top: 76px;
  right: 76px;
  display: grid;
  grid-auto-flow: column;
  gap: 40px;
  --nav_color_black: white;
}
.top_desktop_navigation ul {
  display: grid;
  grid-auto-flow: column;
  list-style-type: none;
  gap: 40px;
}
.top_desktop_navigation ul:nth-child(2) {
  border-width: 1px;
  border-color: var(--nav_color_black);
  border-left-style: solid;
}
.top_desktop_navigation ul li {
  transition: 0.4s;
  border-bottom: solid 1px rgba(0, 0, 0, 0);
}
.top_desktop_navigation ul li:hover {
  border-bottom: solid 1px var(--nav_color_black);
}
.top_desktop_navigation ul li a {
  color: var(--nav_color_black);
}
@media (max-width: 767px) {
  .top_desktop_navigation {
    display: none;
  }
}
</style>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  layout: 'top',
  mounted() {
    this.turn_nav_color()
    // this.invisible()
  },
  methods:{
    turn_nav_color(){
      gsap.to(".top_desktop_navigation", { // 動かしたい要素は.a
            // x: 500, // 右方向に500動く
            "--nav_color_black": "#343434",
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
    // invisible(){
    //   gsap.to(".top_desktop_navigation", { // 動かしたい要素は.a
    //         // x: 500, // 右方向に500動く
    //         duration: 0.4, // アニメーションは1秒間
    //         autoAlpha: 0,
    //         scrollTrigger: {
    //           trigger: "footer", // 要素".a"がビューポートに入ったときにアニメーション開始
    //           start: 'top bottom', // アニメーション開始位置
    //           end:  'top bottom',
    //           toggleActions: "play none reverse none",
    //           // markers: true
    //         }
    //       })
    // },
  }
}
</script>