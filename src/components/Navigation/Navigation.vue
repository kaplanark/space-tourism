<script setup>
const links = [
    { name: 'Home', path: '/home' },
    { name: 'Destination', path: '/destination' },
    { name: 'Technology', path: '/technology' },
    { name: 'Crew', path: '/crew' }
];
</script>

<template>
    <ul class="nav">
        <li class="nav__item" v-for="(link, index) in links" :key="link.name">
            <router-link :to="link.path" class="nav__item-link">
                <strong>{{ '0' + index }}</strong>
                <span>{{ link.name }}</span>
            </router-link>
        </li>
    </ul>
</template>

<style lang="scss">
.nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    gap: 48px;
    z-index: 1;

    &::before {
        position: absolute;
        content: '';
        width: 100%;
        left: 0;
        bottom: 0;
        top: 0;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(40.7742px);
        z-index: -1;
    }

    @media screen and (min-width: 992px) {
        &::before {
            width: 100vw;
        }
        &::after {
            position: absolute;
            content: '';
            top: 50%;
            left: 0;
            transform: translateY(-50%) translateX(-90%);
            width: 50%;
            height: 1px;
            background: #FFFFFF;
            mix-blend-mode: normal;
            opacity: 0.25;
        }
    }

    &__item {
        // margin: 0 20px;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        padding: 32px 0;

        @media screen and (max-width: 992px) {
            font-size: 14px;
        }

        &-link {
            text-decoration: none;
            color: #fff;
            position: relative;
            padding: 32px 0;

            strong {
                margin-right: 10px;
            }

            span {
                font-weight: 400;
                text-transform: uppercase;
            }

            &::before {
                position: absolute;
                content: '';
                width: 100%;
                height: 2px;
                background: #fff;
                bottom: 0;
                left: 0;
                transform: scaleX(0);
                transform-origin: left;
                transition: transform 0.3s ease;
            }

            &:hover::before {
                transform: scaleX(1);
            }

            &.router-link-active::before {
                transform: scaleX(1);
            }
        }
    }
}
</style>