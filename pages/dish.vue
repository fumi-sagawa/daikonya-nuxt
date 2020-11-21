<template lang="pug">
  main
    .hero
      h1 お料理
      figure.main: img(src="../assets/images/oryori_main.jpg", alt="")
      figure.grad: img(src="../assets/images/oryori_main_grad.png", alt="")
    section.story
      h2.head01#story_anime01 ひとつひとつ丁寧に。
      figure.img01#story_anime01: img(src="../assets/images/kakuni_making.jpg", alt="")
      p.text01#story_anime01 醤油にみりん、お砂糖とお塩にすこしの隠し味を入れて。だいこん家では、店主みずから毎日時間をかけて料理をお作りしています。お口に合えば、ぜひ感想をお聞かせください。
      h2.head02#story_anime02 自慢のお酒
      figure.img02#story_anime02: img(src="../assets/images/nihonsyu.jpg", alt="")
      p.text02#story_anime02 福島をはじめとし、全国から20種類を超える日本酒を取り揃えました。ビールや焼酎はもちろん、定番のお酒も豊富にご用意しております。
    .course
      h2 コース
      p.description  宴会の際には、刺し身、煮物、煮魚がそろったお得なコースをどうぞ。
      figure: img(src="../assets/images/otsukuri.jpg", alt="")
      .text_box
        p.price  5,500円〜
        p.time  120分 飲み放題込
        p.menu 前菜三種盛り<br>サラダ<br>高野豆腐の肉詰め<br>お刺身<br>煮魚<br>だいこんと角煮と煮玉子<br>あげもの盛り合わせ<br>デザート
        p.caution ※ 料理、また写真は一例です。
    .single_menu
      h2 単品のお料理
      p.description 名物「だいこんと角煮と煮玉子」をはじめとし、福島いわきの美味しい家庭料理を取り揃えました。
      .single_image
        figure
          figure: img(src="../assets/images/kakuni.jpg", alt="")
          figcaption だいこんと角煮と煮玉子
        figure
          figure: img(src="../assets/images/koyadofu.jpg", alt="")
          figcaption 高野豆腐の肉詰め
        figure
          figure: img(src="../assets/images/mehikari_karaage.jpg", alt="")
          figcaption めひかりの唐揚げ
        figure
          figure: img(src="../assets/images/mehikari_hirakiyaki.jpg", alt="")
          figcaption めひかりの開き焼き
        figure
          figure: img(src="../assets/images/gingarei.jpg", alt="")
          figcaption ぎんがれいの煮付け
        figure
          figure: img(src="../assets/images/toriyaki.jpg", alt="")
          figcaption 鳥焼き
        figure
          figure: img(src="../assets/images/misoimo.jpg", alt="")
          figcaption みそいも
        figure
          figure: img(src="../assets/images/potetosarad.jpg", alt="")
          figcaption ポテトサラダ
        p 他にもたくさんの料理を<br>ご用意しております。
    Tel
    Access
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: [hero] calc(var(--vh, 1vh) * 100) [story] auto [gap1] 89px [course] auto [gap2] 180px [single_menu] auto [tel_number] auto [access] auto [gap6] 160px;
}
@media (max-width: 767px) {
  main {
    grid-template-rows: [hero] calc(var(--vh, 1vh) * 100) [story] auto [gap1] 62px [course] auto [gap2] 75px [single_menu] auto [gap4] 75px [tel_number] auto [gap5] 75px [access] auto [gap6] 20px;
  }
}

