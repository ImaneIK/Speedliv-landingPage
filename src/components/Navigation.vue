<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <img class="w-1/5 h-auto" src="@/assets/logo.png/" alt="" />
      </div>

      <ul v-show="!mobile" class="navigation">
        <li>
          <a class="link" href="#home"> Home </a>
          <!-- <router-link class="link" :to="{ name: 'home' }">Home</router-link> -->
        </li>
        <li>
          <a class="link" href="#services"> Services </a>
          <!-- <router-link class="link" :to="{ name: '' }">About</router-link>> -->
        </li>
        <li><a class="link" href="#about"> About </a></li>
        <li><a class="link" href="#contact"> Contact </a></li>
      </ul>
      <div class="icon">
        <font-awesome-icon
          @click="toggleMobileNav"
          v-show="mobile"
          :icon="['fas', 'bars']"
          :class="{ 'icon-active': mobileNav }"
        ></font-awesome-icon>
      </div>

      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <a class="link" href="#home"> Home </a>
            <!-- <router-link class="link" :to="{ name: 'home' }">Home</router-link> -->
          </li>
          <li>
            <a class="link" href="#services"> Services </a>
            <!-- <router-link class="link" :to="{ name: '' }">About</router-link>> -->
          </li>
          <li><a class="link" href="#about"> About </a></li>
          <li><a class="link" href="#contact"> Contact </a></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    toggleMobileNav() {
      //done
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      //done
      const scrollPosition = window.scrollY;

      if (scrollPosition < 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    checkScreen() {
      //done
      this.windowWidth = window.innerWidth;

      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Roboto:wght@300;400&display=swap");
* {
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

header {
  background-color: white;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: black;
  top: 0;
  left: 0;
}

nav {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 1140px) {
    max-width: 1140px;
  }
}

ul,
.link {
  font-weight: 500;
  color: black;
  list-style: none;
  text-decoration: none;
}

li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}

.link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-bottom: 1px solid transparent;
}

.link:hover {
  color: #00afea;
  border-color: #00afea;
}

.branding {
  display: flex;
  align-items: center;
}

.branding img {
  /* width: 150px; */
  transition: 0.5s ease all;
}

.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}

.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
}

.icon font-awesome-icon {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}

.icon-active:active,
.icon-active.active {
  transform: rotate(180deg);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
}

.dropdown-nav li {
  margin-left: 0;
}

.dropdown-nav li .link {
  color: #000;
}

.mobile-nav-enter-active:active,
.mobile-nav-leave-active:active {
  transition: 1s leave all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.scrolled-nav {
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.scrolled-nav nav {
  padding: 8px 0;
}

/* .scrolled-nav nav img{
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      } */
</style>
