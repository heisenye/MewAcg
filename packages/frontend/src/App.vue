<script>
import { RouterView } from 'vue-router'
import IndexNavigation from '@/components/IndexNavigation.vue'

export default {
  name: 'App',
  components: {
    IndexNavigation,
    RouterView
  }
  // data() {
  //   return {
  //     originalTitle: ''
  //   }
  // },
  // methods: {
  //   visibilitychangeHandler() {
  //     if (document.visibilityState === 'visible') {
  //       document.title = this.originalTitle
  //     } else {
  //       document.title = '(^-人-^)'
  //     }
  //   }
  // },
  // mounted() {
  //   this.originalTitle = document.title
  //   document.addEventListener('visibilitychange', this.visibilitychangeHandler)
  // },
  // destroyed() {
  //   document.removeEventListener('visibilitychange', this.visibilitychangeHandler)
  // }
}
</script>

<template>
  <transition name="nav" mode="out-in">
    <IndexNavigation v-if="$route.meta.showNav" class="z-50" />
  </transition>
  <RouterView v-slot="{ Component }">
    <transition name="component" mode="out-in">
      <!--      <keep-alive>-->
      <component :is="Component" :key="$route.fullPath" class="z-0"></component>
      <!--      </keep-alive>-->
    </transition>
  </RouterView>
</template>

<style scoped>
.component-enter-active,
.component-leave-active {
  transition: opacity ease-out 0.2s;
}

.component-enter-from,
.component-leave-to {
  opacity: 0;
}

.nav-enter-active,
.nav-leave-active {
  transition: opacity ease-in 0.3s;
}

.nav-enter-from,
.nav-leave-to {
  opacity: 0;
}
</style>
