<template lang="pug">
header
  nuxt-link.logo_area(to="/")
    figure.logo: img(src="../assets/images/logo.png", alt="")
    figure.logo_type.black: img(src="../assets/images/logotype_black.svg", alt="")
    //- figure.logo_type.white: img(src="../assets/images/logotype_white.svg", alt="")
</template>

<style style scoped>
header {
  z-index: 100;
  position: fixed;
  top: 47px;
  left: 57px;
  position: fixed;
}
header img {
  height: auto;
}
@media (max-width: 767px) {
  header {
    top: 28px;
    left: 32px;
  }
}
header a {
  display: grid;
  grid-template-columns: 74px 148px;
  column-gap: 20px;
}
header a .logo_type {
  grid-row: 1/2;
  grid-column: 2/-1;
  align-self: center;
}
@media (max-width: 767px) {
  header a {
    grid-template-columns: 45px 82px;
    column-gap: 9px;
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
//       gsap.to(".logo_area", { // 動かしたい要素は.a
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
//     }
//   }
// }
</script>