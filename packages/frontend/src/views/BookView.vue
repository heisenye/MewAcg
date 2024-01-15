<script>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import TheBook from '@/components/TheBook.vue'
import { goBack, goHome, goSearch, goSearchResult } from '@/utils/router'
import { getComic } from '@/utils/http.js'
import { TheNavigation, TheButton, TheIcon } from 'ui'

export default {
  name: 'BookView',
  methods: { goSearchResult },
  components: { TheBook, TheNavigation, TheButton, TheIcon },
  setup() {
    const route = useRoute()
    const { id } = route.params

    const keyword = ref('')
    const isSearchDisabled = computed(() => !keyword.value)

    const comic = ref(null)
    onMounted(async () => {
      const response = await getComic(id)
      if (response && response.code === 200) {
        comic.value = response.data
      }
      document.title = ''
      document.title = comic.value.name
    })

    return {
      goBack,
      goHome,
      goSearch,
      goSearchResult,

      comic,
      keyword,
      isSearchDisabled
    }
  }
}
</script>

<template>
  <main>
    <TheNavigation class="z-50 shadow-md shadow-primary">
      <template #left>
        <div
          class="text-white btn btn-ghost tracking-wider font-medium text-lg px-4"
          @click="goBack"
        >
          <span class="router-text">&lt;&nbsp;&nbsp;Back</span>
        </div>
      </template>
      <template #right>
        <div class="nav-input-container">
          <input
            type="text"
            placeholder="搜索标题或标签"
            class="nav-input"
            v-model.trim="keyword"
            @keyup.enter="goSearchResult(keyword)"
          />
          <TheIcon type="magnifying-glass" class="absolute left-4" />
          <TheButton
            shape="circle"
            type="error"
            :disabled="isSearchDisabled"
            class="absolute right-4 size-6 3xl:size-8 shadow-md"
            @click="goSearchResult(keyword)"
          >
            <TheIcon
              size="sm"
              type="arrow-right"
              class="text-base"
              :class="{ 'text-white': !isSearchDisabled }"
            />
          </TheButton>
        </div>
        <TheButton
          type="ghost"
          size="md"
          shape="circle"
          class="lg:hidden btn-md text-white"
          @click="goSearch"
        >
          <TheIcon
            type="magnifying-glass"
            class="text-base sm:text-lg xl:text-xl 3xl:text-2xl lg:hidden"
          />
        </TheButton>
        <TheButton type="ghost" size="md" shape="circle" class="btn-md text-white" @click="goHome">
          <TheIcon type="house" size="base" class="router-icon" />
        </TheButton>
      </template>
    </TheNavigation>
    <TheBook v-if="comic" :comic="comic" class="z-0" />
  </main>
</template>
