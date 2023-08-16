<template>
    <ClientOnly>
        <section class="faq" style="color: white;" id="duvidas">
            <div class="faq-title">
                <h3 class="fs-5">faq</h3>
                <h1 class="fs-4">Perguntas Frequentes</h1>
            </div>

            <div class="faq-description">
                <div class="faq-column">
                    <ul>
                        <li :ref="li_active" v-for="(value, index) in array_separate(0, 3)" :key="index">
                            <a @click.prevent="clickActive(index)">
                                <span>{{ value.title }}</span>

                                <img src="~/assets/img/expand_more01.svg" alt="abrir menu">
                            </a>

                            <div class="dropdown">
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit,
                                {{ value.description }}
                            </div>
                        </li>

                    </ul>

                </div>
                <div class="faq-column">
                    <ul>
                        <li :ref="li_active" v-for="(value, index) in array_separate(3, faqs.length)" :key="index">
                            <a @click.prevent="clickActive(index + 3)">
                                <span>{{ value.title }}</span>
                                <!-- <img src="~/assets/img/IconSetPracima.svg" alt="abrir menu"> -->
                                <img src="~/assets/img/expand_more01.svg" alt="abrir menu">
                            </a>

                            <div class="dropdown">
                                {{ value.description }}
                            </div>
                        </li>

                    </ul>
                </div>


            </div>
        </section>
    </ClientOnly>
</template>

<script lang="ts" setup>
import { arrayFaqs } from '~/util/faqs';

const faqs = ref<{ title: string, description: string }[]>(arrayFaqs);
const liActive = ref<HTMLElement[]>([]);

const li_active = (el: any) => { liActive.value.push(el) };
//ending variable

//function
const clickActive = (index: any) => { liActive.value[index]?.classList.toggle(`active-li`) };

const array_separate = (index: number, ending: number) => faqs.value.slice(index, ending)
//ending function

</script>

<style lang="scss" scoped>
.faq {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    width: 100%;
    height: 100%;

    .faq-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        width: 100%;
        height: 100%;
        color: white;


        h3,
        h1 {
            font-style: normal;
            text-transform: uppercase;
        }

        h3 {
            font-weight: 400;
            line-height: 26px;
            font-variant: small-caps;

        }

        h1 {
            font-weight: 700;
            line-height: 35px;
            text-align: center;
            letter-spacing: 0.25px;


        }
    }

    .faq-description {
        display: inline-flex;
        flex-wrap: wrap;
        //grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        gap: 16px;
        // row-gap: 57px;
        column-gap: 16px;
        justify-content: center;
        justify-items: center;
        width: 100%;
        height: 100%;
        color: white;
        padding: 0 6rem;

        .faq-column {
            flex: 1 0 600px;
            width: 616px;
            height: 100%;

            ul {
                display: inline-flex;
                flex-direction: column;
                gap: 16px;
                width: 100%;

                li {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    align-items: center;
                    list-style: none;
                    padding: 12px 0;
                    border-bottom: 1px solid #333333;

                    &.active-li {
                        flex-direction: column;
                        height: auto;

                        .dropdown {
                            display: block;
                            color: $subtitleColor;
                        }

                        a {
                            img {
                                width: 20px;
                                height: 20 px;
                                content: url('~/assets/img/IconSetPracima.svg');
                                padding: 0;
                            }
                        }
                    }

                    a {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 16px;
                        width: 100%;
                        padding: 0px 27px 0px 0px;
                        font-size: 18px;
                        font-weight: 600;
                        text-decoration: none;
                        color: white;
                        cursor: pointer;

                        span {
                            width: 100%;
                        }

                        img {
                            display: flex;
                            width: 20px;
                            height: 20px;
                            justify-content: center;
                            align-items: center;
                            padding: 5px;
                        }
                    }

                    .dropdown {
                        display: none;
                        color: $subtitleColor;
                    }
                }
            }
        }
    }
}


@media (max-width: 600px) {
    .faq {
        gap: 30px;

        .faq-title {
            &>h3 {
                color: rgba(255, 255, 255, 0.70);
                font-size: 1rem;
                font-style: normal;
                line-height: normal;
                letter-spacing: 1.1px;
            }

            &>h1 {
                letter-spacing: 1.1px;
                line-height: normal;
                font-size: 1.25rem;
                font-weight: 600;
            }
        }

        .faq-description {
            padding: 0 16px;

            .faq-column {
                flex: 1 0 auto;
                width: 100%;

                &>ul {
                    &>li {
                        &>a {
                            span {
                                font-size: 16px;
                                font-weight: 600;
                                letter-spacing: 0.15px;
                                line-height: 1.5rem;
                            }
                        }
                    }
                }
            }
        }
    }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {}

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {}

// XX-Large devices (larger desktops, 1400px and up)
// @media (min-width: 1400px) { 

// }
</style>