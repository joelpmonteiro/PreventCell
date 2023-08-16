<template>
    <section class="perfil">
        <div class="title">
            <h2>
                Perfil
            </h2>
            <span>Para maior segurança, mantenha os dados do seu perfil sempre atualizados</span>
        </div>

        <ul class="config">
            <li>
                <div class="item">
                    <img class="icon" src="~/assets/img/verify.svg" alt="verificar duas etapas">
                    <a href="">Verificação de duas etapas</a>
                </div>

            </li>

            <li :ref="li_active">
                <div class="item">
                    <div class="">
                        <img class="icon" src="~/assets/img/key.svg" alt="verificar duas etapas">

                        <a href="">Alterar senha</a>
                    </div>

                    <div class="">
                        <a class="icon_expand" @click.prevent="clickActive(0)" :class="{ 'expand': active }">
                            <img src="~/assets/img/expand_more.svg" alt="expandir mais">
                        </a>
                    </div>

                </div>



                <div class="dropdown">
                    <LazyDashboardFormChangePassword></LazyDashboardFormChangePassword>
                </div>
            </li>

            <li :ref="li_active">
                <div class="item">
                    <div>
                        <img class="icon" src="~/assets/img/lock.svg" alt="verificar duas etapas">

                        <a href="">Alterar PIN</a>
                    </div>


                    <div>
                        <a class="icon_expand" :class="{ 'expand-1': active }" @click.prevent="clickActive(1)">
                            <img src="~/assets/img/expand_more.svg" alt="expandir mais">
                        </a>
                    </div>
                </div>


                <div class="dropdown">
                    <LazyDashboardFormChangePin></LazyDashboardFormChangePin>
                </div>

            </li>

            <li :ref="li_active">
                <div class="item">
                    <div>
                        <img class="icon" src="~/assets/img/security.svg" alt="verificar duas etapas">

                        <a href="">Termos de Uso e Privacidade</a>
                    </div>

                    <div>
                        <a class="icon_expand" @click.prevent="clickActive(2)">
                            <img src="~/assets/img/expand_more.svg" alt="expandir mais">
                        </a>

                    </div>
                </div>

                <!-- <div class="dropdown">
                    aaaaa
                    aaaaa
                    aaaaa
                </div> -->


            </li>

            <li>
                <div class="item">
                    <img class="icon" src="~/assets/img/help.svg" alt="verificar duas etapas">

                    <a href="">Central de Ajuda</a>
                </div>

            </li>

            <li>
                <div class="item">
                    <img class="icon" src="~/assets/img/delete.svg" alt="verificar duas etapas">

                    <a href="">Deletar conta</a>
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">

const active = ref<boolean>(false);
const liActive = ref<HTMLElement[]>([]);

const li_active = (el: any) => {
    liActive.value.push(el);
};

//call function to get active
const clickActive = (index: number) => {
    liActive.value[index].querySelector('.icon_expand')?.classList.toggle(`expand-2`);
    liActive.value[index].classList.toggle('item-active');

    //liActive.value[index].classList.value = liActive.value[index].classList.value === '' ? 'item-active' : '';
}

</script>

<style scoped lang="scss">
main {
    &>.perfil {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 81px 0;
        width: 60%;
        margin-left: auto;
        margin-right: auto;

        .title {
            display: flex;
            gap: 13px;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 32px;

            h2 {
                color: rgba(0, 0, 0, 0.87);
                /* Body 1 */
                font-size: 20px;
                font-weight: bold;
                line-height: 150%;
                /* 30px */
                letter-spacing: 0.30px;
            }

            span {
                color: rgba(0, 0, 0, 0.60);
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.176px;
            }
        }

    }

    .config {
        display: flex;
        gap: 16px;
        flex-direction: column;
        align-items: flex-start;
        list-style: none;
        width: 100%;

        li {
            display: flex;
            gap: 16px;
            padding: 17.913px 15.808px 17.913px 16px;
            border-radius: 4px;
            background: #FFF;
            width: 100%;
            height: auto;

            .dropdown {
                display: none;
            }

            &.item-active {
                display: flex;
                flex-direction: column;

                .dropdown {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    width: 100%;
                    padding: 0 40px;
                    height: auto;
                    // min-height: 312px;
                    background-color: #FFF;
                }
            }

            &:nth-child(2)>.item {
                justify-content: space-between;
            }

            &:nth-child(3)>.item {
                justify-content: space-between;
            }

            &:nth-child(4)>.item {
                justify-content: space-between;
            }

            .item {
                display: flex;
                gap: 16px;
                align-items: center;
                width: 100%;
                height: auto;



                img.icon {
                    display: flex;
                    width: 24px;
                    height: 24px;
                    justify-content: center;
                    align-items: center;
                }

                a {
                    color: rgba(0, 0, 0, 0.87);
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                    text-decoration: none;
                    /* 21px */
                    letter-spacing: 1.25px;

                    &:hover {
                        color: $colorBackground;
                    }
                }

                &>div:nth-child(1) {
                    display: flex;
                    gap: 16px;

                }

                &>div:nth-child(2) {
                    .icon_expand {
                        display: flex;
                        width: auto;
                        height: auto;
                        padding: 9px 9.808px 10.826px 8px;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;

                        &.expand,
                        &.expand-1,
                        &.expand-2 {

                            img {
                                width: auto;
                                height: auto;
                                content: url('~/assets/img/expand_less.svg');
                            }
                        }
                    }
                }


            }




        }
    }
}
</style>