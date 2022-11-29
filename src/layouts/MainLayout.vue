<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import Navigation from '../components/Navigation/Navigation.vue';
import BaseLogo from '../components/BaseLogo.vue';

const router = useRouter();

const layoutBg = computed(() => {
  let routeName = router.currentRoute.value.name.toLocaleLowerCase();
  return `/assets/images/${routeName}.png`;
});
</script>

<template>
  <div class="base-layout" :style="{ backgroundImage: `url(${layoutBg})` }">
    <header class="header">
      <BaseLogo></BaseLogo>
      <Navigation></Navigation>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss">
.base-layout {
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;


  @media screen and (min-width: 992px) {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
}

.header {
  padding: 40px;
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;

  @media screen and (max-width: 992px) {
    padding: 0px;
  }
}

.main {
  flex: 1;
}
</style>