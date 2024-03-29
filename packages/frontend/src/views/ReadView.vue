<script>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import TheRead from '@/components/TheRead.vue'
import { getComicChapter, postView } from '@/utils/http.js'
import { TheImage, TheNavigation, TheIcon, TheButton, TheModal } from 'ui'
import { useDebounce, useToken } from 'common'

export default {
  name: 'ReadView',
  components: { TheRead, TheNavigation, TheImage, TheIcon, TheButton, TheModal },
  setup() {
    const route = useRoute()

    const { id, chapter } = route.params
    const { token } = useToken
    const pages = ref(0)
    const date = new Date().toISOString().split('T')[0]
    const imageWidth = ref('100')
    const isScrollingDown = ref(false)

    const scrollFn = (() => {
      let lastScrollPos = 0

      return useDebounce(() => {
        const currentScrollPos = window.scrollY
        currentScrollPos - lastScrollPos > 0
          ? (isScrollingDown.value = true)
          : (isScrollingDown.value = false)
        lastScrollPos = currentScrollPos
      }, 100) //useDebounce
    })() //IIFE Immediately Invoked Function Expression

    onMounted(async () => {
      const response = await getComicChapter(id, chapter)
      if (response && response.code === 200) pages.value = response.data.pages
      document.title = ''
      document.title = `${response.data.comicId.name} - ${response.data.chapter}`

      window.addEventListener('scroll', scrollFn)
      if (!token) return
      await postView(id, date)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', scrollFn)
    })

    return {
      pages,
      isScrollingDown,
      imageWidth
    }
  }
}
</script>

<template>
  <main class="relative">
    <TheNavigation
      :class="{ '-translate-y-16': isScrollingDown }"
      class="z-50 transition-all shadow-md shadow-primary duration-500"
    >
      <template #left>
        <router-link :to="{ name: 'book' }" class="relative btn btn-ghost text-white" replace>
          <TheIcon type="arrow-left" size="lg" class="xl:text-xl 2xl:text-2xl" />
        </router-link>
      </template>
      <template #right>
        <TheButton
          type="ghost"
          shape="circle"
          size="md"
          onclick="document.getElementById('resizeImageModal').showModal()"
        >
          <TheIcon
            type="magnifying-glass-plus"
            size="lg"
            class="xl:text-xl 2xl:text-2xl text-white"
          />
        </TheButton>
        <TheModal id="resizeImageModal" class="fixed top-8">
          <input
            type="range"
            min="50"
            max="100"
            value="100"
            step="10"
            class="range range-info range-xs"
            v-model="imageWidth"
          />
          <div class="w-full flex justify-between text-xs px-1">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
        </TheModal>
        <router-link :to="{ name: 'home' }" class="relative btn btn-ghost btn-circle text-white">
          <TheIcon type="house" size="lg" class="xl:text-xl 2xl:text-2xl"></TheIcon>
        </router-link>
      </template>
    </TheNavigation>
    <TheRead v-if="pages" :pages="pages" :image-width="imageWidth" />
  </main>
</template>
