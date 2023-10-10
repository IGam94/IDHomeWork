<template>
<div class="flex h-screen items-center">
  <div class=" w-[900px] sm:w-auto  mx-auto my-0 items-center ">
    <ul class="grid grid-cols-4 sm:grid-cols-2 my-0 mx-auto px-10 gap-8">
        <li class="w-[100%]" v-for="item in data" :key="item.id">
          <CardUi :cardItem="item" />
        </li>
    </ul>
    <ul class="grid grid-cols-1 my-0 mx-auto px-10 gap-8 mt-10">
        <li><CardUiHorizontal :cardItem="horizontalData" /></li>
    </ul>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CardUi from '../components/card/CardUi.vue'
import CardUiHorizontal from '../components/card/CardUiHorizontal.vue'

// 데이터 하드코딩
const data = ref([
  {
    id: 1,
    img: './productImg.png',
    label: '라벨1',
    title: '상품명1',
    cellPrice: 10000,
    price: 20000,
    star: 3,
    review: '너무 좋네요~',
    name: ''
  },
  {
    id: 2,
    img: './productImg.png',
    label: '',
    title: '상품명2',
    cellPrice: 20000,
    price: 30000,
    star: 0,
    review: '',
    name: ''
  },
  {
    id: 2,
    img: './productImg.png',
    label: '',
    title: '',
    cellPrice: 0,
    price: 0,
    star: 3,
    review: '너무 좋네요~',
    name: ''
  },
  {
    id: 3,
    img: '',
    label: '프론트엔드 개발자',
    title: '이주상',
    cellPrice: 0,
    price: 0,
    star: 5,
    review: '',
    name: 'Lee Joosang'
  }
])
const horizontalData = ref({
  id: 1,
  img: './productImg.png',
  label: '이 상품은 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을',
  title: '상품명1',
  cellPrice: 0,
  price: 0,
  star: 4,
  review: '너무 좋네요~',
  name: 'Lee Joosang'
})
</script>

<style lang="scss" scoped></style>
