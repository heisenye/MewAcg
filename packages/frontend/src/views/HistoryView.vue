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
    const { getHistoryFromDB } = useHistory
    const history = shallowRef([])
    const historyIds = computed(() => history.value.map((item) => item.id))
    const groupedHistory = computed(() => {
      return Object.entries(
        populatedHistories.value.reduce((acc, cur) => {
          acc[cur.date] = acc[cur.date] || []
          acc[cur.date].push(cur.comic)
          return acc
        }, {})
      ).sort((a, b) => new Date(b[0]) - new Date(a[0]))
    })

    const populatedHistories = shallowRef([])

    onMounted(async () => {
      history.value = await getHistoryFromDB()
      const response = await getHistoryComics(historyIds.value)
      populatedHistories.value = history.value
        .map((item) => {
          return {
            ...item,
            comic: response.data.find((comic) => comic._id === item.id)
          }
        })
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    })

    return {
      BASE_URL,
      populatedHistories,
      groupedHistory,
      historyIds
    }
  }
}
</script>

<template>
  <main class="relative top-40 mx-auto w-full max-w-screen-2xl min-w-[300px] px-1 text-white">
    <template v-for="history in groupedHistory" :key="history[0]">
      <div v-if="history[1].length" class="divider divider-secondary">{{ history[0] }}</div>
      <template v-for="comic in history[1]" :key="comic._id">
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
    <h1 v-if="!historyIds.length" class="relative top-20 text-lg text-center font-base font-black">
      当前未观看漫画哦
    </h1>
  </main>
</template>
