<template lang="pug">
.tel_number(id="tel_number")
  .text_box
    p.res_anounce ご予約はこちらから
    p.number: a(href="tel:0246-22-7015") 0246-22-7015
    p.time 営業時間：午後５時 ~ 午後１１時
    p.time 各種クレジットカードをお使いいただけます。
</template>

<style scoped>
.tel_number {
  padding-top: 300px;
  margin-top: -140px;
  grid-row: tel_number;
  display: grid;
  grid-template-columns: var(--side) repeat(12, 1fr) var(--side);
  grid-template-rows: 406px;
  column-gap: 28px;
}
.tel_number .text_box {
  grid-column: 1/-1;
  align-self: center;
  justify-self: center;
}
.tel_number .text_box .res_anounce {
  font-size: 32px;
  letter-spacing: 0.2rem;
  line-height: 1.5;
  margin-bottom: -10px;
  margin-left: 5px;
}
@media (min-width: 769px) and (max-width: 1199px) {
  .tel_number .text_box .res_anounce {
    font-size: calc(14px + 18 * (100vw - 768px) / 432);
  }
}
.tel_number .number {
  font-size: 82px;
  letter-spacing: 0.5rem;
  line-height: 1.43;
  border-bottom: 10px double #e6ddc3;
  transition: 0.4s;
}
.tel_number .number a {
  color: #343434;
}
.tel_number .number:hover {
  border-bottom: 10px double #988c79;
}
@media (min-width: 768px) and (max-width: 1199px) {
  .tel_number .number {
    font-size: calc(39px + 43 * (100vw - 768px) / 432);
  }
}
.tel_number .time {
  font-size: 20px;
  letter-spacing: 0.05rem;
  line-height: 1;
  margin-top: 20px;
  margin-left: 5px;
}
@media (min-width: 769px) and (max-width: 1199px) {
  .tel_number .time {
    font-size: calc(14px + 6 * (100vw - 768px) / 432);
  }
}
@media (max-width: 767px) {
  .tel_number {
    display: block;
    padding: 0 10px;
    margin: 0 auto;
    padding-top: 0;
    margin-top: 0;
    grid-template-rows: 0;
  }
  .tel_number .text_box .res_anounce {
    margin-left: 3px;
    font-size: 14px;
  }
  .tel_number .text_box .number {
    margin-top: 5px;
    display: inline-block;
    letter-spacing: 5px;
    font-size: 39px;
  }
  .tel_number .text_box .time {
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
