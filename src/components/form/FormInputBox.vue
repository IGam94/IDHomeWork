<template>
  <div class="relative flex m-2">
    <div class="relative flex w-full">
      <textarea
        class="w-full h-20 border p-2 resize-none text-black"
        :class="{ 'focus:outline-none bg-gray-50 text-gray-600': readonly, 'bg-gray-300 text-gray-400':disabled }"
        type="textBox"
        placeholder="내용을 입력해주세요."
        :maxlength="maxLength"
        :readonly="readonly"
        :disabled="disabled"
        v-model="modelValue"
        @input="countText"
        @focus="inputFocus"
        @blur="inputBlur"
      />
      <p 
        class="absolute bottom-2 right-2"         
        :class="{ 'text-gray-600': readonly, 'text-gray-400':disabled }"
      >
        {{ maxLength - textLength < 0 ? 0 : maxLength - textLength }}
      </p>
    </div>
    <div v-if="isShowSaveBtn">
      <button
        @click="saveText"
        :disabled="!isActiveSaveBtn"
        class="w-20 h-20 border bg-amber-500 hover:bg-amber-600 text-white disabled:bg-gray-200 disabled:text-gray-400"
      >
        저장
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, watchEffect, defineModel } from 'vue'

const { maxLength, readonly } = defineProps({
  maxLength: {
    type: Number,
    default: 100
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const modelValue: Ref<string> = defineModel({ required: true })

const originText: Ref<string> = ref(modelValue.value || '')
const textLength: Ref<number> = ref(modelValue.value.length || 0)
const isActiveSaveBtn = ref(false)
const isShowSaveBtn = ref(false)

watchEffect(() => {
  originText.value !== modelValue.value
    ? (isActiveSaveBtn.value = true)
    : (isActiveSaveBtn.value = false)
})

const countText = (e) => {
  const target = e.currentTarget
  modelValue.value = target.value
  textLength.value = target.value.length
}
const saveText = () => {
  originText.value === modelValue.value
    ? alert('동일한 내용은 저장 할 수 없습니다.')
    : alert('저장 되었습니다.')
}
const inputFocus = () => {
  readonly ? (isShowSaveBtn.value = false) : (isShowSaveBtn.value = true)
}
const inputBlur = () => {
  originText.value === modelValue.value ? (isShowSaveBtn.value = false) : (isShowSaveBtn.value = true)
}
</script>

<style scoped></style>
