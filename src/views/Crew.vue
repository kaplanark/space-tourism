<script setup>
</script>

<template>
  <section class="crew">
    <div class="crew__left">
      <div class="title">Commander </div>
      <div class="name">Douglas Hurley</div>
      <div class="info">
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched
        into space for the third time as commander of Crew Dragon Demo-2.
      </div>
      <div class="pagination"></div>
    </div>
    <div class="crew__right">
      <img src="../assets/images/dauglas_hursley.png" alt="">
    </div>
  </section>
</template>

<style lang="scss">
.crew{
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  height: 100%;
  gap: 80px;
  padding: 0 137px 0px 137px;
  &__left{
    
  }
  &__right{
    height: 100%;
    display: flex;
    align-items: flex-end;
    img{
      width: 100%;
      height: auto;
    }
  }
}
</style>