<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    actionBorder: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div class="card">
        <div class="card__header">
            {{ props.title }}
        </div>
        <div class="card__content">
            {{ props.content }}
        </div>
        <div class="card__action" :class="{ 'card__action--border': props.actionBorder }">
            <slot name="action"></slot>
        </div>
    </div>
</template>

<style lang="scss">
.card {
    display: flex;
    flex-direction: column;
    gap: 54px;

    &__header {
        font-family: 'Bellefair', serif;
        text-transform: uppercase;
        color: #fff;
        font-style: normal;
        font-weight: 400;
        font-size: 100px;
        line-height: 1;

        @media screen and (max-width: 992px) {
            text-align: center;
        }
    }

    &__content {
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #D0D6F9;

        @media screen and (max-width: 992px) {
            text-align: center;
        }
    }

    &__action {
        padding-top: 28px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 72px;

        &--border {
            border-top: 1px solid #383B4B;
        }

        @media screen and (max-width: 992px) {
            justify-content: center;
        }
    }
}
</style>