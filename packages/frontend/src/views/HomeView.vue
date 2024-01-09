<script>
import { onBeforeMount, ref } from 'vue'
import ComicRecommendation from '@/components/TheComicsRow.vue'
import { goBook } from '@/utils/router'
import { getComics } from '@/utils/http.js'
import { BASE_URL } from 'common'

export default {
  name: 'HomeView',
  components: { ComicRecommendation },
  setup() {
    const comicList = ref(null)

    onBeforeMount(async () => {
      const response = await getComics()
      if (response && response.code === 200) {
        comicList.value = response.data.filter((comic) => comic.chapters !== 0)
      }
    })

    return {
      BASE_URL,
      comicList,

      goBook
    }
  }
}
</script>

<template>
  <ComicRecommendation class="top-44" v-if="comicList" :comic-list="comicList" />
</template>
