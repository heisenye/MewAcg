<script>
import { onBeforeMount, ref } from 'vue'
import TheComicsRow from '@/components/TheComicsRow.vue'
import { goBook, goSearchResult } from '@/utils/router'
import { getPopularComics } from '@/utils/http.js'
import { TheButton, TheIcon } from 'ui'
import { BASE_URL, comicConstants } from 'common'

export default {
  name: 'HomeView',
  components: { TheComicsRow, TheButton, TheIcon },
  setup() {
    const comicList = ref(null)

    onBeforeMount(async () => {
      const response = await getPopularComics()
      if (response && response.code === 200) {
        comicList.value = response.data.filter((comic) => comic.chapters !== 0)
      }
    })

    return {
      BASE_URL,
      comicConstants,
      goBook,
      goSearchResult,

      comicList
    }
  }
}
</script>

<template>
  <main class="relative top-40">
    <div class="max-w-screen-2xl mx-auto">
      <div class="flex justify-between items-center mb-3 font-base">
        <span class="relative left-6 text-xl 2xl:text-2xl text-white font-Poppins font-black">
          Tags
        </span>
      </div>
      <div
        class="px-4 grid grid-rows-2 grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 gap-1 font-Noto"
      >
        <template v-for="tag in comicConstants.tags">
          <TheButton
            type="secondary"
            size="sm"
            class="rounded-lg text-xs whitespace-nowrap"
            @click="goSearchResult(tag, 'tag')"
          >
            {{ tag }}
          </TheButton>
        </template>
      </div>
    </div>
    <div class="relative top-4 max-w-screen-2xl mx-auto">
      <div class="flex justify-between items-center mb-1 font-base">
        <span class="relative left-6 text-xl 2xl:text-2xl text-white font-black"> 热门推荐 </span>
        <TheButton type="ghost">
          <span>更多&gt;</span>
        </TheButton>
      </div>
      <TheComicsRow v-if="comicList" :comic-list="comicList" />
      <div class="divider divider-secondary text-accent font-Noto">(=^ ◡ ^=)</div>
    </div>
  </main>
</template>
