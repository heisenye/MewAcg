<script>
import { onMounted, ref } from 'vue'
import TheComics from '@/components/TheComics.vue'
import { goBook } from '@/utils/router'
import { getFavoriteComics } from '@/utils/http.js'
import { TheImage } from 'ui'
import { BASE_URL } from 'common'

export default {
  name: 'FavoriteView',
  components: { TheComics, TheImage },
  setup() {
    const isRequestCompleted = ref(false)

    const favoriteComics = ref([])
    onMounted(async () => {
      const response = await getFavoriteComics()
      if (response && response.code === 200) {
        favoriteComics.value = response.data
      }
      isRequestCompleted.value = true
    })
    return {
      BASE_URL,
      favoriteComics,
      isRequestCompleted,

      goBook
    }
  }
}
</script>

<template>
  <TheComics
    v-if="isRequestCompleted"
    class="top-40"
    empty-list-msg="当前未收藏漫画哦"
    :comic-list="favoriteComics"
  />
</template>
