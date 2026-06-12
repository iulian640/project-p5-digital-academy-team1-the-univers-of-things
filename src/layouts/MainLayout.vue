<!-- Layout publico: AppAurora + TheHeader + slot + TheFooter -->
<script setup>
import AppAurora from '@/components/layout/AppAurora.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
    <AppAurora />
    <AppHeader />
    <main class="main-layout">
        <slot />
    </main>
    <AppFooter />
</template>
