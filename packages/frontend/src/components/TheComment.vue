<script>
import { TheImage, TheIcon } from 'ui'
import { BASE_URL } from 'common'

export default {
  name: 'TheComment',
  components: { TheImage, TheIcon },
  props: {
    comment: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const { content, createdAt, likes, userId } = props.comment
    const { _id: uid, username } = userId

    return {
      BASE_URL,

      uid,
      username,
      createdAt,
      content,
      likes
    }
  }
}
</script>

<template>
  <div class="divider divider-neutral text-accent">{{ index }}</div>
  <article class="navbar px-0 lg:px-4 3xl:px-6 gap-3 3xl:gap-x-4">
    <div
      class="flex-none size-12 lg:size-14 3xl:h-16 3xl:w-16 rounded-full bg-primary overflow-hidden"
    >
      <TheImage
        :blur="false"
        class="size-full rounded-full z-10 border-2 border-neutral"
        :src="`${BASE_URL}/avatar/${uid}.webp`"
      />
    </div>
    <div class="flex-1 flex-col 3xl:gap-y-0.5 items-start font-Noto break-all">
      <h3 class="text-base text-white 3xl:text-lg">{{ username }}</h3>
      <span class="text-xs 3xl:text-sm text-accent-content">{{
        new Date(createdAt).toLocaleString()
      }}</span>
      <p class="text-neutral-content 3xl:text-lg">{{ content }}</p>
    </div>
    <div class="flex-none">
      <TheIcon type="thumbs-up" />
      &nbsp;&nbsp;
      <span>{{ likes }}</span>
    </div>
  </article>
</template>
