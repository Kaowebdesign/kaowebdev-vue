<template>
    <div>
        <div class="mainNav d-flex align-items-center justify-content-center">
            <router-link to="/">
                <a href="#" class="logo_absolute logo_pos_top">
                    <div class="logo ">
                        <div class="logo__item logo__item_one"></div>
                        <div class="logo__item logo__item_two"></div>
                        <div class="logo__item logo__item_three"></div>
                    </div>
                    <p class="logo__text pl-1 m-0">KAO</p>
                </a>
            </router-link>
            <a href="#" class="mainNav__wrap">
                <div class="burgerMenu" id="burgerMenu">
                    <i class="burgerMenu__item burgerMenu__item_one"></i>
                    <i class="burgerMenu__item burgerMenu__item_two"></i>
                    <i class="burgerMenu__item burgerMenu__item_three"></i>
                    <i class="burgerMenu__item burgerMenu__item_for"></i>
                </div>
                <p class="mainNav__text mainNav__menuText text-center mt-3">m<br>e<br>n<br>u</p>
                <p class="mainNav__text mainNav__openText text-center mt-3">o<br>p<br>e<br>n</p>
                <p class="mainNav__text mainNav__closeText text-center mt-3">c<br>l<br>o<br>s<br>e</p>
            </a>
            <div class="mainNav__back"></div>
        </div>
        <div class="menu" id="menu">
            <div class="menu__wrap d-flex align-items-center">
                <ul class="menu__list d-flex flex-wrap align-items-around fullHeight m-0">
                    <li class="menu__item text-center py-5 d-flex justify-content-center align-items-center">
                        <a class="menu__link menu_hoverLink" href="#"></a>
                    </li>
                </ul>
                <ul class="menu__back m-0">
                    <li class="menu__back_line"></li>
                    <li class="menu__back_line"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.mainNav {
    position: fixed;
    top: 0;
    left: 0;
    width: 110px;
    height: 100vh;
    z-index: 120;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover .mainNav__back {
        transform: rotateX(0deg);
    }
    &:hover .burgerMenu__item_two,
    &:hover .burgerMenu__item_three {
        transform: translateX(-50px);
        opacity: 0;
    }
    &:hover .burgerMenu__item_one {
        transform: rotate(48deg);
    }
    &:hover .burgerMenu__item_for {
        transform: rotate(-48deg);
    }
    &:hover .mainNav__menuText {
        transform: scale(0);
        opacity: 0;
    }
    &:hover .mainNav__openText {
        transform: translateX(-50%) scale(1);
        opacity: 1;
    }
    &_active {
        .mainNav__menuText,
        .mainNav__openText {
            transform: translateX(-50%) scale(0);
            opacity: 0;
        }
        .mainNav__closeText {
            transform: translateX(-50%) scale(1);
        }
        &:hover .mainNav__openText {
            transform: scale(0);
            opacity: 0;
        }
    }
    &__back {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #f2f2f2;
        z-index: -1;
        transform: rotateX(90deg);
        transition: .6s ease-in;
    }
    &__wrap {
        text-decoration: none;
        &:hover {
            text-decoration: initial;
        }
    }
    &__menuText {
        transform: translateX(-50%) scale(1);
    }
    &__openText,
    &__closeText,
    &__menuText {
        position: absolute;
        top: 55%;
        left: 50%;
        display: block;
        color: #000000;
        transition: .6s;
        text-transform: uppercase;
    }
    &__openText,
    &__closeText {
        transform: translateX(-50%) scale(0);
    }
}

.burgerMenu {
    width: 35px;
    height: 35px;
    &__item {
        display: block;
        width: 35px;
        height: 1px;
        background-color: #78bbb3;
        margin: 8px 0;
        transition: .6s;
    }
    &_active {
        .burgerMenu__item_one {
            transform: rotate(48deg) translate(12px, 12px) !important;
        }
        .burgerMenu__item_for {
            transform: rotate(-48deg) translate(7px, -7px) !important;
        }
        .burgerMenu__item_two,
        .burgerMenu__item_three {
            transform: translateX(-50px) !important;
            opacity: 0;
        }
    }
}
.logo {
    display: block;
    width: 60px;
    height: 60px;
    &_absolute {
        position: absolute;
        top: 55%;
        left: 50%;
        display: block;
        color: #000000;
        transition: .6s;
        text-transform: uppercase;
        &:hover {
            text-decoration: none;
        }
        &:hover .logo__text {
            color: #78bbb3;
        }
        &:hover .logo__item {
            background: #78bbb3;
        }
    }
    &_pos_top {
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        text-decoration: none;
    }
    &__text {
        font-weight: 300;
        font-size: (16rem / 16);
        letter-spacing: 3px;
        color: #78bbb3;
        transition: .6s;
    }
    &__item {
        width: 50px;
        height: 1px;
        background: #78bbb3;
        transition: .6s;
        &_one {
            transform: rotate(90deg) translate(30px, 20px);
        }
        &_two {
            width: 36px;
            transform: rotate(45deg) translate(37px, 21px);
        }
        &_three {
            transform: rotate(135deg) translate(16px, -13px);
        }
    }
}

.menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    z-index: 100;
    padding: 30px 110px;
    transition: .8s ease-in-out;
    &_active {
        left: 0;
    }
    &__wrap {
        background: #ffffff;
        width: 100%;
        height: 100%;
        transition: .6s;
        will-change: transform;
        transform: translateX(calc(-100% - 110px));
        &_active {
            animation-name: showElement;
            animation-duration: 1.3s;
            animation-delay: 1s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        }
    }
    &__list {
        position: relative;
        z-index: 1;
        list-style-type: none;
    }
    &__link {
        position: relative;
        color: #000000;
        text-transform: uppercase;
        font-size: (32rem / 16);
        transition: .6s;
        &:hover {
            text-decoration: none;
            color: #78bbb3;
            transform: scale(1.1);
        }
        &:hover::after {
            transform: translate(-50%, -50%) rotateY(0deg);
        }
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotateY(90deg);
            display: block;
            width: 100%;
            height: 1px;
            background: #78bbb3;
            transition: transform .6s;
        }
    }
    &__letter {
        font-size: (100rem / 16);
    }
    &__item {
        position: relative;
        display: block;
        width: 33.3%;
        min-height: 50%;
        &:hover::after {
            text-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
        }
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: block;
            font-size: 200px;
            z-index: -1;
            color: #ffffff;
            text-shadow: 1px 1px 12px rgba(0, 0, 0, 0.11);
            transition: .6s;
        }
        &:first-child::after {
            content: "H";
        }
        &:nth-child(2)::after {
            content: "A";
        }
        &:nth-child(3)::after {
            content: "P";
        }
        &:nth-child(4)::after {
            content: "C";
        }
    }
    &__back {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        text-decoration: none;
        &:hover {
            text-decoration: initial;
        }
        &_line {
            position: absolute;
            top: 0;
            display: block;
            width: 1px;
            height: 100%;
            background: #f2f2f2;
            &:first-child {
                left: 33.33%;
            }
            &:last-child {
                right: 33.33%
            }
        }
    }
}
</style>