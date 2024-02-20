<script>
import { onMounted, ref } from 'vue'
import { getConfig } from '@/utils/http.js'
import { TheIcon, TheImage, TheButton, TheModal } from 'ui'

export default {
  name: 'AboutView',
  components: { TheIcon, TheImage, TheButton, TheModal },
  setup() {
    const config = ref([])

    onMounted(async () => {
      const response = await getConfig()
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
      <div class="card pb-4 w-full bg-primary font-Noto">
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
        <div class="w-full flex justify-center items-center gap-4">
          <span class="font-Noto text-sm lg:text-base">点击查看Mew娘</span>
          <TheButton type="success" shape="square" onclick="document.getElementById('showMew').showModal()">
            <img src="/favicon.svg" alt="" class="size-6">
          </TheButton>
          <TheModal class="bg-primary" id="showMew">
            <h1 class="text-lg font-base text-justify font-black pb-6">Mew娘立绘是由开发者Heisenye在假期摸鱼时绘画的，非专业画师，不喜勿喷哦</h1>
            <TheImage src="/Mew.png" class="rounded-3xl"/>
          </TheModal>
        </div>
      </div>
    </div>
    <footer class="fixed w-full bottom-4 flex flex-col items-center font-Noto">
      <span class="text-white">{{ config.footerText }}</span>
      <span class="text-xs">{{ config.footerEmail }}</span>
    </footer>
  </main>
</template>
