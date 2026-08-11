<script setup>
defineProps(["affiche", "titre"]);
</script>

<template>
  <div class="card py-2">
    <img :src="affiche" class="cursor-pointer" alt="" />
    <p
      class="text-[#FDF731] text-center anton lg:text-[23px] text-[17px] pt-1 tracking-wide lg:w-[70%] w-[85%] mx-auto my-0"
    >
      {{ titre }}
    </p>
  </div>
</template>

<style></style>
