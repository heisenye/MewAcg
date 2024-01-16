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
    class="relative w-full max-w-screen-2xl min-w-[300px] mx-auto [@media(any-hover:hover)]:px-6 [@media(any-hover:none)]:px-1.5 text-white"
  >
    <div
      style="grid-auto-rows: 0"
      class="w-full overflow-hidden whitespace-nowrap overflow-x-scroll [@media(any-hover:hover)]:grid [@media(any-hover:hover)]:grid-rows-2 [@media(any-hover:hover)]:grid-cols-3 [@media(any-hover:hover)]:lg:grid-cols-4 [@media(any-hover:hover)]:xl:grid-cols-5 [@media(any-hover:hover)]:gap-y-4 [@media(any-hover:hover)]:gap-x-4 @media:(any-hover:none):md:gap-x-6"
    >
      <template v-for="comic in comicList" :key="comic._id">
        <div
          class="relative inline-flex flex-col align-top w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5 [@media(any-hover:none)]:px-2.5 box-border overflow-hidden [@media(any-hover:hover)]:w-full"
        >
          <div
            class="relative max-h-48 w-full align-top rounded-t-2xl [@media(any-hover:hover)]:rounded-t-xl [@media(any-hover:hover)]:md:rounded-t-2xl overflow-hidden"
          >
            <TheImage
              :src="`${BASE_URL}/${comic._id}/${comic.coverImage.chapter}/${comic.coverImage.page}.webp`"
              alt=""
              :blur="false"
              @click="goBook(comic._id)"
              class="cursor-pointer"
            />
          </div>
          <div
            class="relative w-full bg-primary rounded-b-2xl [@media(any-hover:hover)]:rounded-b-xl [@media(any-hover:hover)]:md:rounded-b-2xl"
          >
            <h1
              class="text-sm px-2 [@media(any-hover:hover)]:text-sm [@media(any-hover:hover)]:2xl:text-base text-center mt-3 mb-1 tracking-wide font-NotoSerif font-bold whitespace-pre-line"
            >
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
