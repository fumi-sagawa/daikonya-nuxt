<template lang="pug">
main
  .hero_top
    h1: figure.catch: img(src="../assets/images/catch_white.svg", alt="")
    figure.main: img(src="../assets/images/top_main.jpg", alt="")
    figure.grad: img(src="../assets/images/top_main_grad.png", alt="")
  .hero_mobile
    .heading1: figure.catch: img(src="../assets/images/catch__white_mobile.svg", alt="")
    figure.main: img(src="../assets/images/top_main_mobile.jpg", alt="")
    figure.grad: img(src="../assets/images/top_main_mobile_grad.png", alt="")
  .about
    .offday: div.inner <span class="title">今月の店休日</span><br>9/3(日), 9/10(日), 9/17(日), 9/18(土), 9/23(日), 9/24(日)
    figure.noren: img(src="../assets/images/noren.jpg", alt="")
    figure.tennai: img(src="../assets/images/tennai.jpg", alt="")
    h2#about_anime 台所から、<br>腕によりをかけて
    p#about_anime 「だいこん役者のような、取り柄のない自分でも誰かを笑顔にできないだろうか」<br>そんな思いからお店をはじめ早25年が経ちました。<br>日が沈んで、年が明けて時代が変わっても、好きだった、あの懐かしい味は変わりません。<br>特別な料理じゃないからこそ精一杯腕をふるって。<br>従業員一同、身も心も、ほっと暖かくなる時間をお届けします。　
  .dish
    h2#dish_anime01 家庭の味を、<br>美味しいお酒と一緒に
    figure.kakuni#dish_anime01: img(src="../assets/images/kakuni_top.jpg", alt="")
    p#dish_anime01 甘さが溶け出てお口にじゅわっと広がる、<br>たれが染み込んだ大根とお肉。<br>みずみずしくて脂がのった、<br>その日捌いた新鮮な刺身。<br>あてに一杯お酒をやれば、<br>自然とため息がこぼれ出ます。
    nuxt-link#dish_anime01(to="dish") 詳しく見る
    figure.koyadofu#dish_anime02: img(src="../assets/images/koyadofu_top.jpg", alt="")
    figure.sashimi#dish_anime02: img(src="../assets/images/sashimi_top.jpg", alt="")
  .room
    h2 おひとりさまでも、<br>大勢でもどうぞ
    figure: img(src="../assets/images/table_top.jpg", alt="")
    p カウンターやテーブル、個室と多様なお部屋をご用意しています。少し大きなお部屋もありますので、宴会などにどうぞ。
    nuxt-link(to="room") 詳しく見る
  Tel
  Access
      //- .obento
      //-   a(href="/pdf/daikonya_obento.pdf" download="daikonya_obento.pdf")
      //-     img(src="../assets/images/obento_.svg", alt="")
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: [hero] calc(var(--vh, 1vh) * 100) [gap1] 95px [about] auto [gap2] 246px [dish] auto [gap3] 158px [room] auto [tel_number] auto [access] auto [gap6] 160px;
}

