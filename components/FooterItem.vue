<template lang="pug">
div
  footer
    div.logo
      figure: img(src= "../assets/images/logo.png", alt="")
      figure: img(src="../assets/images/logotype_white.svg", alt="")
    ul 
      li: nuxt-link(to="/") ホーム
      li: nuxt-link(to="dish") お料理
      li: nuxt-link(to="room") お部屋
    .information
      .tel
        p.caption 電話番号
        p.main 0246-22-7015
      .address
        p.caption 住所
        p.sub 〒970-8026
        p.main 福島県いわき市平二町目５８−１
    p.rights © Nagomi inc. All rights reserved.
</template>

<style style scoped>
footer {
  display: grid;
  width: 100vw;
  background-color: #292320;
  grid-template-columns: var(--side) repeat(12, 1fr) var(--side);
  grid-template-rows: 64px 120px 278px 68px;
  column-gap: 28px;
}
footer img {
  height: auto;
}
footer p, footer a {
  color: white;
}
footer .logo {
  grid-area: 2/3/3/6;
  display: grid;
  grid-template-columns: 100px 180px;
  column-gap: 20px;
  align-items: center;
}
@media (min-width: 769px) and (max-width: 1199px) {
  footer .logo {
    grid-template-columns: 70px 150px;
  }
}
footer ul {
  list-style: none;
  grid-area: 3/3/4/7;
  margin-top: 30px;
  padding-inline-start: 0;
  margin-left: 10px;
}
footer ul li {
  justify-self: left;
  font-size: 23px;
  line-height: 2.5;
  letter-spacing: 0.2rem;
}
footer ul li a {
  border-bottom: solid 1px rgba(0, 0, 0, 0);
  transition: 0.4s;
}
footer ul li a:hover {
  border-bottom: solid 1px white;
}
@media (min-width: 769px) and (max-width: 1199px) {
  footer ul li {
    font-size: calc(16px + 7 * (100vw - 768px) / 432);
  }
}
footer .information {
  grid-area: 2/8/4/14;
  margin-top: 35px;
}
footer .information p.caption {
  line-height: 1;
  color: #635d55;
  font-size: 24px;
}
@media (min-width: 769px) and (max-width: 1199px) {
  footer .information p.caption {
    font-size: calc(14px + 10 * (100vw - 768px) / 432);
  }
}
footer .information p.main {
  line-height: 1;
  font-size: 34px;
}
@media (min-width: 769px) and (max-width: 1199px) {
  footer .information p.main {
    font-size: calc(18px + 14 * (100vw - 768px) / 432);
  }
}
footer .information p.sub {
  line-height: 1;
  font-size: 22px;
}
@media (min-width: 769px) and (max-width: 1199px) {
  footer .information p.sub {
    font-size: calc(14px + 8 * (100vw - 768px) / 432);
  }
}
footer .information .tel .main {
  margin-top: 16px;
}
footer .information .address {
  margin-top: 50px;
}
footer .information .address .sub {
  margin-top: 16px;
}
footer .information .address .main {
  margin-top: 12px;
}
footer .rights {
  font-size: 14px;
  font-family: sans-serif;
  grid-area: 4/1/5/15;
  justify-self: center;
  align-self: end;
  margin-bottom: 10px;
  color: #635d55;
}
@media (max-width: 767px) {
  footer {
    grid-template-columns: 24px repeat(12, 1fr) 24px;
    grid-template-rows: 50px 51px 20px 127px 192px 20px 50px;
    column-gap: 18px;
  }
  footer .logo {
    grid-column: 2/9;
    grid-row: 2/3;
    grid-template-columns: 52px 95px;
    column-gap: 10px;
  }
  footer ul {
    margin: 0;
    grid-column: 2/-2;
    grid-row: 4/5;
    align-self: center;
    justify-self: start;
  }
  footer ul li {
    font-size: 16px;
  }
  footer .information {
    grid-column: 2/-2;
    grid-row: 5/6;
    margin-top: 30px;
  }
  footer .information p.caption {
    font-size: 14px;
    line-height: 1;
    color: #635d55;
    margin-bottom: 10px;
  }
  footer .information .tel .main {
    font-size: 18px;
    line-height: 1;
    margin: 0;
  }
  footer .information .address {
    margin-top: 20px;
  }
  footer .information .address .sub {
    font-size: 16px;
    line-height: 1;
    margin: 0 0 8px 0;
  }
  footer .information .address .main {
    font-size: 16px;
    line-height: 1;
    margin: 0;
  }
  footer .rights {
    grid-column: 1/-1;
    grid-row: 7/8;
    font-size: 12px;
  }
}
</style>