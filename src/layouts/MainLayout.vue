<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import Navigation from '../components/Navigation/Navigation.vue';
import BaseLogo from '../components/BaseLogo.vue';

const router = useRouter();

const layoutClass = computed(() => {
  let routeName = router.currentRoute.value.name.toLocaleLowerCase();
  return routeName;
});
</script>

<template>
  <div class="base-layout" :class="('base-layout--' + layoutClass)">
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
  overflow-x: hidden;
  min-height: 100vh;

  &--home {
    background-image: url('../assets/home/background-home-desktop.jpg');

    @media screen and (max-width: 768px) {
      background-image: url('../assets/home/background-home-tablet.jpg');
    }

    @media screen and (max-width: 480px) {
      background-image: url('../assets/home/background-home-mobile.jpg');
    }
  }

  &--destination {
    background-image: url('../assets/destination/background-destination-desktop.jpg');

    @media screen and (max-width: 768px) {
      background-image: url('../assets/destination/background-destination-tablet.jpg');
    }

    @media screen and (max-width: 480px) {
      background-image: url('../assets/destination/background-destination-mobile.jpg');
    }
  }

  &--crew {
    background-image: url('../assets/crew/background-crew-desktop.jpg');

    @media screen and (max-width: 768px) {
      background-image: url('../assets/crew/background-crew-tablet.jpg');
    }

    @media screen and (max-width: 480px) {
      background-image: url('../assets/crew/background-crew-mobile.jpg');
    }
  }

  &--technology {
    background-image: url('../assets/technology/background-technology-desktop.jpg');

    @media screen and (max-width: 768px) {
      background-image: url('../assets/technology/background-technology-tablet.jpg');
    }

    @media screen and (max-width: 480px) {
      background-image: url('../assets/technology/background-technology-mobile.jpg');
    }
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
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}
</style>