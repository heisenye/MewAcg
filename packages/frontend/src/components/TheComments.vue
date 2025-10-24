<script>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import TheComment from '@/components/TheComment.vue'
import { getComicComments, postComicComment } from '@/utils/http.js'
import { refresh } from '@/utils/router.js'
import { TheButton, TheIcon } from 'ui'
import { showMsg, msg, useToken } from 'common'

export default {
  name: 'TheComments',
  components: {
    TheButton,
    TheIcon,
    TheComment,
    RouterLink
  },
  setup() {
    const route = useRoute()
    const { id } = route.params

    const { token } = useToken
    const inputComment = ref('')
    const commentCount = ref(0)
    const commentInputEl = ref()
    const isSubmitDisabled = computed(() => !inputComment.value)
    const isScrollButtonShow = ref(false)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isScrollButtonShow.value = !entry.isIntersecting
        })
      },
      {
        root: null,
        rootMargin: '0px 0px 9999px 0px'
      }
    )
    const comments = ref([])
    onMounted(async () => {
      const response = await getComicComments(id)
      if (response && response.code === 200) {
        comments.value = response.data
        commentCount.value = response.data.length
      }
      if (commentInputEl.value) {
        observer.observe(commentInputEl.value)
      }
    })
    onUnmounted(() => {
      observer.disconnect()
    })

    const commentSubmitHandler = async () => {
      const response = await postComicComment({ id, content: inputComment.value })
      if (response && response.code === 200) {
        showMsg({
          msg: msg['SUBMIT_COMMENT_SUCCESS'],
          messageType: 'success',
          popupType: 'toast',
          toastPos: ['bottom', 'right']
        })
        setTimeout(() => {
          refresh()
        }, 1000)
      }
    }

    const scrollToCommentInputEl = () => {
      commentInputEl.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return {
      token,
      inputComment,
      commentInputEl,
      isSubmitDisabled,
      isScrollButtonShow,
      comments,
      commentCount,
      commentSubmitHandler,
      scrollToCommentInputEl
    }
  }
}
</script>

<template>
  <main class="relative top-4 w-full mx-auto px-4 pb-4 card rounded max-w-3xl bg-primary">
    <h1 class="text-xl 3xl:text-2xl mt-6 mb-8 text-center font-base font-black">
      {{ commentCount }}&nbsp;&nbsp;评论
    </h1>
    <RouterLink
      v-if="!token"
      :to="{ name: 'login' }"
      class="text-xs link-info link-hover self-center font-base mb-3"
      >当前未登录,立即登录</RouterLink
    >
    <div class="w-full">
      <textarea
        ref="commentInputEl"
        :disabled="!token"
        v-model="inputComment"
        placeholder="输入评论"
        rows="3"
        class="textarea textarea-secondary block mx-auto max-w-lg w-full mb-4 text-accent-content 3xl:placeholder:text-base"
      ></textarea>
    </div>
    <TheButton
      type="info"
      :disabled="isSubmitDisabled"
      class="h-10 w-20 self-end font-base"
      @click="commentSubmitHandler"
      >提交</TheButton
    >
    <template v-for="(comment, index) in comments">
      <TheComment :comment="comment" :index="index + 1" />
    </template>
  </main>
  <teleport to="body">
    <Transition>
      <div class="fixed top-20 w-full flex justify-center" v-show="isScrollButtonShow">
        <TheButton
          type="info"
          shape="circle"
          class="shadow-md shadow-info 3xl:btn-lg"
          @click="scrollToCommentInputEl"
        >
          <TheIcon type="arrow-up" class="3xl:text-xl" />
        </TheButton>
      </div>
    </Transition>
  </teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translate(0, -100%);
}
</style>
