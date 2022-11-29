<script setup>
import Card from '../components/Card/Card.vue';

const data = {
  title: 'Space',
  content: 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!',
  info: {
    avgDistance: '400 km',
    travelTime: '2 days'
  }
}

</script>

<template>
  <section class="home">
    <div class="home__left">
      <div class="title">
        <p>Pick your destination</p>
      </div>
      <Card :title="data.title" :content="data.content"></Card>
    </div>
    <div class="home__right">
      <button class="btn btn--circle">explore</button>
    </div>
  </section>
</template>

<style lang="scss">
.home {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 157px;
  padding: 131px 165px;
  height: 100%;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 24px;

    @media screen and (max-width: 992px) {
      align-items: center;
      justify-content: center;
    }

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 28px;
      color: #D0D6F9;
      text-transform: uppercase;
      letter-spacing: 4.5px;

      @media screen and (max-width: 992px) {
        justify-content: center;
      }
    }
  }

  &__right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.btn {
  cursor: pointer;
  border: none;
  outline: none;

  &--circle {
    height: 274px;
    width: 274px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-family: 'Bellefair', serif;
    text-transform: uppercase;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: #FFFFFF;
      mix-blend-mode: normal;
      opacity: 0.1;
      transition: all 0.3s ease-in-out;
    }

    &::after{
      position: absolute;
      content: '';
      height: 90%;
      width: 90%;
      border-radius: 50%;
      border-top: 2px solid #D0D6F9;
      transition: all 0.3s ease-in-out;
      transform-origin: center;
      animation: clockwise 3s linear infinite;
    }

    &:hover {
      &::before {
        height: 450px;
        width: 450px;
      }

      &::after {
        height: 446px;
        width: 446px;
        border-color: #fceec3;
      }
    }
  }
}
</style>