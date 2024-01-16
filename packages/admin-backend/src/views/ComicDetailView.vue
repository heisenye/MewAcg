<script>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getComic, patchComic, deleteComic, getComicChapter, postComicChapter, deleteComicChapter ,putComicCoverImage} from '@/utils/http.js'
import { TheNavigation, TheButton, TheIcon, TheModal, TheImage } from 'ui'
import { comicConstants, showMsg, msg, BASE_URL } from 'common'

const { statuses, tags } = comicConstants

export default {
  name: 'ComicDetailView',
  components: { TheNavigation, TheButton, TheIcon, TheModal, TheImage },

  setup() {
    const route = useRoute()
    const router = useRouter()
    const id = route.params.id

    const selectedComic = ref(null)
    const addComicImageInput = ref()
    const bulkAddComicImageInput = ref()
    const imageUrls = ref([])
    const imageFiles = ref([])
    const formData = new FormData()

    const comicName = ref('')
    const comicAuthor = ref('')
    const comicStatus = ref('')
    const comicDescription = ref('')
    const comicTags = ref([])

    const selectedChapter = ref(1)
    const selectedPage = ref(1)

    onMounted(async () => {
      const response = await getComic(id)
      selectedComic.value = response.data
      selectedChapter.value = response.data.coverImage.chapter
      selectedPage.value = response.data.coverImage.page
    })

    const modifyComic = async (field, newVal) => {
      const response = await patchComic({
        id,
        field,
        newVal
      })
      if (response && response.code === 200) {
        document.getElementById(field).close()
        showMsg({
          messageType: 'success',
          msg: msg['UPDATE_COMIC_SUCCESS'],
          popupType: 'toast'
        })
        setTimeout(() => {
          router.go(0)
        }, 1000)
      }
    }

    const removeComic = async () => {
      const response = await deleteComic(id)
      console.log(response)
      if (response && response.code === 200) {
        showMsg({
          messageType: 'success',
          msg: msg['DELETE_COMIC_SUCCESS'],
          popupType: 'toast'
        })
        setTimeout(() => {
          router.go(-1)
        }, 1000)
      }
    }

    const addComicImage = (e) => {
      const image = e.target.files[0]
      if (image) {
        imageFiles.value.push(image)
        const url = URL.createObjectURL(image)
        imageUrls.value.push(url)
        e.target.value = ''
      }
    }

    const bulkAddComicImage = (e) => {
      const images = e.target.files
      console.log(images)
      if (images) {
        for (let i = 0; i < images.length; i++) {
          const image = images[i]
          imageFiles.value.push(image)
          const url = URL.createObjectURL(image)
          imageUrls.value.push(url)
        }
        e.target.value = ''
      }
    }

    const removeComicImage = (index) => {
      imageUrls.value.splice(index, 1)
      imageFiles.value.splice(index, 1)
    }

    const selectCoverImage = async (chapter, page) => {
      selectedChapter.value = chapter
      selectedPage.value = page
    }

    const viewChapter = async (chapter) => {
      try {
        const response = await getComicChapter(route.params.id, chapter)
        if (response.code === 200) {
          imageUrls.value = Array.from(
            { length: response.data.pages },
            (v, k) => `${BASE_URL}/${route.params.id}/${chapter}/${k + 1}.webp`
          )
        }
      } catch (error) {
        console.log(error)
      }
    }

    const createChapter = async () => {
      imageFiles.value.forEach((image) => {
        formData.append('images', image)
      })
      const response = await postComicChapter({
        id,
        chapter: selectedComic.value.chapters + 1,
        formData
      })
      if (response && response.code === 200) {
        document.getElementById('newChapterModal').close()
        showMsg({
          messageType: 'success',
          msg: msg['CREATE_COMIC_CHAPTER_SUCCESS'],
          popupType: 'toast'
        })
        setTimeout(() => {
          router.go(0)
        }, 1000)
      }
    }

    const setCoverImage = async () => {
      const response = await putComicCoverImage({
        id,
        chapter: selectedChapter.value,
        page: selectedPage.value
      })
      if (response && response.code === 200) {
        document.getElementById('coverImage').close()
        showMsg({
          messageType: 'success',
          msg: msg['SET_COMIC_COVER_SUCCESS'],
          popupType: 'toast'
        })
        setTimeout(() => {
          router.go(0)
        }, 1000)
        return
      }
      document.getElementById('coverImage').close()
      showMsg({
        messageType: 'error',
        msg: msg['UPDATE_COMIC_FAIL'],
        popupType: 'alert'
      })
    }

    const removeChapter = async (chapter) => {
      console.log(id, chapter)
      const response = await deleteComicChapter(id, chapter)
      document.getElementById('chaptersModal').close()
      if (response && response.code === 200) {
        showMsg({
          messageType: 'success',
          msg: msg['DELETE_COMIC_CHAPTER_SUCCESS'],
          popupType: 'toast'
        })
        setTimeout(() => {
          router.go(0)
        }, 1000)
      }
    }

    return {
      BASE_URL,
      statuses,
      tags,
      goBack: () => router.go(-1),
      selectedComic,
      imageUrls,

      modifyComic,
      removeComic,

      addComicImage,
      bulkAddComicImage,
      removeComicImage,
      viewChapter,
      removeChapter,
      selectCoverImage,

      createChapter,
      setCoverImage,

      addComicImageInput,
      bulkAddComicImageInput,

      comicName,
      comicAuthor,
      comicStatus,
      comicDescription,
      comicTags,

      selectedChapter,
      selectedPage
    }
  }
}
</script>

