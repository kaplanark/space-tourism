<script setup>
const props = defineProps(['title', 'text']);
</script>
<template>
    <div class="widget">
        <div class="widget__title">
            {{ props.title }}
        </div>
        <div class="widget__content">
            {{ props.text }}
        </div>
    </div>
</template>

<style lang="scss">
.widget {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &__title {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 2.3625px;
        text-transform: uppercase;
        color: #D0D6F9;
    }

    &__content {
        font-family: 'Bellefair', serif;
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 32px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
}
</style>