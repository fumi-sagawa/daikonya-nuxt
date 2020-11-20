<template lang="pug">
  //- デスクトップナビゲーション
  nav.desktop_navigation
    ul 
      li: nuxt-link(to="/") ホーム
      li: nuxt-link(to="dish") お料理
      li: nuxt-link(to="room") お部屋
    ul
      li: nuxt-link(v-scroll-to="'#access'" to="#") アクセス
      li: nuxt-link(v-scroll-to="'#tel_number'" to="#") ご予約
</template>

<style scoped>
.desktop_navigation {
  z-index: 100;
  position: fixed;
  top: 76px;
  right: 76px;
  display: grid;
  grid-auto-flow: column;
  gap: 40px;
}
.desktop_navigation ul {
  display: grid;
  grid-auto-flow: column;
  list-style-type: none;
  gap: 40px;
}
.desktop_navigation ul:nth-child(2) {
  border-width: 1px;
  border-color: #343434;
  border-left-style: solid;
}
.desktop_navigation ul li {
  transition: 0.4s;
  border-bottom: solid 1px rgba(0, 0, 0, 0);
}
.desktop_navigation ul li:hover {
  border-bottom: solid 1px #343434;
}
.desktop_navigation ul li a {
  color: #343434;
}
@media (max-width: 769px) {
  .desktop_navigation {
    display: none;
  }
}
</style>


<script>
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// if (process.client) {
//   gsap.registerPlugin(ScrollTrigger)
// }

// export default {
//   layout: 'top',
//   mounted() {
//     this.invisible()
//   },
//   methods:{
//     invisible(){
//       gsap.to(".desktop_navigation", { // 動かしたい要素は.a
//             // x: 500, // 右方向に500動く
//             duration: 0.4, // アニメーションは1秒間
//             autoAlpha: 0,
//             scrollTrigger: {
//               trigger: "footer", // 要素".a"がビューポートに入ったときにアニメーション開始
//               start: 'top bottom', // アニメーション開始位置
//               end:  'top bottom',
//               toggleActions: "play none reverse none",
//               // markers: true
//             }
//           })
//     },
//   }
// }
</script>