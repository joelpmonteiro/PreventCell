<template>
    <main>

        <LazyContentServices></LazyContentServices>
        <LazyContentPartners></LazyContentPartners>
        <LazyContentContract></LazyContentContract>
        <LazyContentFAQ></LazyContentFAQ>
        <LazyContentContactUs></LazyContentContactUs>


    </main>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "default",
});
</script>

<style lang="scss">
main {
    display: block;
}




.welcome {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 8px;

    h1 {
        text-align: center;
        font-weight: 600;
        line-height: 26.4px;
    }

    span {
        text-align: center;
    }

    h1,
    span {
        color: white;
    }

}

.card-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: auto;

    .form-input,
    .form-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: auto;
        gap: 8px;

        input {
            height: 48px;
            padding: 12px 12px 0 12px;
            border-radius: 4px;
            border: 0.75px solid $inputColorBackground;
            background: $inputColorBackground;
            color: white;

            &:focus {
                outline: none;
            }

            &:focus-visible {
                border: .135rem solid #687680;

            }
        }

        span {
            padding: 0 0.9rem;
            color: $colorInputText;
            font-size: 12px;
            font-family: Inter;
            font-weight: 500;
        }
    }


    .forgotPassword {
        display: flex;
        justify-content: flex-end;
        padding: 8px 0px;

        a {
            text-decoration: none;

            span {
                color: white;
                text-align: right;
                font-size: 12px;
                line-height: 27.134px;
                padding: 0;
                cursor: pointer;
            }

            &:hover {
                text-decoration: underline;
                color: white;
                text-underline-offset: 3px;

            }
        }
    }
}

.form-check {
    display: flex;
    align-items: center;
    align-self: stretch;

    .check {
        display: flex;
        width: 44px;
        height: 44px;
        padding: 14px 14px 13px 13px;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        input {
            border-radius: 2px;
            width: 17px;
            height: 17px;
            appearance: none;
            cursor: pointer;

            &:checked {
                background: transparent;
            }

            &::before {
                content: "";
                display: block;
                position: absolute;
                width: 17px;
                height: 17px;
                top: 0;
                left: 0;
                background-color: transparent;
                border: 1px solid rgba(189, 189, 189, 1);
                border-radius: 2px;


            }

            &:checked:before {
                content: "";
                display: block;
                position: absolute;
                width: 17px;
                height: 17px;
                top: 0;
                left: 0;
                border-radius: 2px;
                border: 1px solid $inputChecked;
                background: $inputChecked;
            }

            &:checked:after {
                content: "";
                display: block;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 2px 2px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
                position: absolute;
                top: 2px;
                left: 6px;
            }

            // &:hover {
            //     background-color: rgba(235, 235, 235, 0.05);
            //     border-radius: 50%;
            // }
        }

        &:hover {
            background-color: rgba(235, 235, 235, 0.05);
            border-radius: 50%;
        }


    }

    span {
        color: white;
        text-align: center;
        font-size: 14px;
        letter-spacing: 1.12px;
    }
}

.diviser {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 30.168px;

    hr {
        width: 100%;
        height: 0.943px;
        border-bottom: 1px solid $colorInputText;

    }

    span {
        width: 60%;
        color: $colorInputText;
        text-align: center;
        font-size: 14px;
        font-family: Inter;
        letter-spacing: 0.905px;
    }

}

.socialsBtn {
    display: flex;
    align-items: flex-start;
    width: 100%;
    gap: 16px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        padding: 10px 16px;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #D9D9D9;
        background-color: #FFF;
        /* Button */
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.20);

        &:hover {
            cursor: pointer;
            background-color: $btnPrimary;
            box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
        }

    }
}

.already {
    text-align: center;
    color: white;

    a {
        color: white;
        text-decoration: underline;
        cursor: pointer;
    }
}
</style>