<script>
import { goBook } from '@/utils/router'
import { TheImage, TheIcon } from 'ui'
import { BASE_URL } from 'common'

export default {
  name: 'TheComics',
  components: { TheImage, TheIcon },
  props: {
    comicList: {
      type: Array,
      required: true
    },
    emptyListMsg: {
      type: String
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
  <main class="absolute left-1/2 -translate-x-1/2 w-full max-w-4xl min-w-[300px] text-white px-1">
    <template v-for="comic in comicList" :key="comic._id">
      <div
        class="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 inline-flex card mb-4 px-4 md:px-3 lg:px-2 align-top"
      >
        <TheImage
          :src="`${BASE_URL}/${comic._id}/${comic.coverImage.chapter}/${comic.coverImage.page}.webp`"
          :blur="false"
          class="cursor-pointer max-h-48 2xl:max-h-none"
          @click="goBook(comic._id)"
        />
        <div class="card-body bg-primary rounded-b-2xl pt-4 px-4 pb-3">
          <h1 class="text-sm 2xl:text-base text-center tracking-wide font-NotoSerif font-black">
            {{ comic.name }}
          </h1>
          <span class="text-xs text-neutral-content font-Noto font-black">{{ comic.author }}</span>
          <div class="text-xs opacity-80 space-x-1 text-accent-content">
            <TheIcon type="eye" size="xs" />
            <span>{{ comic.viewCount }}</span
            >&nbsp;&nbsp;
            <TheIcon type="heart" size="xs" />
            <span>{{ comic.favoriteCount }}</span>
          </div>
        </div>
      </div>
    </template>
    <h1
      v-if="comicList.length === 0 && emptyListMsg"
      class="relative top-20 text-lg text-center font-black font-base"
    >
      {{ emptyListMsg }}
    </h1>
  </main>
</template>
