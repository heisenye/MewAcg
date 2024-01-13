<script>
import { onBeforeMount, ref } from 'vue'
import TheComicsRow from '@/components/TheComicsRow.vue'
import { goBook } from '@/utils/router'
import { getPopularComics } from '@/utils/http.js'
import { TheButton, TheIcon } from 'ui'
import { BASE_URL } from 'common'

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
      goBook,

      comicList
    }
  }
}
</script>

<template>
  <main>
    <div class="relative top-40">
      <div class="max-w-screen-2xl mx-auto flex justify-between items-center mb-1 font-base">
        <span class="relative left-6 text-xl lg:text-2xl text-white font-black"> 热门推荐 </span>
        <TheButton type="ghost">
          <span>更多&gt;</span>
        </TheButton>
      </div>
      <TheComicsRow v-if="comicList" :comic-list="comicList" />
      <div class="divider divider-secondary text-success font-Noto">(=^ ◡ ^=)</div>
    </div>
  </main>
</template>
