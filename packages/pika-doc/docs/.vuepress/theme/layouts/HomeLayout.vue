<template>
  <div class="pg-home-layout">
    <Navbar></Navbar>
    <div class="pg-home-layout__header">
      <div class="header-center">
        <div class="header-logo-box">
          <img class="header-logo" :src="$site.themeConfig.logo" alt="" />
        </div>
        <div class="header__text">
          <div class="header__title">
            {{ $site.title }}
          </div>
          <div class="header__desc">
            {{ $site.description }}
          </div>
        </div>
      </div>
    </div>

    <div class="pg-home-layout__content">
      <div class="content__items" v-if="features.length">
        <div
          class="conetent__item"
          v-for="(feat, index) in features"
          :ke="index"
        >
          <div class="content__title">{{ feat.title }}</div>
          <div class="content__desc">{{ feat.desc }}</div>
        </div>
      </div>

      <div class="content__button">开始使用</div>

      <Content></Content>
    </div>
  </div>
</template>

<script>
import Navbar from "@theme/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  computed: {
    features() {
      return this.$site.pages[0].frontmatter.feature || [];
    },
  },
};
</script>

<style lang="scss" scoped>
.pg-home-layout {
  background-color: #fefefe;

  .pg-home-layout__header {
    height: 400px;
    position: relative;
    text-align: right;
    background: linear-gradient(15deg, #d4380d 50%, #fcb859 50.1%);

    /* background: linear-gradient(
      45deg,
      rgba(234, 110, 72, 1) 0%,
      rgba(188, 26, 99, 1) 100%
    ); */

    .header-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    $size: 100px;
    .header-logo-box {
      width: $size;
      height: $size;
      background: #f5f5f5;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
      padding: 15px;
      border-radius: 200px;
      .header-logo {
        width: 100%;
        height: 100%;
      }
    }

    .header__text {
      position: absolute;
      bottom: -90px;
      width: 150%;

      .header__title {
        font-size: 34px;
        color: #fff;
        font-weight: 700;
        margin-top: 3px;
      }

      .header__desc {
        margin-top: 8px;
        font-size: 14px;
        color: #fff;
      }
    }
  }

  .pg-home-layout__menu {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 12;
    height: 68px;

    .menu__title {
      display: flex;
      align-items: center;
      letter-spacing: 2px;
      font-size: 18px;
      font-weight: 600;
      margin-left: 15px;

      .header-logo {
        width: 48px;
        height: 48px;
        margin-right: 10px;
      }
    }

    .pg-home-layout__item {
      display: inline-block;
      text-decoration: none;
      color: #000;
      padding: 0 20px;
      line-height: 68px;
      position: relative;
      transition: color 0.2s;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        height: 0px;
        border-radius: 0 0 4px 4px;
        width: 100%;
        display: block;
        background-color: #d4380d;
        transition: height 0.2s;
      }

      &:hover {
        color: #d4380d;
        &::before {
          height: 4px;
        }
      }
    }
  }

  .pg-home-layout__content {
    max-width: 740px;
    margin: 0 auto;

    .content__items {
      display: flex;
      justify-content: space-between;
      margin-top: 35px;

      .conetent__item {
        width: 30%;
        box-sizing: border-box;
        border-radius: 12px;
        background-color: #fff;
        padding: 15px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

        .content__title {
          font-size: 22px;
          font-weight: 600;

          color: #d4380d;
        }
        .content__desc {
          margin-top: 15px;
          font-size: 14px;
          line-height: 1.5;
          color: #5e5e66;
          text-indent: 2em;
        }
      }
    }

    .content__button {
      background-color: #d4380d;
      border-radius: 100px;
      width: 200px;
      height: 58px;
      color: #fff;
      margin: 50px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>