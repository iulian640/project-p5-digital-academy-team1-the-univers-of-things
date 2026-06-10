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

<!-- Estilos del header -->

<style lang="scss" scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(3, 3, 8, 0.82);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-bottom: 1px solid var(--color-border);

    &__nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 56px;
        padding: 0 1rem;
        max-width: $bp-wide;
        margin: 0 auto;

        @media (min-width: $bp-tablet) {
            height: 64px;
            padding: 0 2.5rem;
        }
    }

    &__logo {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        flex-shrink: 0;
    }

    &__logo-icon {
        width: 32px;
        height: 32px;
        background: linear-gradient(135deg, #7c3aed, #06b6d4);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: $font-display;
        font-weight: 800;
        font-size: 12px;
        color: white;
        letter-spacing: -1px;
        flex-shrink: 0;

        @media (min-width: $bp-tablet) {
            width: 36px;
            height: 36px;
            font-size: 13px;
        }
    }

    &__logo-text {
        font-family: $font-display;
        font-weight: 800;
        font-size: 17px;
        color: var(--color-text);

        @media (min-width: $bp-tablet) {
            font-size: 19px;
        }
    }

    &__links {
        display: none;

        @media (min-width: $bp-tablet) {
            display: flex;
            align-items: center;
            gap: 2.2rem;
        }

        a {
            font-family: $font-mono;
            font-size: 11px;
            color: var(--color-text-muted);
            letter-spacing: 0.08em;
            text-transform: uppercase;
            transition: color var(--transition);

            &:hover,
            &.router-link-active {
                color: var(--color-secondary);
            }

            &:focus-visible {
                outline: 2px solid var(--color-secondary);
                outline-offset: 4px;
                border-radius: 2px;
            }
        }
    }

    &__actions {
        display: flex;
        align-items: center;
        gap: var(--space-2);

        @media (min-width: $bp-tablet) {
            gap: 10px;
        }

        .btn {
            font-size: 10px;
            padding: 6px 10px;

            @media (min-width: $bp-tablet) {
                font-size: 11px;
                padding: 8px 18px;
            }
        }
    }
}
</style>