@media (max-width: 500px) {
  .obento {
    position: absolute; /* 要素の配置方法を指定 */
    left: 5vw; /* 左からの位置指定 */
    top: 70vh; /* 上からの位置指定 */
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 767px) {
  main {
    grid-template-rows: [hero] calc(var(--vh, 1vh) * 100) [gap1] 24px [about] auto [gap2] 100px [dish] auto [gap3] 84px [room] auto [gap4] 100px [tel_number] auto [gap5] 100px [access] auto [gap6] 20px;
  }
}

.hero_top {
  grid-row: hero;
  display: grid;
  grid-template-columns: 20px 7.56fr 1.59fr 0.84fr 20px;
  grid-template-rows: 20px 3.14fr 5.48fr 1.37fr 20px;
  gap: 0px 0px;
}
@media (max-width: 500px) {
  .hero_top {
    display: none;
  }
}
.hero_top h1 {
  grid-area: 3/3/4/4;
  z-index: 10;
  align-self: end;
  margin-bottom: 3vw;
}
.hero_top h1 figure {
  max-width: 240px;
  min-width: 120px;
}
.hero_top h1 figure img {
  object-fit: cover;
  width: 100%;
  height: auto;
}
.hero_top figure {
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
  box-sizing: border-box;
}
.hero_top .main {
  grid-area: 2/2/5/5;
}
.hero_top .main img {
  object-fit: cover;
  object-position: 55% 50%;
  vertical-align: bottom;
}
.hero_top .grad {
  grid-area: 2/2/5/5;
}
.hero_top::after {
  grid-area: 4/3/5/4;
  content: "";
  bottom: 0;
  justify-self: right;
  width: 1px;
  height: 120px;
  justify-self: center;
  margin-top: 50px;
  margin-bottom: -150px;
  background: #9d9d9d;
  z-index: 10;
  animation: sdl 2.5s cubic-bezier(1, 0, 0, 1) infinite;
}

.hero_mobile {
  grid-row: hero;
  display: grid;
  grid-template-columns: 20px 1fr 98px 26px 20px;
  grid-template-rows: 20px 1fr 235px 60px 20px;
  gap: 0px 0px;
}
@media (min-width: 501px) {
  .hero_mobile {
    display: none;
  }
}
.hero_mobile .heading1 {
  grid-area: 3/3/4/4;
  z-index: 10;
  align-self: end;
  margin-bottom: 3vw;
}
.hero_mobile .heading1 figure img {
  object-fit: cover;
  width: 100%;
  height: auto;
}
.hero_mobile figure {
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
  box-sizing: border-box;
}
.hero_mobile .main {
  grid-area: 2/2/5/5;
}
.hero_mobile .main img {
  object-fit: cover;
  object-position: 70% 50%;
  vertical-align: bottom;
}
.hero_mobile .grad {
  grid-area: 2/2/5/5;
}
.hero_mobile::after {
  grid-area: 4/3/5/4;
  content: "";
  bottom: 0;
  justify-self: right;
  width: 1px;
  height: 80px;
  justify-self: center;
  margin-top: 20px;
  margin-bottom: -40px;
  background: #9d9d9d;
  z-index: 10;
  animation: sdl 2s cubic-bezier(1, 0, 0, 1) infinite;
}

@keyframes sdl {
  0% {
    transform: scale(1, 0);
    transform-origin: 0 0;
  }
  50% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }
  50.1% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }
  100% {
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }
}
.about {
  grid-row: about;
  display: grid;
  grid-template-columns: var(--side) repeat(12, 1fr) var(--side);
  grid-template-rows: 280px 57px 379px 65px 489px;
  column-gap: 28px;
}
.about .noren {
  grid-area: 1/9/3/14;
}
.about .offday {
  margin-top: -68px;
  grid-area: 1/2/2/7;
  align-content: start;
  display: grid;
}
.offday .inner {
  padding: 24px;
  background: white;
  border: 1px solid rgba(22, 22, 22, 0.53);
  font-size: 18px;
  .title {
    font-size: 22px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 8px;
  }
}

.about .noren img {
  object-fit: cover;
}
.about .tennai {
  grid-area: 2/2/6/8;
}
.about .tennai img {
  object-fit: cover;
}
.about h2 {
  grid-area: 3/9/4/14;
  align-self: end;
  justify-self: start;
}
.about p {
  grid-area: 5/9/6/13;
}
.about::after {
  content: "";
  background-color: #f5eddc;
  grid-area: 1/1/6/12;
  margin-top: -300px;
  margin-bottom: 140px;
  z-index: -1;
}
@media (max-width: 767px) {
  .about {
    grid-template-columns: 24px repeat(12, 1fr) 24px;
    grid-template-rows: 131px 52px 355px 35px 490px;
    column-gap: 10px;
  }
  .about .noren {
    grid-row: 1/2;
    grid-column: 7/-2;
    margin: 0 -10px;
  }
  .about .tennai {
    grid-row: 3/4;
    grid-column: 1/8;
  }
  .about h2 {
    writing-mode: vertical-rl;
    grid-row: 3/4;
    grid-column: -2/-7;
    justify-self: end;
    align-self: start;
    line-height: 1.6;
    letter-spacing: 10px;
    font-size: 32px;
    margin-right: 15px;
  }
  .about p {
    grid-row: 5/6;
    grid-column: 3/-3;
    margin: 0 -10px;
  }
  .about::after {
    content: "";
    background-color: #f5eddc;
    grid-row: 1/-1;
    grid-column: 1/-3;
    z-index: -1;
    margin-right: 10px;
    margin-bottom: 100px;
  }

  .about .offday {
    margin-top: -128px;
    grid-area: 1/1/2/5;
    align-content: start;
    display: grid;
  }
  .offday .inner {
    padding: 20px;
    background: white;
    border: 1px solid rgba(22, 22, 22, 0.53);
    border-left: none;
    font-size: 14px;
    .title {
      font-size: 16px;
    }
  }
}

