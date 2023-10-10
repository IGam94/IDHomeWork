<template>
  <div class="flex h-screen justify-center items-center">
    <ul class="w-[70rem]">
      <li><FormInputBox v-model="text" :maxLength="maxLength" /></li>
      <li><FormInputBox v-model="readonlyText" :maxLength="maxLength" readonly /></li>
      <li><FormInputBox v-model="disabledText" :maxLength="maxLength" disabled /></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormInputBox from '../components/form/FormInputBox.vue'

const text = ref('')
const readonlyText = ref('readonly FORM입니다.')
const disabledText = ref('disabled FORM입니다.')
const maxLength = ref(500)
</script>

<style lang="scss" scoped></style>
