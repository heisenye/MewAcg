<script>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { goLogin, goProfile, goSearch, goSearchResult } from '@/utils/router'
import TheAvatar from '@/components/TheAvatar.vue'
import { TheButton, TheIcon, TheNavigation } from 'ui'
import { useToken } from 'common'
import { BASE_URL } from 'common'

const links = [
  { name: 'home', zh: '主页' },
  { name: 'community', zh: '社区' },
  { name: 'about', zh: '关于' },
  { name: 'history', zh: '历史' },
  { name: 'favorite', zh: '收藏' }
]

export default {
  name: 'IndexNavigation',
  components: { TheButton, TheIcon, TheNavigation, TheAvatar, RouterLink },
  setup() {
    const route = useRoute()
    const { token } = useToken

    const keyword = ref('')
    const isSearchDisabled = computed(() => !keyword.value.trim())
    const activeLinkIndex = ref(+sessionStorage.getItem('activeLinkIndex') || 0)
    const windowWidth = ref(window.innerWidth)

    watch(
      [activeLinkIndex, route],
      ([newActiveLinkIndex, newRoute]) => {
        sessionStorage.setItem('activeLinkIndex', String(newActiveLinkIndex))
        activeLinkIndex.value = links.findIndex((link) => link.name === newRoute.name)
      },
      {
        immediate: true
      }
    )

    const linkBottomPosition = computed(() => {
      if (windowWidth.value > 1050) {
        const gap = (712 - 60 * 5) / 6
        return {
          left: activeLinkIndex.value * (gap + 60) + gap + 'px'
        }
      }
      if (windowWidth.value > 600) {
        const gap = (516 - 56 * 5) / 6
        return { left: activeLinkIndex.value * (gap + 56) + gap + 'px' }
      } else {
        const gap = (windowWidth.value - 56 * 5) / 6
        return {
          left: activeLinkIndex.value * (gap + 56) + gap + 'px'
        }
      }
    })
    onMounted(() => {
      window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth
      })
    })

    onUnmounted(() => {
      window.removeEventListener('resize', () => {
        windowWidth.value = window.innerWidth
      })
    })

    return {
      BASE_URL,
      keyword,
      isSearchDisabled,
      links,
      linkBottomPosition,
      activeLinkIndex,
      token,

      goLogin,
      goProfile,
      goSearch,
      goSearchResult
    }
  }
}
</script>

<template>
  <main class="relative">
    <nav class="navbar bg-primary fixed top-16 min-w-[300px] font-base">
      <div
        class="absolute left-1/2 -translate-x-1/2 max-w-screen-lg 3xl:max-w-screen-xl w-full flex justify-evenly"
      >
        <template v-for="(link, index) in links" :key="link">
          <router-link
            :to="{ name: link.name }"
            class="link link-hover text-base font-black px-3 py-1 6xl:text-lg font-base"
            :class="{ 'text-info': activeLinkIndex === index }"
            @click="() => (activeLinkIndex = index)"
            >{{ link.zh }}
          </router-link>
        </template>
        <span
          class="bg-info transition-all duration-300 ease-in-out absolute top-12 w-[60px] h-[2px]"
          :class="{ 'opacity-0': activeLinkIndex === -1 }"
          :style="linkBottomPosition"
        ></span>
      </div>
    </nav>
    <TheNavigation>
      <template #left>
        <RouterLink
          :to="{ name: 'home' }"
          class="relative btn btn-ghost tracking-wider font-medium rounded-lg font-Poppins normal-case overflow-hidden after:splash active:after:splash-active text-white"
        >
          <span class="router-text"> MewAcg </span>
        </RouterLink>
      </template>
      <template #right>
        <div class="nav-input-container">
          <input
            type="text"
            placeholder="搜索标题或标签"
            class="nav-input"
            @keyup.enter="goSearchResult(keyword)"
            v-model.trim="keyword"
          />
          <TheIcon type="magnifying-glass" class="absolute left-4 3xl:text-lg text-accent" />
          <TheButton
            shape="circle"
            type="error"
            :disabled="isSearchDisabled"
            class="absolute right-4 size-6 3xl:size-8 shadow-md"
            @click="goSearchResult(keyword)"
          >
            <TheIcon
              size="sm"
              type="arrow-right"
              class="text-base"
              :class="{ 'text-white': !isSearchDisabled }"
            />
          </TheButton>
        </div>
        <TheButton
          type="ghost"
          size="md"
          shape="circle"
          class="2md:hidden text-white"
          @click="goSearch"
        >
          <TheIcon type="magnifying-glass" class="text-base sm:text-lg 2md:hidden" />
        </TheButton>
        <TheButton
          type="ghost"
          size="md"
          shape="circle"
          tooltip="消息"
          :transition="true"
          class="before:text-sm md:text-md text-white"
        >
          <TheIcon type="bell" class="router-icon" />
        </TheButton>
        <TheButton
          type="ghost"
          shape="circle"
          tooltip="个人中心"
          :transition="true"
          class="before:text-xs md:before:text-sm size-12 xl:size-14 2xl:size-16"
          @click="token ? goProfile() : goLogin()"
        >
          <TheAvatar class="sm:text-xl 2xl:text-2xl">
            <TheIcon
              type="user"
              size="lg"
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white sm:text-lg 2xl:text-xl 3xl:text-2xl"
            />
          </TheAvatar>
        </TheButton>
      </template>
    </TheNavigation>
  </main>
</template>