.dish {
  grid-row: dish;
  display: grid;
  grid-template-columns: var(--side) repeat(12, 1fr) var(--side);
  grid-template-rows: 217px 283px 170px 109px 89px 214px 167px;
  column-gap: 28px;
}
.dish h2 {
  grid-area: 1/2/2/8;
}
.dish p {
  grid-area: 2/2/3/8;
}
.dish a {
  grid-area: 3/2/4/6;
  justify-self: end;
  align-self: start;
  color: #343434;
  position: relative;
}
.dish a::before {
  content: "";
  display: inline-block;
  width: 40px;
  height: 1px;
  margin: 10px;
  background-color: #333;
  vertical-align: middle;
  transition: 0.4s;
}
.dish a::after {
  content: "";
  position: absolute;
  left: 58px;
  right: 0px;
  bottom: -2px;
  height: 1px;
  background-color: #343434;
  transition: 0.4s;
}
.dish a:hover::before {
  width: 60px;
}
.dish a:hover::after {
  left: 78px;
  bottom: -5px;
}
.dish .kakuni {
  grid-area: 1/8/4/15;
}
.dish .kakuni img {
  object-fit: cover;
  object-position: 60% 50%;
}
.dish .koyadofu {
  grid-area: 5/4/7/8;
}
.dish .koyadofu img {
  object-fit: cover;
}
.dish .sashimi {
  grid-area: 6/9/8/14;
}
.dish .sashimi img {
  object-fit: cover;
}
.dish::after {
  content: "";
  background-color: #f5eddc;
  grid-area: 1/3/7/15;
  margin-top: 72px;
  margin-bottom: -72px;
  margin-left: -50px;
  z-index: -1;
}
@media (max-width: 767px) {
  .dish {
    grid-template-columns: 24px repeat(12, 1fr) 24px;
    grid-template-rows: 100px 22px 248px 29px 256px 43px 26px 102px 47px 120px;
    column-gap: 10px;
  }
  .dish h2 {
    grid-column: 2/-2;
    grid-row: 1/2;
    margin: 0 -10px;
  }
  .dish .kakuni {
    grid-column: 2/-2;
    grid-row: 3/4;
    margin: 0 -10px;
  }
  .dish p {
    grid-column: 3/-2;
    grid-row: 5/6;
  }
  .dish a {
    grid-column: -2/-8;
    grid-row: 6/7;
    justify-self: end;
    align-self: end;
    font-size: 12px;
  }
  .dish a::before {
    width: 30px;
  }
  .dish a::after {
    content: "";
    position: absolute;
    left: 50px;
    right: 0px;
    bottom: -1px;
  }
  .dish .koyadofu {
    grid-column: 3/9;
    grid-row: 8/9;
    margin-left: -10px;
  }
  .dish .sashimi {
    grid-column: 6/-2;
    grid-row: 10/11;
  }
  .dish::after {
    content: "";
    background-color: #f5eddc;
    grid-column: 2/-1;
    grid-row: 1/-1;
    margin-top: 72px;
    margin-bottom: 30px;
    margin-left: -10px;
    z-index: -1;
  }
}

