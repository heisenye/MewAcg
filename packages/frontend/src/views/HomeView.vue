<script>
import { onBeforeMount, ref } from 'vue'
import TheComicsRow from '@/components/TheComicsRow.vue'
import { goBook } from '@/utils/router'
import { getComics } from '@/utils/http.js'
import { BASE_URL } from 'common'

export default {
  name: 'HomeView',
  components: { TheComicsRow },
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
      goBook,

      comicList
    }
  }
}
</script>

<template>
  <TheComicsRow class="top-44" v-if="comicList" :comic-list="comicList" />
</template>
