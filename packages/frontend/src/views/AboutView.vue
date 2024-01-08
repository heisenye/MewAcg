<script>
import { onMounted, ref } from 'vue'
import { TheIcon } from 'ui'
import { http } from 'common'

export default {
  name: 'AboutView',
  components: { TheIcon },
  setup() {
    const config = ref([])

    onMounted(async () => {
      const response = await http.getConfig()
      if (response && response.code === 200) {
        config.value = response.data
      }
    })
    return {
      config
    }
  }
}
</script>

<template>
  <main>
    <div class="relative top-40 w-full mx-auto max-w-screen-xl px-4 lg:px-6">
      <div class="card w-full bg-primary font-Noto">
        <div class="card-body xl:px-10 2xl:px-12 3xl:px-16">
          <h1
            class="text-center text-xl 3xl:text-2xl 3xl:tracking-wider mb-3 md:mb-4 lg:mb-6 3xl:mb-8 font-base font-black text-white"
          >
            兴趣使然的小站
          </h1>
          <ul
            v-for="contents in config.info"
            class="list-disc text-accent-content text-center font-Noto"
          >
            <li class="mt-3">{{ contents.content }}</li>
          </ul>
        </div>
      </div>
    </div>
    <footer class="fixed w-full bottom-4 flex flex-col items-center font-Noto">
      <span class="text-white">{{ config.footerText }}</span>
      <span class="text-xs">{{ config.footerEmail }}</span>
    </footer>
  </main>
</template>
