<script>
import { goBook } from '@/utils/router'
import { BASE_URL } from 'common'
import { TheImage, TheIcon } from 'ui'

export default {
  name: 'TheComicRows',
  components: { TheImage, TheIcon },
  props: {
    comicList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
      BASE_URL,
      goBook
    }
  }
}
</script>

<template>
  <main
    class="absolute w-full max-w-screen-2xl min-w-[300px] left-1/2 -translate-x-1/2 px-1 text-white"
  >
    <div class="w-full whitespace-nowrap overflow-x-scroll">
      <template v-for="comic in comicList" :key="comic._id">
        <div
          class="relative w-5/12 md:w-1/3 lg:w-1/4 xl:w-1/5 box-border inline-flex flex-col overflow-hidden align-top px-2.5"
        >
          <div class="relative w-full align-top rounded-t-2xl overflow-hidden">
            <TheImage
              :src="`${BASE_URL}/${comic._id}/${comic.coverImage.chapter}/${comic.coverImage.page}.webp`"
              alt=""
              :blur="false"
              @click="goBook(comic._id)"
              class="cursor-pointer"
            />
          </div>
          <div class="relative w-full bg-primary rounded-b-2xl">
            <h1 class="text-base text-center mt-2 mb-1 tracking-wide font-NotoSerif font-light">
              {{ comic.name }}
            </h1>
            <span class="px-3 text-xs text-neutral-content font-Noto">{{ comic.author }}</span>
            <div class="px-3 pb-4 mt-1 space-x-1 text-xs text-accent-content opacity-80">
              <i class="fa-solid fa-eye"></i>
              <span>{{ comic.viewCount }}</span
              >&nbsp;&nbsp;
              <i class="fa-solid fa-heart"></i>
              <span>{{ comic.favoriteCount }}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </main>
</template>
