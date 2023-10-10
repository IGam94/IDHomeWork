<template>
  <div class="flex sm:flex-col">
    <router-link to="/card" class="relative w-full">
      <div class="card"></div>
      <div class="flex items-center justify-center h-screen sm:h-[50vh]">
        <p class="z-10 text-3xl text-white">CardUI 바로가기</p>
      </div>
    </router-link>
    <router-link to="/form" class="relative w-full">
      <div class="form"></div>
      <div class="flex items-center justify-center h-screen sm:h-[50vh]">
        <p class="z-10 text-3xl text-white">FormUI 바로가기</p>
      </div>
    </router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/image/cardUi.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}
.card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.card:hover::before {
  background-color: rgba(0, 0, 0, 0.6);
}

.form {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/image/formUi.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}
.form::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.form:hover::before {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
