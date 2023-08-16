<template>
    <div class="blur">
        <div class="background_img">

            <LazyHeaderChildhead class="header-p" :layout="'default'" :styleTypeRouter="styleTypeRouter"
                @open-child-modal="$emit('open-modal-login', true)">
            </LazyHeaderChildhead>
            <div class="description">
                <div class="text">
                    <h1 class="title fs-2">
                        Proteção reforçada para seus acessos
                    </h1>

                    <h5 class="subtitle fs-5">
                        Previna-se de golpes e acessos indesejados com o bloqueio imediato em caso de roubo ou perda de seus
                        dispositivos
                    </h5>
                </div>

                <div class="btn-protect">
                    <button type="button" class="btn-primary" @click="$emit('open-btn', true)">
                        Quero me Proteger
                    </button>

                </div>

                <!-- <div class="aboutMore">
                    <a href="#">
                        Saiba mais
                        <LazyIconsSetUpIcons></LazyIconsSetUpIcons>
                    </a>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const styleTypeRouter = computed(() => {
    return route.path === '/register' ? { height: '96px', colorLogo: 'black' } : { height: '88px', colorLogo: 'white' };
})
</script>
<style lang="scss">
.blur {
    width: 100%;
    height: 100%;
    background: rgba(0, 4, 3, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(1px);

    .background_img {
        background-image: url('../../assets/img/background-prevent-cell.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100vh;
        //height: 50rem;
        backdrop-filter: blur(1px);

    }

}

.header-p {
    padding: 0 88px;
}

.description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 27px;
    width: 100%;
    height: 44rem;
    color: #FFFFFF;
    padding: 0 6rem;

    .text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        gap: 27px;
        margin-bottom: 2.5rem;

        h1.title {
            width: 50%;
            font-style: normal;
            font-weight: 800;
            line-height: 53px;
        }

        h5.subtitle {
            width: calc(55% - 100px);
            font-size: 20px;
            line-height: 22px;
            font-style: normal;
            font-weight: 400;
            color: $subtitleColor;

        }
    }

    .btn-protect {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        margin-right: auto;
        gap: 10px;
        width: 100%;
        height: 100%;

        .btn-primary {
            font-family: Inter-Medium;
            font-weight: 500;
            line-height: 27.134px;
            color: black;

        }



    }


}

@media (max-width: 600px) {


    .description {
        padding: 0 43px 0 16px;
        height: 100% !important;

        &>.text {
            &>h1 {
                width: 100% !important;
                font-size: 32px;
                font-weight: 700 !important;
                line-height: 35px !important;
                letter-spacing: 0.25px;
            }

            &>h5 {
                width: 100% !important;
            }
        }

        &>.btn-protect {
            justify-content: center;
        }

    }
}
</style>