<template>
  <main>

<!--    nav-->
    <TheNavigation class="z-50">
      <template #left>
        <div
          class="text-white btn btn-ghost tracking-wider font-medium text-lg px-4"
          @click="goBack"
        >
          <span class="text-xl">&lt;</span>Back
        </div>
      </template>
    </TheNavigation>
<!--    nav-->


    <div class="absolute top-20 w-full px-4" v-if="selectedComic">
      <div
        class="navbar min-h-0 max-w-4xl w-full mx-auto bg-base-200 rounded-lg flex-col space-y-4 px-6"
      >


<!--        name-->
        <div class="w-full pl-4">
          <span class="mr-auto text-lg 2xl:text-xl">名字</span>
          <span class="text-lg mx-auto">{{ selectedComic.name }}</span>
          <TheButton
            type="ghost"
            size="sm"
            class="bg-base-300 ml-auto"
            onclick="document.getElementById('name').showModal()"
          >
            <TheIcon type="pencil" size="lg" />
          </TheButton>
<!--          nameModal-->
          <TheModal id="name">
            <input type="text" class="input input-info mx-auto block" v-model="comicName" />
            <form method="dialog">
              <TheButton
                type="info"
                class="block mx-auto mt-4"
                @click="modifyComic('name', comicName)"
                >确定</TheButton
              >
            </form>
          </TheModal>
<!--          nameModal-->
        </div>
<!--        name-->


        <div class="divider divider-primary"></div>
<!--        author-->
        <div class="w-full pl-4">
          <span class="mr-auto text-lg 2xl:text-xl">作者</span>
          <span class="text-lg mx-auto">{{ selectedComic.author }}</span>
          <TheButton
            type="ghost"
            size="sm"
            class="bg-base-300 ml-auto"
            onclick="author.showModal()"
          >
            <TheIcon type="pencil" size="lg" />
          </TheButton>
<!--          authorModal-->
          <TheModal id="author">
            <input type="text" class="input input-info mx-auto block" v-model="comicAuthor" />
            <form method="dialog">
              <TheButton
                type="info"
                class="block mx-auto mt-4"
                @click="modifyComic('author', comicAuthor)"
                >确定</TheButton
              >
            </form>
          </TheModal>
<!--          authorModal-->
        </div>
        <!--    author      -->


        <div class="divider divider-primary"></div>
<!--        status-->
        <div class="w-full flex pl-4">
          <span class="mr-auto text-lg 2xl:text-xl">状态</span>
          <span class="text-lg mx-auto">{{
            statuses.find((status) => status.value === selectedComic.status).label
          }}</span>
          <TheButton
            type="ghost"
            size="sm"
            class="bg-base-300 ml-auto"
            onclick="document.getElementById('status').showModal()"
          >
            <TheIcon type="pencil" size="lg" />
          </TheButton>
<!--          statusModal-->


          <TheModal id="status">
            <select class="select select-bordered block mx-auto" required v-model="comicStatus">
              <option disabled selected value="">状态</option>
              <template v-for="status in statuses">
                <option :value="status.value">
                  {{ status.label }}
                </option>
              </template>
            </select>
            <form method="dialog">
              <TheButton
                type="info"
                class="block mx-auto mt-4"
                @click="modifyComic('status', comicStatus)"
                >确定</TheButton
              >
            </form>
          </TheModal>
<!--          statusModal-->
        </div>
<!--        status-->


        <div class="divider divider-primary"></div>
<!--        description-->
        <div class="w-full flex gap-3 pl-4">
          <span class="text-lg 2xl:text-xl whitespace-nowrap flex-none">简介</span>
          <span class="text-sm mx-auto text-center">{{ selectedComic.description }}</span>
          <TheButton
            type="ghost"
            size="sm"
            class="bg-base-300 ml-auto"
            onclick="description.showModal()"
          >
            <TheIcon type="pencil" size="lg" />
          </TheButton>