.room {
  grid-row: room;
  display: grid;
  grid-template-columns: var(--side) repeat(12, 1fr) var(--side);
  grid-template-rows: 128px 47px 194px 55px;
  column-gap: 28px;
}
.room figure {
  grid-row: 1/-1;
  grid-column: 2/8;
}
.room figure img {
  object-fit: cover;
}
.room h2 {
  grid-row: 1/2;
  grid-column: 9/14;
}
.room p {
  grid-row: 3/4;
  grid-column: 9/13;
}
.room a {
  grid-row: 4/5;
  grid-column: 9/13;
  justify-self: end;
  align-self: start;
  color: #343434;
  position: relative;
}
.room a::before {
  content: "";
  display: inline-block;
  width: 40px;
  height: 1px;
  margin: 10px;
  background-color: #333;
  vertical-align: middle;
  transition: 0.4s;
}
.room a::after {
  content: "";
  position: absolute;
  left: 58px;
  right: 0px;
  bottom: -2px;
  height: 1px;
  background-color: #343434;
  transition: 0.4s;
}
.room a:hover::before {
  width: 60px;
}
.room a:hover::after {
  left: 78px;
  bottom: -5px;
}
@media (max-width: 767px) {
  .room {
    grid-template-columns: 24px repeat(12, 1fr) 24px;
    grid-template-rows: 100px 22px 230px 28px 147px 39px;
    column-gap: 10px;
  }
  .room h2 {
    grid-row: 1/2;
    grid-column: 2/-2;
  }
  .room figure {
    grid-row: 3/4;
    grid-column: 2/-2;
  }
  .room p {
    grid-row: 5/6;
    grid-column: 2/-2;
  }
  .room a {
    grid-row: 6/7;
    grid-column: 2/-2;
    justify-self: end;
    font-size: 12px;
  }
  .room a::before {
    width: 30px;
  }
  .room a::after {
    content: "";
    position: absolute;
    left: 50px;
    right: 0px;
    bottom: -1px;
  }
}

/* メニューのトグル用 */
/* .target{
  transition: 0.8s;
  opacity: 0%;
}
.visible_invisible{
  opacity: 100%;
} */
</style>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export default {
  layout: "top",
  mounted() {
    // this.logo_white()
    this.about_noren();
    this.about_tennai();
    this.about_text();
    this.dish_anime01();
    this.dish_anime02();
  },
  methods: {
    about_noren() {
      gsap.set(".noren", {
        autoAlpha: 0,
        x: 10,
      });
      gsap.to(".noren", {
        // 動かしたい要素は.a
        // x: 500, // 右方向に500動く
        x: -10,
        autoAlpha: 1,
        duration: 0.8, // アニメーションは1秒間
        scrollTrigger: {
          trigger: ".noren", // 要素".a"がビューポートに入ったときにアニメーション開始
          start: "30% 90%", // アニメーション開始位置
        },
      });
    },
    about_tennai() {
      gsap.set(".tennai", {
        autoAlpha: 0,
        y: 10,
      });
      gsap.to(".tennai", {
        // 動かしたい要素は.a
        // x: 500, // 右方向に500動く
        y: -10,
        autoAlpha: 1,
        duration: 0.8, // アニメーションは1秒間
        scrollTrigger: {
          trigger: ".tennai", // 要素".a"がビューポートに入ったときにアニメーション開始
          start: "30% 90%", // アニメーション開始位置
        },
      });
    },
    about_text() {
      gsap.set("#about_anime", {
        autoAlpha: 0,
      });
      gsap.to("#about_anime", {
        // 動かしたい要素は.a
        autoAlpha: 1,
        scrollTrigger: {
          trigger: "#about_anime", // 要素".a"がビューポートに入ったときにアニメーション開始
          start: "top center", // アニメーション開始位置
        },
        stagger: {
          from: "start", //左側から
          amount: 0.6, // 0.8秒おきに
        },
      });
    },
    dish_anime01() {
      gsap.set("#dish_anime01", {
        autoAlpha: 0,
        y: 10,
      });
      gsap.to("#dish_anime01", {
        // 動かしたい要素は.a
        y: -10,
        autoAlpha: 1,
        duration: 1, // アニメーションは1秒間
        scrollTrigger: {
          trigger: "#dish_anime01", // 要素".a"がビューポートに入ったときにアニメーション開始
          start: "top 80%", // アニメーション開始位置
        },
      });
    },
    dish_anime02() {
      gsap.set("#dish_anime02", {
        autoAlpha: 0,
      });
      gsap.to("#dish_anime02", {
        // 動かしたい要素は.a
        // x: 500, // 右方向に500動く
        autoAlpha: 1,
        duration: 1, // アニメーションは1秒間
        scrollTrigger: {
          trigger: "#dish_anime02", // 要素".a"がビューポートに入ったときにアニメーション開始
          start: "top 70%", // アニメーション開始位置
        },
        stagger: {
          from: "start", //左側から
          amount: 0.6, // 0.8秒おきに
        },
      });
    },
  },
};
</script>
