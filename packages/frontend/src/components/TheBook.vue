<script>
import { onMounted, ref, watch, toRefs } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import TheComments from '@/components/TheComments.vue'
import { getFavorite, deleteFavorite, postFavorite } from '@/utils/http.js'
import { TheButton, TheIcon, TheImage, TheModal } from 'ui'
import { useToken, showMsg, msg, BASE_URL } from 'common'
import { goSearchResult } from '@/utils/router.js'

export default {
  name: 'TheBook',
  methods: { goSearchResult },
  components: { TheComments, TheButton, TheIcon, TheImage, TheModal, RouterLink },
  props: {
    comic: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()

    const { comic } = props
    const { token } = useToken

    const isFavorited = ref(false)
    const isProgressRemembered = ref(route.meta['isProgressRemembered'])

    watch(isProgressRemembered, (newVal) => {
      localStorage.setItem('isProgressRemembered', String(newVal))
      route.meta['isProgressRemembered'] = newVal
    })

    const {
      name,
      _id: id,
      coverImage,
      updatedAt: date,
      chapters,
      author,
      tags,
      description,
      status
    } = comic

    const { viewCount, favoriteCount } = toRefs(comic)

    onMounted(async () => {
      if (!token.value) {
        return
      }
      const response = await getFavorite(id)
      if (response && response.data) {
        isFavorited.value = true
      }
    })

    const addOrDeleteFavoriteFn = async () => {
      if (!token.value) {
        showMsg({
          msg: msg['NO_TOKEN'],
          messageType: 'info',
          popupType: 'alert'
        })
        return
      }
      if (isFavorited.value) {
        const response = await deleteFavorite(id)
        if (response.code === 200) {
          isFavorited.value = false
          favoriteCount.value--
          showMsg({
            msg: msg['DELETE_FAVORITE_SUCCESS'],
            messageType: 'success',
            popupType: 'toast',
            toastPos: ['end', 'bottom']
          })
        }
      } else {
        const response = await postFavorite({
          id
        })
        if (response.code === 200) {
          isFavorited.value = true
          favoriteCount.value++
          showMsg({
            msg: msg['ADD_FAVORITE_SUCCESS'],
            messageType: 'success',
            popupType: 'toast',
            toastPos: ['start', 'bottom']
          })
        }
      }
    }

    return {
      BASE_URL,
      isFavorited,
      isProgressRemembered,
      id,
      coverImage,
      name,
      date,
      viewCount,
      favoriteCount,
      chapters,
      author,
      tags,
      description,
      status,
      addOrDeleteFavoriteFn
    }
  }
}
</script>

<template>
  <main class="relative w-full top-20 px-3 sm:px-4 md:px-8 lg:px-6 pb-8">
    <div class="relative w-full mx-auto card rounded max-w-3xl bg-primary lg:card-side lg:py-4">
      <div
        class="absolute bookmark border-[32px] -left-4 -top-4 xl:border-[40px]"
        v-if="status === 'completed'"
      >
        <p class="absolute -left-6 -top-6 text-warning-content xl:text-lg font-base font-extrabold">
          完结
        </p>
      </div>
      <div
        class="relative flex items-center justify-center pb-6 pt-8 md:px-6 lg:px-0 xl:px-4 lg:basis-1/2 lg:flex-shrink-0"
      >
        <TheImage
          :src="`${BASE_URL}/${id}/${coverImage.chapter}/${coverImage.page}.webp`"
          class="rounded-lg w-2/3 lg:rounded-lg h-fit"
        />
      </div>
      <div class="card-body pt-4 md:pt-6 px-6 md:px-12 rounded-b-xl xl:text-lg">
        <h1 class="card-title text-2xl self-center pb-2 font-NotoSerif font-black text-white">
          {{ name }}
        </h1>
        <div class="text-accent lg:text-sm xl:text-base opacity-80 whitespace-nowrap">
          <span>{{ new Date(date).toLocaleDateString() }}</span
          >&nbsp; | &nbsp;<i class="fa-solid fa-eye"></i>&nbsp;
          <span>{{ viewCount }}</span>
          &nbsp;<i class="fa-solid fa-heart"></i>&nbsp; <span>{{ favoriteCount }}</span
          >&nbsp; | &nbsp;<i class="fa-solid fa-book"></i>&nbsp;
          <span>{{ chapters }}</span>
        </div>
        <div class="text-white font-base">
          作者：
          <TheButton
            type="secondary"
            class="font-Noto"
            size="sm"
            @click="goSearchResult(author, 'author')"
          >
            {{ author }}
          </TheButton>
        </div>
        <div class="flex text-white font-base whitespace-nowrap">
          标签：
          <div class="flex flex-1 flex-wrap gap-2">
            <template v-for="tag in tags" :key="tag">
              <TheButton
                class="font-Noto"
                type="secondary"
                size="sm"
                @click="goSearchResult(tag, 'tag')"
              >
                {{ tag }}
              </TheButton>
            </template>
          </div>
        </div>
        <div class="text-white font-base flex">
          <span class="whitespace-nowrap">简介：</span>
          <span class="text-neutral-content break-all font-NotoSerif font-black">{{
            description
          }}</span>
        </div>
        <TheButton
          type="error"
          class="w-32 lg:w-28 xl:w-32 mx-auto my-3"
          @click="addOrDeleteFavoriteFn"
        >
          <TheIcon
            type="heart"
            class="text-lg lg:text-md xl:text-lg text-white"
            :variant="isFavorited ? 'solid' : 'regular'"
          />
        </TheButton>
        <div class="mx-auto rating mb-4">
          <input type="radio" name="rating-1" class="mask mask-star size-8 bg-warning" />
          <input type="radio" name="rating-1" class="mask mask-star size-8 bg-warning" checked />
          <input type="radio" name="rating-1" class="mask mask-star size-8 bg-warning" />
          <input type="radio" name="rating-1" class="mask mask-star size-8 bg-warning" />
          <input type="radio" name="rating-1" class="mask mask-star size-8 bg-warning" />
        </div>
        <h3 class="text-xl 3xl:text-2xl mx-auto font-base font-black">章节</h3>
        <div>
          <TheButton
            type="secondary"
            size="sm"
            shape="square"
            class="block mx-auto"
            onclick="document.getElementById('settingsModal').showModal()"
          >
            <TheIcon type="gear" class="text-success" />
          </TheButton>
        </div>
        <TheModal id="settingsModal" class="bg-primary font-base">
          <div class="flex items-center">
            <label for="progress" class="mr-6 3xl:text-lg">是否记忆阅读进度</label>
            <input
              type="checkbox"
              id="progress"
              value="true"
              v-model="isProgressRemembered"
              class="checkbox checkbox-xs checkbox-success"
            />
          </div>
        </TheModal>
        <div class="grid grid-cols-4 gap-x-6 place-items-center">
          <template v-for="chapter in chapters" :key="chapter">
            <router-link
              :to="{ name: 'read', params: { id, chapter } }"
              class="btn btn-sm btn-secondary w-12"
              replace
            >
              {{ chapter }}
            </router-link>
          </template>
        </div>
      </div>
    </div>
    <!-- card -->
    <TheComments />
  </main>
</template>
