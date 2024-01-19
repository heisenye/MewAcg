<script>
import { ref, watch, onMounted, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import TheComics from '@/components/TheComics.vue'
import { getSearch } from '@/utils/http.js'
import { goBack, goSearchResult } from '@/utils/router'
import { TheButton, TheIcon, TheNavigation } from 'ui'

const searchTypes = [
  {
    id: 'name',
    label: '标题'
  },
  {
    id: 'tag',
    label: '标签'
  },
  {
    id: 'author',
    label: '作者'
  }
]
export default {
  name: 'SearchView',
  components: { TheButton, TheIcon, TheComics, TheNavigation, RouterLink },
  setup() {
    const route = useRoute()

    const query = Object.keys(route.query)[0]
    const keyword = Object.values(route.query)[0] ? ref(Object.values(route.query)[0]) : ref('')
    const isSearchDisabled = computed(() => !keyword.value.trim())
    const isRequestCompleted = ref(false)
    const searchType = ref(query || 'name')
    const searchSettingCheckBoxes = ref([])

    watch(
      () => Object.values(route.query)[0],
      (newKeyword) => {
        keyword.value = String(newKeyword)
      }
    )

    const searchComics = ref([])
    onMounted(async () => {
      if (keyword.value.trim()) {
        const response = await getSearch(keyword.value, searchType.value)
        searchComics.value = response.data
      }
      isRequestCompleted.value = true
    })

    const searchHandler = () => {
      if (keyword.value.trim()) {
        goSearchResult(keyword.value, searchType.value)
      }
    }

    const checkSearchSettingHandler = (e) => {
      searchSettingCheckBoxes.value.forEach((checkbox) => {
        if (checkbox !== e.target) {
          checkbox.checked = false
        }
      })
      searchType.value = e.target.value
    }

    const isSearchSettingChecked = (value) => searchType.value === value

    return {
      goBack,
      route,

      searchTypes,
      searchType,
      keyword,
      searchComics,
      isSearchDisabled,
      isRequestCompleted,
      searchSettingCheckBoxes,
      searchHandler,
      checkSearchSettingHandler,
      isSearchSettingChecked
    }
  }
}
</script>

<template>
  <main>
    <TheNavigation class="z-10">
      <template #left>
        <button
          class="text-white btn btn-sm btn-ghost tracking-wider font-medium text-lg px-4"
          @click="goBack"
        >
          <span class="text-2xl 3xl:text-3xl">&lt;</span>
        </button>
      </template>
      <template #right>
        <div class="relative flex-grow flex items-center pr-2 font-Noto">
          <input
            type="text"
            placeholder="搜索标题或标签"
            class="nav-input"
            v-model="keyword"
            @keyup.enter="searchHandler"
          />
          <TheIcon type="magnifying-glass" class="absolute left-4" />
          <TheButton
            shape="circle"
            type="error"
            :disabled="isSearchDisabled"
            class="absolute right-4 size-6 shadow-md border-none"
            @click="searchHandler"
          >
            <TheIcon
              size="sm"
              type="arrow-right"
              class="text-base"
              :class="{ 'text-white': !isSearchDisabled }"
            />
          </TheButton>
        </div>
        <router-link
          :to="{ name: 'home' }"
          class="relative btn 2xl:btn-lg btn-info btn-circle shadow-neutral shadow-md text-white"
        >
          <TheIcon type="house" class="router-icon"></TheIcon>
        </router-link>
      </template>
    </TheNavigation>
    <div class="z-10 fixed top-16 py-0 navbar bg-primary rounded-b-box flex-col font-base">
      <div class="relative top-0 my-0 w-full divider divider-secondary"></div>
      <div class="w-full mb-4 px-6 whitespace-nowrap flex-col items-start gap-2">
        <span class="mt-3 text-accent-content font-black">搜寻设定</span>
        <div class="w-full flex items-center gap-3">
          <template v-for="type in searchTypes" :key="type.id">
            <input
              ref="searchSettingCheckBoxes"
              @change="checkSearchSettingHandler"
              :checked="isSearchSettingChecked(type.id)"
              :value="type.id"
              :id="type.id"
              type="checkbox"
              class="checkbox checkbox-success checkbox-xs"
            />
            <label :for="type.id" class="mr-4">{{ type.label }}</label>
          </template>
        </div>
      </div>
    </div>
    <h1
      class="absolute top-80 text-xl text-center w-full text-white font-black font-base"
      v-if="isRequestCompleted && searchComics.length === 0 && Object.values(route.query)[0]"
    >
      什么也没有找见
    </h1>
    <TheComics class="top-48" v-if="searchComics" :comic-list="searchComics" />
  </main>
</template>
