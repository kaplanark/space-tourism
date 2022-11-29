<script setup>
import { ref, computed } from 'vue';
const props = defineProps(['tabs', 'active-tab']);
const emit = defineEmits(['active-tab']);

const activeTabIndex = ref(0);

const active = computed(() => {
    return activeTabIndex.value;
});

const clickHandler = (tab, index) => {
    activeTabIndex.value = index;
    emit('active-tab', tab);
};

</script>
<template>
    <ul class="tab">
        <li class="tab__item" v-for="(tab, index) in props.tabs" :key="tab" @click="clickHandler(tab, index)"
            :class="{ 'tab__item--active': activeTabIndex === index }">{{ tab }}</li>
    </ul>
</template>

<style lang="scss">
.tab {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 34px;

    @media screen and (max-width: 992px) {
        justify-content: center;
    }

    &__item {
        padding: 15px 0;
        text-transform: uppercase;
        color: #fff;
        position: relative;
        cursor: pointer;

        &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 2px;
            background-color: #fff;
            bottom: 0;
            left: 0;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.3s ease-in-out;
        }

        &:hover {
            &::before {
                transform: scaleX(1);
            }
        }

        &--active {
            &::before {
                transform: scaleX(1);
            }
        }
    }
}
</style>