<!--          descriptionModal-->
          <TheModal id="description">
            <textarea
              class="textarea textarea-primary mx-auto block"
              rows="3"
              v-model="comicDescription"
            >
            </textarea>
            <form method="dialog">
              <TheButton
                type="info"
                class="block mx-auto mt-4"
                @click="modifyComic('description', comicDescription)"
                >确定</TheButton
              >
            </form>
          </TheModal>
<!--          descriptionModal-->
        </div>
<!--        description-->


        <div class="divider divider-primary"></div>
        <!--     tags     -->
        <div class="w-full flex gap-3 pl-4">
          <span class="mr-3 text-lg 2xl:text-xl whitespace-nowrap">标签</span>
          <div class="flex-1 flex justify-center flex-wrap gap-2">
            <template v-for="tag in selectedComic.tags">
              <TheButton type="ghost" class="mx-auto bg-base-300">{{ tag }}</TheButton>
            </template>
          </div>
          <TheButton
            type="ghost"
            size="sm"
            class="bg-base-300 ml-auto"
            onclick="document.getElementById('tags').showModal()"
          >
            <TheIcon type="pencil" size="lg" />
          </TheButton>
<!--          tagsModal-->


          <TheModal id="tags">
            <div class="grid grid-cols-3 gap-2">
              <template v-for="tag in tags" :key="tag">
                <input
                  type="checkbox"
                  :id="tag"
                  :value="tag"
                  v-model="comicTags"
                  class="hidden"
                  @change="() => console.log(comicTags)"
                />
                <label :for="tag" class="btn checked">{{ tag }}</label>
              </template>
            </div>
            <form method="dialog">
              <TheButton
                type="info"
                class="block mx-auto mt-4"
                @click="modifyComic('tags', comicTags)"
                >确定</TheButton
              >
            </form>
          </TheModal>
<!--          tagsModal-->
        </div>
        <!--     tags     -->


        <div class="divider divider-primary"></div>
<!--        cover-->
        <div v-if="selectedComic.coverImage" class="w-full pl-4">
          <span class="mr-auto text-lg 2xl:text-xl whitespace-nowrap">封面</span>
          <div class="px-8 max-w-screen-xs">
            <img
              v-if="selectedComic.chapters !== 0"
              class="rounded-xl"
              :src="`${BASE_URL}/${selectedComic._id}/${selectedComic.coverImage.chapter}/${selectedComic.coverImage.page}.webp`"
              alt=""
            />
          </div>
          <TheButton
            type="ghost"
            size="sm"
            class="bg-base-300 ml-auto"
            onclick="coverImage.showModal()"
          >
            <TheIcon type="pencil" size="lg" />
          </TheButton>


<!--          coverModal-->
          <TheModal id="coverImage">
            <div class="w-full grid grid-cols-3 gap-4">
<!--              template-->
              <template v-for="chapter in selectedComic.chapters" :key="chapter">
                <TheButton
                  type="ghost"
                  class="bg-primary-content"
                  onclick="document.getElementById('selectCoverImage').showModal()"
                  @click="viewChapter(chapter)"
                  >{{ chapter }}</TheButton
                >
                <TheModal id="selectCoverImage">
                  <div class="w-full mt-4 px-4 grid grid-cols-3 gap-4">
                    <div
                      v-for="(image, index) in imageUrls"
                      :key="index"
                      class="relative rounded-lg"
                    >
                      <div
                        v-if="selectedChapter === chapter && selectedPage === index + 1"
                        class="bookmark border-[20px] -top-2 -left-2 z-10"
                      >
                        <p class="text-xs -left-4 -top-4">封面</p>
                      </div>
                      <TheImage
                        :src="image"
                        alt=""
                        class="object-cover object-center rounded-lg"
                        @click="selectCoverImage(chapter, index + 1)"
                      />
                    </div>
                  </div>
                  <form method="dialog">
                    <TheButton type="info" class="block mx-auto mt-4" @click="setCoverImage"
                      >确定</TheButton
                    >
                  </form>
                </TheModal>
              </template>
<!--              template-->
            </div>
          </TheModal>
<!--          coverModal-->
        </div>
<!--        cover-->


        <div class="divider divider-primary"></div>