.hero {
  grid-row: hero;
  display: grid;
  grid-template-columns: 1.57fr 6.41fr 0.43fr 0.43fr 1.13fr;
  grid-template-rows: 1.53fr 0.66fr 2.87fr 3.62fr 1.3fr;
}
@media (max-width: 767px) {
  .hero {
    grid-template-columns: 0.64fr 6.72fr 0.8fr 0.8fr 1.04fr;
    grid-template-rows: 1.5fr 0.64fr 2.47fr 4.91fr 0.47fr;
  }
}
.hero h1 {
  grid-row: 2/-2;
  grid-column: 3/-2;
  z-index: 10;
  align-self: start;
  justify-self: end;
  writing-mode: vertical-rl;
  font-size: 100px;
  color: #343434;
  font-weight: normal;
  letter-spacing: 10px;
}
@media (max-width: 767px) {
  .hero h1 {
    font-size: 66px;
    line-height: 1;
  }
}
.hero figure {
  pointer-events: none;
  -webkit-user-select: none;
          user-select: none;
  box-sizing: border-box;
}
.hero .main {
  grid-row: 3/-2;
  grid-column: 2/-3;
}
.hero .main img {
  object-fit: cover;
  object-position: 30% 50%;
  vertical-align: bottom;
}
.hero .grad {
  grid-row: 3/-2;
  grid-column: 2/-3;
}
.hero::after {
  grid-row: 5/-1;
  grid-column: 1/2;
  content: "";
  bottom: 0;
  justify-self: right;
  width: 1px;
  height: 150px;
  margin-right: 70px;
  margin-bottom: -50px;
  background: #2d2d2d;
  z-index: 10;
  animation: sdl 2.5s cubic-bezier(1, 0, 0, 1) infinite;
}
@media (max-width: 767px) {
  .hero::after {
    margin-bottom: 0;
    height: 70px;
    margin-top: -20px;
    margin-right: -50px;
  }
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
.story {
  background-color: #f2ebdc;
  grid-row: story;
  display: grid;
  grid-template-columns: var(--side) repeat(12, 1fr) var(--side);
  grid-template-rows: 140px 123px 38px 310px 220px 123px 38px 310px 135px;
  column-gap: 28px;
}
.story .head01 {
  grid-column: 3/6;
  grid-row: 2/3;
}
.story .img01 {
  grid-column: 7/-3;
  grid-row: 2/5;
}
.story .img01 img {
  object-position: top;
  object-fit: none;
}
.story .text01 {
  grid-column: 3/6;
  grid-row: 4/5;
}
.story .head02 {
  grid-column: 10/13;
  grid-row: 6/7;
  align-self: end;
}
.story .img02 {
  grid-column: 3/9;
  grid-row: 6/9;
}
.story .img02 img {
  object-position: top;
  object-fit: none;
}
.story .text02 {
  grid-column: 10/13;
  grid-row: 8/9;
}
@media (max-width: 767px) {
  .story {
    grid-template-columns: 24px repeat(12, 1fr) 24px;
    grid-template-rows: 40px auto auto auto 62px auto auto auto 40px;
    column-gap: 10px;
    row-gap: 20px;
  }
  .story .head01 {
    grid-column: 2/-2;
    grid-row: 2/3;
  }
  .story .img01 {
    grid-column: 2/-2;
    grid-row: 3/4;
  }
  .story .img01 img {
    object-fit: cover;
    height: auto;
  }
  .story .text01 {
    grid-column: 2/-2;
    grid-row: 4/5;
  }
  .story .head02 {
    grid-column: 2/-2;
    grid-row: 6/7;
  }
  .story .img02 {
    grid-column: 2/-2;
    grid-row: 7/8;
  }
  .story .img02 img {
    object-fit: cover;
    height: auto;
  }
  .story .text02 {
    grid-column: 2/-2;
    grid-row: 8/9;
  }
}

.course {
  grid-row: course;
  display: grid;
  grid-template-columns: var(--side) repeat(12, 1fr) var(--side);
  grid-template-rows: 92px 123px 56px 515px;
  column-gap: 28px;
}
.course h2 {
  font-size: 62;
  grid-column: 1/-1;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
}
@media (min-width: 769px) and (max-width: 1199px) {
  .course h2 {
    font-size: calc(28px + 34 * (100vw - 768px) / 432);
  }
}
.course .description {
  grid-column: 6/-6;
  grid-row: 2/3;
  justify-self: center;
  justify-self: center;
  text-align: center;
}
.course figure {
  grid-column: 7/-2;
  grid-row: 4/5;
  margin-left: -28px;
}
.course figure img {
  object-fit: cover;
}
.course .text_box {
  grid-column: 3/6;
  grid-row: 4/5;
}
.course .text_box .price {
  font-size: 30px;
  font-weight: bold;
  font-family: serif;
  line-height: 1.6;
  border-bottom: solid 1px #343434;
}
@media (min-width: 769px) and (max-width: 1199px) {
  .course .text_box .price {
    font-size: calc(22px + 8 * (100vw - 768px) / 432);
  }
}
.course .text_box .time {
  font-size: 20px;
  font-weight: bold;
  font-family: serif;
}
@media (min-width: 769px) and (max-width: 1199px) {
  .course .text_box .time {
    font-size: calc(16px + 4 * (100vw - 768px) / 432);
  }
}
.course .text_box .menu {
  margin-top: 40px;
  font-size: 18px;
}
@media (min-width: 769px) and (max-width: 1199px) {
  .course .text_box .menu {
    font-size: calc(14px + 4 * (100vw - 768px) / 432);
  }
}
.course .text_box .caution {
  font-size: 16px;
  color: #a9a9a9;
}
@media (min-width: 769px) and (max-width: 1199px) {
  .course .text_box .caution {
    font-size: calc(12px + 4 * (100vw - 768px) / 432);
  }
}
@media (max-width: 767px) {
  .course {
    grid-template-columns: 24px repeat(12, 1fr) 24px;
    grid-template-rows: auto;
    column-gap: 10px;
    row-gap: 20px;
  }
  .course h2 {
    font-size: 32px;
    line-height: 1.2;
  }
  .course .description {
    grid-column: 3/-3;
  }
  .course figure {
    grid-column: 2/-2;
    grid-row: 3/4;
    margin: 0;
  }
  .course figure img {
    object-fit: cover;
    height: auto;
  }
  .course .text_box {
    grid-column: 2/-2;
  }
  .course .text_box .price {
    font-size: 22px;
  }
  .course .text_box .time {
    font-size: 16px;
  }
  .course .text_box .menu {
    margin-top: 16px;
    font-size: 14px;
  }
  .course .text_box .caution {
    font-size: 12;
    text-align: end;
  }
}

.single_menu {
  grid-row: single_menu;
  display: grid;
  grid-template-columns: var(--side) repeat(12, 1fr) var(--side);
  grid-template-rows: 121px 110px 69px auto;
  column-gap: 28px;
}
.single_menu h2 {
  font-size: 58;
  grid-column: 1/-1;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
}
@media (min-width: 769px) and (max-width: 1199px) {
  .single_menu h2 {
    font-size: calc(28px + 30 * (100vw - 768px) / 432);
  }
}
.single_menu .description {
  grid-column: 5/-5;
  grid-row: 2/3;
  justify-self: center;
  justify-self: center;
  text-align: center;
}
.single_menu .single_image {
  grid-column: 3/-3;
  grid-row: 4/5;
  display: grid;
  column-gap: 20px;
  row-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.single_menu .single_image figcaption {
  line-height: 2;
  font-size: 16px;
}
.single_menu .single_image p {
  text-align: center;
  justify-self: center;
  align-self: center;
}
@media (min-width: 769px) and (max-width: 1199px) {
  .single_menu .single_image p {
    font-size: calc(14px + 6 * (100vw - 768px) / 432);
  }
}
.single_menu .single_image img {
  width: 100%;
  height: auto;
}
@media (max-width: 767px) {
  .single_menu {
    grid-template-columns: 24px repeat(12, 1fr) 24px;
    grid-template-rows: auto;
    column-gap: 10px;
    row-gap: 20px;
  }
  .single_menu h2 {
    font-size: 28px;
  }
  .single_menu .description {
    grid-column: 3/-3;
  }
  .single_menu .single_image {
    grid-column: 2/-2;
    grid-row: 4/5;
    display: grid;
    column-gap: 14px;
    row-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  .single_menu .single_image p {
    margin-top: 20px;
    grid-column: 1/-1;
  }
  .single_menu .single_image figcaption {
    line-height: 2;
    font-size: 12px;
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
  mounted() {
    this.story_anime01()
    this.story_anime02()
  },
  methods:{
    story_anime01(){
      gsap.set("#story_anime01", {
            autoAlpha:0,
          });
      gsap.to("#story_anime01", { // 動かしたい要素は.a
            autoAlpha: 1,
            duration: 1, // アニメーションは1秒間
            scrollTrigger: {
              trigger: "#story_anime01", // 要素".a"がビューポートに入ったときにアニメーション開始
              start: 'top 80%', // アニメーション開始位置
              toggleActions: "restart none reverse none",
            }
          })
    },
    story_anime02(){
      gsap.set("#story_anime02", {
            autoAlpha:0,
          });
      gsap.to("#story_anime02", { // 動かしたい要素は.a
            autoAlpha: 1,
            duration: 1, // アニメーションは1秒間
            scrollTrigger: {
              trigger: "#story_anime02", // 要素".a"がビューポートに入ったときにアニメーション開始
              start: 'top 80%', // アニメーション開始位置
              toggleActions: "restart none reverse none",
            }
          })
    },
  }
}
</script>

