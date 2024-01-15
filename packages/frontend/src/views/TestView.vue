<script>
import TheComicRow from '@/components/TheComicRow.vue'
import { ref } from 'vue'

export default {
  components: { TheComicRow },
  setup() {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    }

    const a = ref(JSON.parse(JSON.stringify([])))

    console.log(a.value)



    return {
      obj
    }
  }
}
</script>

<template>
  <main>
    <div v-for="(value, key, index) in obj">
      {{ key }}: {{ value }} : {{index}}
    </div>
  </main>
</template>

<style scoped></style>
