<template>
  <div class="home">
    <div class="main__wrap d-flex align-items-center">
    <div class="container">
        <div class="row">
            <div class="col-4 d-flex flex-column justify-content-center">
                <div class="caption">
                    <h1 class="caption__text caption__text_size_lg caption__text_style_lite caption__text_uppercase text-left">Kaowebdev</h1>
                    <p class="caption__back caption__text_style_big caption__text_size_bg caption__text_color_grey">kao</p>
                </div>
                <div class="main__description_grad">
                    <div class="main__description mt-5">
                        <p class="main__text main__text_style_light main__text_size_md text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dignissimos, beatae error dicta iste vitae autem eum, eos quisquam blanditiis, reiciendis ab nemo! Deleniti exercitationem vitae, explicabo ducimus cupiditate,
                            illo error nam soluta maiores consectetur esse aliquam eum delectus suscipit dolore necessitatibus cum. Iste corporis rem qui hic, architecto quaerat!</p>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="main__img-wrap">
                </div>
            </div>
        </div>
    </div>
    <div class="callMe d-flex flex-column align-items-center p-4">
        <a href="#" class="callMe__phone"><i class="fa fa-phone"></i></a>
        <a href="#" class="main__text main__text_style_small main__text_color_grey mt-4">Interested?</a>
    </div>
    <div class="more py-4">
       <router-link to="/about"> <p class="main__text main__text_style_small main__text_color_blue">more</p></router-link>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {
    
  }
}
</script>

<style lang="scss">
.caption {
    position: relative;
    &__text {
        &_size_lg {
            font-size: (40rem / 16);
        }
        &_size_bg {
            font-size: (100rem / 16);
        }
        &_uppercase {
            text-transform: uppercase;
        }
        &_style_lite {
            font-weight: 300;
            letter-spacing: 4px;
        }
        &_style_big {
            position: absolute;
            bottom: 0;
            left: 0;
            margin-left: -5px;
            line-height: 80px;
            text-transform: uppercase;
            font-weight: 500;
            letter-spacing: 5px;
            z-index: -1;
        }
        &_color {
            &_grey {
                color: #f4f4f4;
            }
        }
    }
}

.noneOutline {
    &:active,
    &:focus {
        outline: none !important;
    }
    &::-moz-focus-inner {
        border: 0 !important;
    }
}
.main {
  &__wrap {
      width: 100%;
      height: 100vh;
      padding-left: 110px;
  }
  &__img-wrap {
      max-width: 680px;
      width: 100%;
      padding-top: 55%;
      background: yellow;
      box-shadow: 9px 8px 20px rgba(0, 0, 0, 0.08);
      background-image: url('../assets/imac.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
  }
  &__text {
      &_size_md {
          font-size: (18rem / 16);
      }
      &_style_light {
          font-weight: 300;
          color: #2e2e2e;
          line-height: 1.86;
      }
      &_style_small {
          font-size: (10rem / 16);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 2px;
      }
      &_color_grey {
          color: #fae8e8;
      }
      &_color_blue {
          color: #78bbb3;
      }
  }
  &__description {
      max-height: 200px;
      overflow-y: scroll;
      overflow-x: hidden;
      &::-webkit-scrollbar {
          display: none;
      }
      overflow: -moz-scrollbars-none;
      scrollbar-width: none;
      &_grad {
          position: relative;
          cursor: n-resize;
          &::after {
              content: "";
              display: block;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 60px;
              background: linear-gradient(180deg, rgba(255, 202, 255, 0.1), rgba(255, 255, 255, 1) 100%);
          }
      }
  }
}

.callMe {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    &__phone {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        background: #78bbb3;
        color: #ffffff;
        font-size: (16rem / 16);
    }
}

.more {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        display: block;
        width: 1px;
        height: 35px;
        background: #78bbb3;
    }
}
</style>
