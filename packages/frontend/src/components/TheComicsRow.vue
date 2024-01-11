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
          class="relative inline-flex flex-col align-top w-5/12 [@media(any-hover:hover)]:w-1/2 md:w-1/3 md:[@media(any-hover:hover)]:w-1/3 lg:w-1/4 lg:[@media(any-hover:hover)]:w-1/4 xl:w-1/5 xl:[@media(any-hover:hover)]:w-1/5 [@media(any-hover:hover)]:px-4 md:[@media(any-hover:hover)]:px-2.5 px-2.5 box-border overflow-hidden"
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
            <h1 class="text-base text-center mt-3 mb-1 tracking-wide font-NotoSerif font-bold">
              {{ comic.name }}
            </h1>
            <span class="px-3 text-xs text-neutral-content font-Noto font-bold">{{
              comic.author
            }}</span>
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
