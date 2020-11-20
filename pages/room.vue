<template lang="pug">
  main
    .hero
      h1 お部屋
      figure.main: img(src="../assets/images/oheya_main.jpg", alt="")
      figure.grad: img(src="../assets/images/oheya_main_grad.png", alt="")
    .counter
      h2 カウンター
      figure.image01: img(src="../assets/images/counter.jpg", alt="")
      p お一人、またはお二人で来られた際にどうぞ。誰かと並んで食べるご飯は美味しさもひとしおです。<br>お酒を一杯、のんびりと過ごすのはいかがでしょうか。
    .table
      h2 テーブル席
      figure.image02: img(src="../assets/images/table.jpg", alt="")
      p お仲間といらした際は、ぜひテーブル席へ。賑わいの中、卓を囲んで乾杯すれば話に花が咲くはずです。<br>掘りごたつ式なので、足をらくにお食事が楽しめます。
    .single_room
      h2.head03 個室
      figure.image03_1: img(src="../assets/images/nerima.jpg", alt="")
      figure.image03_2: img(src="../assets/images/akakabu.jpg", alt="")
      p.text03 だいこん家では３つの個室をご用意しております。落ち着いて過ごせる小さな「赤かぶ」。中くらいの「青くびだいこん」。そして、大人数で起こしいただける「練馬だいこん」です。ご宴会や大切な人とのお食事に、ぜひ個室をご利用ください。
    Tel
    Access
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: [hero] calc(var(--vh, 1vh) * 100) [gap1] 45px [counter] auto [gap2] 180px [table] auto [gap3] 180px [single_room] auto [tel_number] auto [access] auto [gap6] 160px;
}
@media (max-width: 767px) {
  main {
    grid-template-rows: [hero] calc(var(--vh, 1vh) * 100) [gap1] 49px [counter] auto [gap2] 62px [table] auto [gap3] 75px [single_room] auto [gap4] 75px [tel_number] auto [gap5] 75px [access] auto [gap6] 20px;
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
.counter {
  grid-row: counter;
  display: grid;
  grid-template-columns: var(--side) repeat(12, 1fr) var(--side);
  column-gap: 28px;
  grid-template-rows: 119px 38px 340px;
}
.counter h2 {
  grid-column: 3/6;
  grid-row: 1/2;
  justify-self: start;
  align-self: end;
}
.counter p {
  grid-column: 3/6;
  grid-row: 3/4;
  justify-self: start;
  align-self: start;
}
.counter figure {
  grid-column: 7/13;
  grid-row: 1/-1;
}
.counter figure img {
  object-fit: cover;
}
@media (max-width: 767px) {
  .counter {
    grid-template-columns: 24px repeat(12, 1fr) 24px;
    grid-template-rows: auto;
    column-gap: 10px;
    row-gap: 20px;
  }
  .counter figure img {
    object-fit: fill;
    height: auto;
  }
  .counter h2, .counter p, .counter figure {
    grid-column: 2/-2;
  }
  .counter h2 {
    grid-row: 1/2;
  }
  .counter figure {
    grid-row: 2/3;
  }
  .counter p {
    grid-row: 3/4;
  }
}

.table {
  grid-row: table;
  display: grid;
  grid-template-columns: var(--side) repeat(12, 1fr) var(--side);
  column-gap: 28px;
  grid-template-rows: 116px 38px 310px;
}
.table h2 {
  grid-column: 10/13;
  grid-row: 1/2;
  justify-self: start;
  align-self: end;
}
.table p {
  grid-column: 10/13;
  grid-row: 3/4;
  justify-self: start;
  align-self: start;
}
.table figure {
  grid-column: 3/9;
  grid-row: 1/-1;
}
.table figure img {
  object-fit: cover;
}
@media (max-width: 767px) {
  .table {
    grid-template-columns: 24px repeat(12, 1fr) 24px;
    grid-template-rows: auto;
    column-gap: 10px;
    row-gap: 20px;
  }
  .table figure img {
    object-fit: fill;
    height: auto;
  }
  .table h2, .table p, .table figure {
    grid-column: 2/-2;
  }
  .table h2 {
    grid-row: 1/2;
  }
  .table figure {
    grid-row: 2/3;
  }
  .table p {
    grid-row: 3/4;
  }
}

.single_room {
  grid-row: single_room;
  display: grid;
  grid-template-columns: var(--side) repeat(12, 1fr) var(--side);
  column-gap: 28px;
  grid-template-rows: 212px 38px 335px 160px 176px;
}
.single_room h2 {
  grid-column: 3/6;
  grid-row: 1/2;
  justify-self: start;
  align-self: end;
}
.single_room p {
  grid-column: 3/6;
  grid-row: 3/4;
  justify-self: start;
  align-self: start;
}
.single_room .image03_1 {
  grid-column: 7/12;
  grid-row: 1/5;
}
.single_room .image03_1 img {
  object-fit: cover;
}
.single_room .image03_2 {
  grid-column: 10/-2;
  grid-row: 4/6;
}
.single_room .image03_2 img {
  object-fit: cover;
}
@media (max-width: 767px) {
  .single_room {
    grid-template-columns: 24px repeat(12, 1fr) 24px;
    grid-template-rows: repeat(4, auto);
    column-gap: 10px;
    row-gap: 20px;
  }
  .single_room figure img {
    object-fit: fill;
    height: auto;
  }
  .single_room h2 {
    grid-row: 1/3;
    grid-column: 9/14;
    justify-self: center;
    align-self: center;
  }
  .single_room .image03_1 {
    grid-row: 1/3;
    grid-column: 2/9;
  }
  .single_room .image03_2 {
    grid-row: 2/4;
    grid-column: 7/13;
    align-self: end;
  }
  .single_room p {
    grid-row: 4/5;
    grid-column: 2/-2;
  }
}
</style>
