<!-- Navegacion publica: logo FPS + links + botones login/register -->
<script setup>
</script>

<template>
    <header class="header">
        <nav class="header__nav" aria-label="Navegacion principal">

            <RouterLink to="/" class="header__logo" aria-label="FPS — Ir a inicio">
                <span class="header__logo-icon" aria-hidden="true">FPS</span>
                <span class="header__logo-text">FPS</span>
            </RouterLink>

            <ul class="header__links" role="list">
                <li>
                    <RouterLink to="/">Inicio</RouterLink>
                </li>
                <li>
                    <RouterLink to="/catalogo">Catálogo</RouterLink>
                </li>
                <li>
                    <RouterLink to="/destacados">Destacados</RouterLink>
                </li>
            </ul>

            <ul class="header__actions" role="list">
                <li>
                    <RouterLink to="/login" class="btn btn--ghost">
                        Iniciar sesión
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/register" class="btn btn--primary">
                        Registrarse
                    </RouterLink>
                </li>
            </ul>

        </nav>
    </header>
</template>