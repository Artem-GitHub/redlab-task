<template>
  <header class="header">
    <div class="container header__container">
      <nuxt-link
        class="logo"
        to="/"
      >
        <HeaderLogo />
      </nuxt-link>

      <div class="switcher">
        <div class="switcher__buttons">
          <button class="switcher__home active">
            Дом
          </button>
          <button class="switcher__office">
            Офис
          </button>
        </div>
      </div>

      <nav class="navigation">
        <nuxt-link
          active-class="active"
          class="navigation__link"
          to="/after-repair"
        >
          После ремонта
        </nuxt-link>
        <nuxt-link
          active-class="active"
          class="navigation__link"
          to="/general-cleaning"
        >
          Генеральная уборка
        </nuxt-link>
        <nuxt-link
          active-class="active"
          class="navigation__link"
          to="/regular-cleaning"
        >
          Регулярная уборка
        </nuxt-link>
        <nuxt-link
          active-class="active"
          class="navigation__link"
          to="/window-cleaning"
        >
          Мойка окон
        </nuxt-link>
      </nav>

      <div class="contacts">
        <span>+380 67 401 69 77</span>
        <span class="contacts__divider">|</span>
        <span>24/7</span>
      </div>

      <button class="menu-button">
        <HeaderMenuIcon />
      </button>
    </div>
  </header>
</template>

<script>
import HeaderLogo from '@/components/header/HeaderLogo'
import HeaderMenuIcon from '@/components/header/HeaderMenuIcon'

export default {
  name: 'BaseHeader',
  components: {
    HeaderLogo,
    HeaderMenuIcon
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 70px;
    background-color: transparent;
    padding: 0 36px 0 54px;
    position: absolute;
    z-index: 1;
    transition: background-color 0.4s ease-in-out;

    &:hover {
      background-color: $white;
    }

    &__container {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }

  .logo {
    flex-basis: calc(120 / 1350 * 100%);
  }

  .switcher {
    flex-basis: calc(212 / 1350 * 100%);

    &__buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 130px;
      height: 36px;
      border-radius: 19px;
      background-color: $white;
      padding: 0 3px;
    }

    &__home, &__office {
      width: 55px;
      height: 30px;
      border-radius: 15px;
      font-size: 14px;
      background-color: inherit;
      color: $text-secondary;

      &.active {
        background-color: $purple;
        color: $white;
      }
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    flex-basis: calc(668 / 1350 * 100%);

    &__link {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      white-space: nowrap;
      color: $black;
      margin: 0 3px;

      &.active {
        font-weight: 700;
      }
    }
  }

  .contacts {
    flex: 1;
    text-align: right;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    white-space: nowrap;
    color: $black;
    margin-right: 38px;

    &__divider {
      margin: 0 15px;
    }
  }

  .menu-button {
    background-color: transparent;
  }
</style>
