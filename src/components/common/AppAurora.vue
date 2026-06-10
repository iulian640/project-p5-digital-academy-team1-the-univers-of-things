<!-- Fondo aurora animado: 3 blobs decorativos con fps-aurora -->
<script setup>
</script>

<template>
    <div class="aurora" aria-hidden="true">
        <div class="aurora__blob aurora__blob--purple"></div>
        <div class="aurora__blob aurora__blob--cyan"></div>
        <div class="aurora__blob aurora__blob--orange"></div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/base/variables' as *;

/* Fondo aurora animado: 3 blobs con fps-aurora, mobile-first */

.aurora {
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;

    &__blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.15;
        animation: fps-aurora linear infinite;

        @media (min-width: $bp-tablet) {
            filter: blur(130px);
            opacity: 0.22;
        }

        &--purple {
            width: 280px;
            height: 280px;
            background: #7c3aed;
            top: -100px;
            left: -80px;
            animation-duration: 22s;

            @media (min-width: $bp-tablet) {
                width: 650px;
                height: 650px;
                top: -220px;
                left: -120px;
            }
        }

        &--cyan {
            width: 220px;
            height: 220px;
            background: #0e7490;
            top: 15%;
            right: -80px;
            animation-duration: 28s;
            animation-delay: -10s;

            @media (min-width: $bp-tablet) {
                width: 520px;
                height: 520px;
                right: -160px;
            }
        }

        &--orange {
            width: 180px;
            height: 180px;
            background: #c2410c;
            bottom: 5%;
            left: 25%;
            animation-duration: 20s;
            animation-delay: -16s;

            @media (min-width: $bp-tablet) {
                width: 420px;
                height: 420px;
                left: 28%;
            }
        }
    }
}
</style>