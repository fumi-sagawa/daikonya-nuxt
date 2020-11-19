<template lang="pug">
  div
    HeaderItem
    NavDesktop
    NavMobile
    Nuxt
    FooterItem
</template>

<style>
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  background-color: white;
}

* {
  margin: 0;
}

img {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
}

body {
  box-sizing: border-box;
  font-family: ten-mincho-text, serif;
  font-weight: 400;
  font-style: normal;
  background-color: #faf6ed;
}
body a {
  text-decoration: none;
}

h2 {
  font-size: 48px;
  font-weight: 400;
  color: #343434;
  letter-spacing: 0.05em;
  line-height: 1.48;
}
@media (min-width: 769px) and (max-width: 1199px) {
  h2 {
    font-size: calc(28px + 20 * (100vw - 768px) / 432);
  }
}
@media (max-width: 767px) {
  h2 {
    font-size: 28px;
    line-height: 2.07;
  }
}

p {
  font-size: 20px;
  font-weight: 400;
  color: #343434;
  letter-spacing: 0.1em;
  line-height: 2.3;
}
@media (min-width: 769px) and (max-width: 1199px) {
  p {
    font-size: calc(16px + 4 * (100vw - 768px) / 432);
  }
}
@media (max-width: 767px) {
  p {
    font-size: 16px;
    line-height: 2.375;
  }
}

body {
  --side: calc( (100vw - 1550px) / 2 );
}

body {
  animation: fadeIn 2s ease 0s 1 normal;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<script>
  //Heightの設定
if (process.client) {
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  let vw = window.innerWidth;
  window.addEventListener('resize', () => {
    if (vw === window.innerWidth) {
    　// 画面の横幅にサイズ変動がないので処理を終える
      return;
    }
    // 画面の横幅のサイズ変動があった時のみ高さを再計算する
    vw = window.innerWidth;
    setFillHeight();
  });
  // 初期化
  setFillHeight();
}
//貂明朝アクティベート

export default {
  mounted() {
    try {Typekit.load({async: true});} catch (e) {}
  }
}
</script>
