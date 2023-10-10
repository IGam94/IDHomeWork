<template>
  <div class="flex max-w-96 border">
    <div class="flex justify-center items-center max-w-[10rem] bg-black">
      <img class="" :src="cardItem.img || '../src/assets/image/ljs.jpeg'" alt="" />
    </div>
    <div class="flex flex-col justify-between w-56 bg-slate-50">
      <div class="p-2 ">
        <p class="text-sm mb-2">{{ cardItem.title }}</p>
        <p class="text-xs">{{ cardItem.label }}</p>
        <div v-if="cardItem.cellPrice || cardItem.price" class="flex items-center">
          <p class="text-md text-red-400">{{ cardItem.cellPrice }}원</p>
          <p class="ml-1 text-xs line-through">{{ cardItem.price }}원</p>
        </div>
      </div>
      <div
        class="flex items-center bg-slate-50 p-2"
        v-if="cardItem.star !== null || cardItem.review"
      >
        <div class="max-h-20" v-if="cardItem.star !== null">
          <button v-for="(starCount, index) in star" :key="index" @click="clickedStar(starCount)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              :fill="starColor(starCount)"
              class="w-6 h-6"
            >
              <path
                fill-rule="black"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <span class="text-slate-300 mx-1">|</span>
        <p class="text-xs text-slate-400">{{ cardItem.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface cardType {
  id: number
  img: string
  label: string
  title: string
  cellPrice: number
  price: number
  star: number
  review: string
  name: string
}
interface cardProps {
  cardItem: cardType
}

const { cardItem } = defineProps<cardProps>()

const star = ref([1, 2, 3, 4, 5])
const selectedStar = ref(cardItem.star)

const clickedStar = (starCount) => {
  selectedStar.value = starCount
}
const starColor = (count) => {
  const fill = count <= selectedStar.value ? 'yellow' : '#eee'
  return fill
}
</script>

<style lang="scss" scoped></style>
