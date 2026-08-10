<script setup>
defineProps(["affiche", "titre"]);
</script>

<template>
  <div class="card py-2">
    <img :src="affiche" class="cursor-pointer" alt="" />
    <p
      class="text-[#FDF731] text-center anton text-[23px] pt-1 tracking-wide w-[70%] mx-auto my-0"
    >
      {{ titre }}
    </p>
  </div>
</template>

<style></style>
