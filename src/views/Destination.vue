<script setup>
import { ref, computed } from 'vue';
import Tab from '../components/Tab/Tab.vue';
import Card from '../components/Card/Card.vue';
import Widget from '../components/Widget/Widget.vue';

const tabs = ref(['Moon', 'Mars', 'Europa', 'Titan']);
const activeTab = ref('Moon');

const data = [
    {
        title: 'Moon',
        content: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        image: 'moon.svg',
        info: {
            avgDistance: '384,400 km',
            travelTime: '3.2 days',
        }
    },
    {
        title: 'Mars',
        content: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        image: 'mars.svg',
        info: {
            avgDistance: '225 MIL. km',
            travelTime: '9 months',
        }
    },
    {
        title: 'Europa',
        content: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        image: 'europa.svg',
        info: {
            avgDistance: '670 MIL. km',
            travelTime: '3 years',
        }
    },
    {
        title: 'Titan',
        content: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        image: 'titan.svg',
        info: {
            avgDistance: '1.2 BILL. km',
            travelTime: '8 years',
        }
    }
];

const activeData = computed(() => {
    return data.find((item) => item.title === activeTab.value);
});

const tabHandler = (tab) => {
    activeTab.value = tab;
};
</script>

<template>
    <div class="section">
        <div class="section__left">
            <div class="title">
                <span>01</span>
                <p>Pick your destination</p>
            </div>
            <div class="obj">
                <img :src="`assets/images/${activeData.image}`" alt="">
            </div>
        </div>
        <div class="section__right">
            <Tab :tabs="tabs" @active-tab="tabHandler"></Tab>
            <Card :title="activeData.title" :content="activeData.content" :action-border="true">
                <template #action>
                    <Widget title="Avg. dıstance" :text="activeData.info.avgDistance"></Widget>
                    <Widget title="Est. travel time" :text="activeData.info.travelTime"></Widget>
                </template>
            </Card>
        </div>
    </div>
</template>

<style lang="scss">
.section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-self: end;
    gap: 157px;
    padding: 0 112px 112px 112px;
    height: 100%;

    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
    }

    &__left {
        display: flex;
        flex-direction: column;
        gap: 92px;
        align-items: center;
        justify-content: flex-end;
        height: 100%;

        .title {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-size: 28px;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 4.5px;
            gap: 12px;
            position: relative;
            z-index: 2;

            span {
                mix-blend-mode: normal;
                opacity: 0.25;
            }

            @media screen and (max-width: 992px) {
                justify-content: center;
            }
        }

        .obj {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.5s ease-in-out;
            position: relative;
            z-index: 1;

            img {
                transform-origin: center;
                animation: clockwise 20s linear infinite;
            }

            @media screen and (min-width: 992px) {
                &:hover {
                    transform: scale(2.5) translate(-25%, 25%);
                }
            }
        }
    }

    &__right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        gap: 37px;
        position: relative;
        z-index: 2;
        height: 100%;
    }
}

@keyframes clockwise {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>