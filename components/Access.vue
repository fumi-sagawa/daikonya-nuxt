<template lang="pug">
.access(id="access")
  .text_box
    h2 アクセス
    table
      tr
        th 住所
        td 福島県いわき市平二町目５８-１
      tr
        th 営業時間
        td 午後５時~午後１１時
      tr
        th 定休日
        td 日曜日、他
      tr
        th 今月の店休日
        td 12/3(日), 12/4(月), 12/10(日), 12/17(日), 12/24(日), 12/31(日)
    a(href="https://goo.gl/maps/Y9NQDPB925fYudQs6" target="_blank" rel="noopener") Googleマップで開く
  iframe(title="だいこん家への地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.1017793851443!2d140.88935581577766!3d37.05505767989686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602110f9935ca771%3A0xd0a9fa3f27cf23e3!2z44Gg44GE44GT44KT5a62!5e0!3m2!1sja!2sjp!4v1605590438247!5m2!1sja!2sjp" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0")
</template>

<style scoped>
.access {
  padding-top: 240px;
  margin-top: -80px;
  grid-row: access;
  display: grid;
  grid-template-columns: var(--side) repeat(12, 1fr) var(--side);
  grid-template-rows: 654px;
  column-gap: 28px;
}
.access .text_box {
  grid-column: 2/7;
}
.access .text_box table {
  color: #343434;
  font-size: 20px;
  display: block;
  margin-top: 76px;
  text-align: left;
  border-collapse: collapse;
}
.access .text_box table th {
  padding: 28px 50px 28px 0px;
  font-weight: normal;
}
.access .text_box table td {
  padding-right: 50px;
  max-width: 360px;
}
.access .text_box table td,
.access .text_box table th {
  border-top: 1px solid #ccc2b2;
  border-bottom: 1px solid #ccc2b2;
}
@media (min-width: 769px) and (max-width: 1199px) {
  .access .text_box table {
    font-size: calc(16px + 4 * (100vw - 768px) / 432);
  }
}
.access .text_box a {
  font-size: 18;
  font-family: sans-serif;
  font-weight: 400;
  color: #988c79;
  padding: 14px 70px;
  display: inline-block;
  margin-top: 54px;
  border: 2px solid #988c79;
  transition: 0.15s;
}
.access .text_box a:hover {
  background-color: #988c79;
  color: white;
}
@media (min-width: 769px) and (max-width: 1199px) {
  .access .text_box a {
    font-size: 16px;
    padding: 14px 70px;
    margin-top: 54px;
  }
}
.access iframe {
  grid-column: 7/-1;
  filter: grayscale(100%);
  transition: 0.5s;
}
.access iframe:hover {
  filter: grayscale(0%);
}
@media (max-width: 768px) {
  .access {
    grid-template-columns: 24px repeat(12, 1fr) 24px;
    grid-template-rows: auto 300px;
    column-gap: 10px;
    row-gap: 20px;
    padding-top: 0px;
    margin-top: 0px;
  }
  .access .text_box {
    grid-row: 1/2;
    grid-column: 2/-2;
  }
  .access .text_box table {
    display: block;
    margin-top: 20px;
  }
  .access .text_box table th,
  .access .text_box table td {
    padding: 10px 0;
    font-size: 14px;
  }
  .access .text_box table th {
    width: 25vw;
  }
  .access .text_box table td {
    width: 75vw;
  }
  .access .text_box a {
    width: 100%;
    text-align: center;
    display: block;
    padding: 10px 0;
    display: inline-block;
    margin: 20px auto 0;
  }
  .access iframe {
    grid-row: 2/3;
    grid-column: 2/-2;
  }
}
</style>
