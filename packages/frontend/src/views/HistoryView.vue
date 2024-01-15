<script>
import { computed, onMounted, shallowRef } from 'vue'
import { goBook } from '@/utils/router'
import useHistory from '@/utils/useHistory.js'
import { getHistoryComics } from '@/utils/http.js'
import { TheImage, TheIcon } from 'ui'
import { BASE_URL } from 'common'

export default {
  name: 'HistoryView',
  methods: { goBook },
  components: { TheImage, TheIcon },
  setup() {
    const { history, removeHistoryFromStorage } = useHistory

    const populatedHistories = shallowRef([])
    const removeHistoryComic = (date, id) => {
      removeHistoryFromStorage(date, id)
      populatedHistories.value = [
        ...populatedHistories.value.filter((history) => history.date !== date),
        {
          date,
          comics: populatedHistories.value
            .find((history) => history.date === date)
            .comics.filter((comic) => comic._id !== id)
        }
      ].sort((a, b) => new Date(b.date) - new Date(a.date))
    }

    const historyIds = computed(() => {
      const idSet = new Set()
      Object.values(history.value).forEach((ids) => ids.forEach((id) => idSet.add(id)))
      return [...idSet]
    })
    onMounted(async () => {
      const response = await getHistoryComics(historyIds.value)
      if (response && response.code === 200) {
        const comics = response.data
        populatedHistories.value = Object.keys(history.value)
          .sort((a, b) => new Date(b) - new Date(a))
          .map((date) => {
            return {
              date,
              comics: history.value[date].map((id) => comics.find((comic) => comic._id === id))
            }
          })
      }
    })

    return {
      BASE_URL,
      removeHistoryComic,
      populatedHistories,
      historyIds
    }
  }
}
</script>

<template>
  <main class="relative top-40 mx-auto w-full max-w-screen-2xl min-w-[300px] px-1 text-white">
    <template v-for="history in populatedHistories" :key="history.date">
      <div v-if="history.comics.length" class="divider divider-secondary">{{ history.date }}</div>
      <template v-for="comic in history.comics">
        <article
          class="w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 card inline-flex mb-4 px-2 md:px-3 lg:px-2 indicator align-top"
        >
          <TheImage
            :blur="false"
            class="cursor-pointer max-h-44 2xl:max-h-48 rounded-t-xl"
            :src="`${BASE_URL}/${comic._id}/${comic.coverImage.chapter}/${comic.coverImage.page}.webp`"
            @click="goBook(comic._id)"
          />
          <TheIcon
            type="xmark"
            class="indicator-item badge badge-error right-3 cursor-pointer fa-solid text-black"
            @click="removeHistoryComic(history.date, comic._id)"
          />
          <div
            class="card-body text-xs text-center bg-primary rounded-b-xl py-4 px-0 font-bold font-NotoSerif"
          >
            <span class="2xl:text-base break-all">{{ comic.name }}</span>
            <span class="text-neutral-content font-Noto">{{ comic.author }}</span>
          </div>
        </article>
      </template>
    </template>
    <h1
      v-if="historyIds.length === 0"
      class="relative top-20 text-lg text-center font-base font-black"
    >
      当前未观看漫画哦
    </h1>
  </main>
</template>
