<template lang="pug">
div
  header
    nuxt-link.logo_area(to="/")
      figure.logo: img(src="../assets/images/logo.png", alt="")
      //- figure.logo_type: img(src="../assets/images/logotype_white.svg", alt="")
      figure.logo_type: img(src="../assets/images/logotype_white.svg", alt="")
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
  align-self: center;
}
@media (max-width: 767px) {
  header a {
    grid-template-columns: 45px 82px;
    column-gap: 9px;
  }
}
</style>