<!--        chapters-->
        <div class="w-full pl-4">
          <span class="mr-auto text-lg 2xl:text-xl">章节数</span>
          <span class="text-xl mx-auto">
            {{ selectedComic.chapters }}
          </span>
          <TheButton
            type="ghost"
            size="sm"
            class="bg-base-300 ml-auto"
            onclick="document.getElementById('chaptersModal').showModal()"
          >
            <TheIcon type="eye" size="lg" />
          </TheButton>


<!--          chaptersModal-->
          <TheModal id="chaptersModal">
            <div class="w-full grid grid-cols-3 place-items-center gap-4" v-if="selectedComic.chapters">

<!--              template v-for-->
              <template v-for="chapter in selectedComic.chapters" :key="chapter">
                <div class="indicator w-full">
                  <TheIcon
                    class="indicator-item badge badge-error"
                    type="xmark"
                    size="xs"
                    @click="removeChapter(chapter)"
                  />
                  <TheButton
                    type="ghost"
                    class="bg-primary-content w-full"
                    onclick="document.getElementById('chapterImagesModal').showModal()"
                    @click="viewChapter(chapter)"
                    >{{ chapter }}
                  </TheButton>
                </div>
              </template>
<!--              template v-for-->
              <TheButton
                type="info"
                size="md"
                shape="circle"
                class="hover:shadow-2xl"
                onclick="document.getElementById('newChapter').showModal()"
                @click="imageUrls.length = 0"
              >
                <TheIcon type="plus" />
              </TheButton>


<!--              chapterImagesModal-->
              <TheModal id="chapterImagesModal">
                <div class="w-full mt-4 px-4 grid grid-cols-3 gap-4">
                  <div v-for="(image, index) in imageUrls" :key="index" class="relative rounded-lg">
                    <TheButton
                      type="error"
                      shape="circle"
                      class="absolute sm:w-6 sm:h-6 -right-1 -top-1 z-10"
                      @click="removeComicImage(index)"
                    >
                      <TheIcon type="xmark" size="sm" class="text-white" />
                    </TheButton>
                    <TheImage :src="image" alt="" class="object-cover object-center rounded-lg" />
                  </div>
                </div>
              </TheModal>
<!--              chapterImagesModal-->
            </div>


            <div v-if="!selectedComic.chapters" class="flex items-center place-items-center px-4">
              <span class="text-lg">当前无章节</span>
              <TheButton
                type="info"
                size="md"
                shape="circle"
                class="ml-auto"
                onclick="document.getElementById('newChapterModal').showModal()"
              >
                <TheIcon type="plus" size="xl" class="text-white" />
              </TheButton>
            </div>
          </TheModal>
        </div>
      </div>
<!--      chapters-->


<!--      newChapterModal-->
      <TheModal id="newChapterModal">
        <h1 class="text-center text-lg">第{{ selectedComic.chapters + 1 }}章</h1>
        <div class="w-full mt-4 px-4 grid grid-cols-3 gap-4">
          <div v-for="(image, index) in imageUrls" :key="index" class="relative rounded-lg">
            <TheButton
              type="error"
              shape="circle"
              class="absolute sm:w-6 sm:h-6 -right-1 -top-1"
              @click="removeComicImage(index)"
            >
              <TheIcon type="xmark" size="sm" class="text-white" />
            </TheButton>
            <TheImage :src="image" alt="" class="object-cover object-center rounded-lg -z-10"/>
          </div>
          <div
            class="text-center aspect-3/4 rounded-lg bg-base-300 flex justify-center items-center"
          >
            <TheButton
              type="ghost"
              size="md"
              shape="circle"
              class="z-10"
              @click="addComicImageInput.click()"
            >
              <TheIcon type="plus" size="xl" class="text-white" />
            </TheButton>
            <input
              type="file"
              class="absolute hidden"
              @change="addComicImage"
              ref="addComicImageInput"
            />
          </div>
          <div
            class="text-center aspect-3/4 rounded-lg bg-base-300 flex justify-center items-center"
          >
            <TheButton
              type="ghost"
              size="md"
              shape="circle"
              class="z-10"
              @click="bulkAddComicImageInput.click()"
            >
              <TheIcon type="folder-plus" size="xl" class="text-white" />
            </TheButton>
            <input
              type="file"
              multiple
              class="absolute hidden"
              @change="bulkAddComicImage"
              ref="bulkAddComicImageInput"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <TheButton type="primary" class="relative mt-4" @click="createChapter"
          >上传</TheButton
          >
        </div>
      </TheModal>
<!--      newChapterModal-->


      <div class="max-w-xl w-full flex justify-evenly mt-6 mx-auto">
        <TheButton type="success"> 存儲 </TheButton>
        <TheButton type="error" @click="removeComic"> 刪除 </TheButton>
      </div>
    </div>
  </main>


</template>
