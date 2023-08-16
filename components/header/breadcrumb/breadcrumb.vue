<template>
    <div class="breadcrumb-nav" :class="className">
        <hr>
        <nav>
            <ul class="brcrumb-menu">
                <li>
                    <LazyCustomLinksPreventLinks to="/dashboard/home" :title="'Dispositivos'" :className="'linkActive'">
                    </LazyCustomLinksPreventLinks>
                </li>
                <li>
                    <LazyCustomLinksPreventLinks to="/dashboard/perfil" :title="'Perfil'" :className="'linkActive'">
                    </LazyCustomLinksPreventLinks>
                </li>
                <li>
                    <LazyCustomLinksPreventLinks to="/dashboard/config" :title="'Configurações'" :className="'linkActive'">
                    </LazyCustomLinksPreventLinks>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
defineProps({
    className: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>
.breadcrumb-nav {
    display: flex;
    width: 100%;
    height: auto;

    &.desktop {
        padding-top: 40px;
        padding-left: 62px;
    }

    &.mobile {
        display: none !important;
    }

    hr {
        display: none;
    }

    &>nav {
        .brcrumb-menu {
            display: flex;
            gap: 32px;
            width: 100%;
            height: auto;
            list-style: none;

            li {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: auto;
            }
        }
    }
}

@media (max-width: 600px) {
    .breadcrumb-nav {
        flex-direction: column;

        &.desktop {
            display: none;
        }

        &.mobile {
            display: flex !important;
        }

        hr {
            display: block;
            width: 100%;
            height: 0.75px;
            background: $subtitleColor;
        }

        &>nav {
            .brcrumb-menu {
                justify-content: space-around;
                gap: 10px;
                padding: 12px;

                li {
                    a {
                        color: white;
                    }

                    &:nth-child(3) {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>