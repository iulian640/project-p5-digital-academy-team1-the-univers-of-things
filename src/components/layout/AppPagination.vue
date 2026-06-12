<!-- Paginacion reutilizable -->

<script setup>
defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    totalPages: {
        type: Number,
        required: true
    }
})

defineEmits(['page-change'])
</script>

<template>
    <nav class="pagination" aria-label="Paginacion del listado">

        <button class="pagination__btn" aria-label="Pagina anterior" :disabled="currentPage === 1"
            @click="$emit('page-change', currentPage - 1)">←</button>

        <button v-for="page in totalPages" :key="page" class="pagination__btn"
            :class="{ 'pagination__btn--active': page === currentPage }"
            :aria-current="page === currentPage ? 'page' : undefined" @click="$emit('page-change', page)">{{ page
            }}</button>

        <button class="pagination__btn" aria-label="Pagina siguiente" :disabled="currentPage === totalPages"
            @click="$emit('page-change', currentPage + 1)">→</button>

    </nav>
</template>