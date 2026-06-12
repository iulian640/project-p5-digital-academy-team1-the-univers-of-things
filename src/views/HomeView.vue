<!-- Vista principal: hero, bento destacados, catalogo con paginacion -->
<script setup>
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import AppPagination from '@/components/layout/AppPagination.vue'

const currentPage = ref(1)
const totalPages = ref(12)

function handlePageChange(page) {
    currentPage.value = page
    // TODO: cuando Juan conecte la API, cargar los juegos esto es solo para probar como se ve
}
</script>

<template>
    <MainLayout>

        <!-- Hero section -->
        <section class="hero" aria-labelledby="hero-title">
            <div class="hero__content">

                <div class="hero__left">
                    <span class="hero__tag">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
                        </svg>
                        El único género que importa
                    </span>

                    <h1 id="hero-title" class="hero__title" aria-label="FPS">FPS</h1>

                    <div class="hero__acronym" aria-label="FPS: Frontenders Programando Sin Dormir">
                        <div class="hero__acronym-part">
                            <span class="hero__acronym-letter" aria-hidden="true">F</span>
                            <span class="hero__acronym-word">Frontenders</span>
                        </div>
                        <span class="hero__acronym-sep" aria-hidden="true"></span>
                        <div class="hero__acronym-part">
                            <span class="hero__acronym-letter" aria-hidden="true">P</span>
                            <span class="hero__acronym-word">Programando</span>
                        </div>
                        <span class="hero__acronym-sep" aria-hidden="true"></span>
                        <div class="hero__acronym-part">
                            <span class="hero__acronym-letter" aria-hidden="true">S</span>
                            <span class="hero__acronym-word">Sin Dormir</span>
                        </div>
                    </div>

                    <p class="hero__joke">
                        también conocido como <em>First Person Shooter</em>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path
                                d="M7 6h2v4H7V6zm4 0h2v2h-2V6zm0 4h2v2h-2v-2zM3 8C3 5.24 5.24 3 8 3h8c2.76 0 5 2.24 5 5v2c0 2.76-2.24 5-5 5h-1l-3 3v-3H8c-2.76 0-5-2.24-5-5V8zm2 0v2c0 1.65 1.35 3 3 3h3v2l2-2h2c1.65 0 3-1.35 3-3V8c0-1.65-1.35-3-3-3H8C6.35 5 5 6.35 5 8z" />
                        </svg>
                    </p>

                    <div class="hero__cta">
                        <RouterLink to="/catalog" class="btn btn--cta">
                            Ver Catálogo
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                            </svg>
                        </RouterLink>
                        <RouterLink to="/featured" class="btn btn--outline">
                            Ver Destacados
                        </RouterLink>
                    </div>
                </div>

                <!-- TODO: reemplazar con datos dinamicos del store cuando Juan conecte la API -->
                <div class="hero__right">
                    <article class="juego-mes" aria-label="Juego del mes destacado">
                        <div class="juego-mes__thumb">
                            <div class="juego-mes__thumb-bg" aria-hidden="true"></div>
                            <span class="juego-mes__badge">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                Juego del mes
                            </span>
                        </div>
                        <div class="juego-mes__body">
                            <h2 class="juego-mes__title">Neon Odyssey</h2>
                            <p class="juego-mes__desc">
                                Explora un universo cyberpunk masivo.
                                Miles de jugadores, una sola misión.
                            </p>
                            <div class="juego-mes__meta">
                                <span class="badge badge--rpg">RPG</span>
                                <span class="badge badge--platform">PC</span>
                            </div>
                            <p class="juego-mes__hint">Gestionado por el administrador</p>
                        </div>
                    </article>
                </div>

            </div>
        </section>

        <!-- Busqueda y filtros -->
        <form class="catalog-filters" role="search" aria-label="Búsqueda y filtros del catálogo">

            <div class="catalog-filters__search">
                <svg class="catalog-filters__search-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                    aria-hidden="true">
                    <path
                        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
                <label for="game-search" class="visually-hidden">Buscar juego por nombre</label>
                <input id="game-search" class="catalog-filters__input" type="search" placeholder="Buscar juego..." />
            </div>

            <div class="catalog-filters__selects">
                <label for="genre-filter" class="visually-hidden">Filtrar por género</label>
                <select id="genre-filter" class="catalog-filters__select">
                    <option value="">Género: Todos</option>
                    <option value="action">Acción</option>
                    <option value="rpg">RPG</option>
                    <option value="strategy">Estrategia</option>
                    <option value="shooter">Shooter</option>
                </select>

                <label for="platform-filter" class="visually-hidden">Filtrar por plataforma</label>
                <select id="platform-filter" class="catalog-filters__select">
                    <option value="">Plataforma: Todas</option>
                    <option value="pc">PC</option>
                    <option value="browser">Navegador</option>
                </select>
            </div>

        </form>

        <!-- Destacados bento -->
        <section class="destacados-home" aria-labelledby="destacados-title">
            <div class="destacados-home__inner">

                <h2 id="destacados-title" class="section-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                    </svg>
                    Destacados
                </h2>

                <!-- TODO: reemplazar con datos dinamicos del store cuando Juan conecte la API -->
                <div class="bento">
                    <article class="bento__card bento__card--big">
                        <div class="bento__bg bento__bg--purple" aria-hidden="true"></div>
                        <div class="bento__overlay" aria-hidden="true"></div>
                        <div class="bento__content">
                            <span class="bento__badge">
                                <span class="bento__badge-dot" aria-hidden="true"></span>
                                Destacado
                            </span>
                            <h3 class="bento__title">Neon Odyssey</h3>
                            <p class="bento__desc">
                                Explora un universo cyberpunk masivo.
                                Miles de jugadores, una sola misión.
                            </p>
                        </div>
                    </article>

                    <article class="bento__card bento__card--small">
                        <div class="bento__bg bento__bg--red" aria-hidden="true"></div>
                        <div class="bento__overlay" aria-hidden="true"></div>
                        <div class="bento__content bento__content--sm">
                            <span class="bento__badge">
                                <span class="bento__badge-dot" aria-hidden="true"></span>
                                Destacado
                            </span>
                            <h3 class="bento__title bento__title--sm">Chrome Rebellion</h3>
                            <p class="bento__desc--sm">Acción táctica en entornos post-apocalípticos.</p>
                        </div>
                    </article>

                    <article class="bento__card bento__card--small">
                        <div class="bento__bg bento__bg--green" aria-hidden="true"></div>
                        <div class="bento__overlay" aria-hidden="true"></div>
                        <div class="bento__content bento__content--sm">
                            <span class="bento__badge">
                                <span class="bento__badge-dot" aria-hidden="true"></span>
                                Destacado
                            </span>
                            <h3 class="bento__title bento__title--sm">Void Protocol</h3>
                            <p class="bento__desc--sm">Estrategia en tiempo real, espacio profundo.</p>
                        </div>
                    </article>
                </div>

            </div>
        </section>

        <!-- Catalogo -->
        <section class="catalog-home" aria-labelledby="catalogo-title">
            <div class="catalog-home__inner">

                <h2 id="catalogo-title" class="section-label">El catálogo</h2>

                <!-- TODO: reemplazar con ItemCard cuando Juan conecte la API -->
                <ul class="catalog-home__grid">
                    <li v-for="index in 10" :key="index" class="catalog-home__item">
                        <article class="card catalog-home__placeholder" aria-label="Cargando juego...">
                            <div class="card__thumb">
                                <div class="card__thumb-bg catalog-home__placeholder-bg" aria-hidden="true"></div>
                            </div>
                            <div class="card__body">
                                <div class="card__header">
                                    <span class="card__title">Cargando...</span>
                                </div>
                            </div>
                        </article>
                    </li>
                </ul>

                <AppPagination :current-page="currentPage" :total-pages="totalPages" @page-change="handlePageChange" />

            </div>
        </section>

    </MainLayout>
</template>