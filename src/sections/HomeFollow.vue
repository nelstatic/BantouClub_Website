<template>
  <div class="suivez-nous bg-[#ED3F3F] w-full py-10">
    <div
      class="flex flex-col items-center gap-8 max-w-[1200px] lg:w-full w-[90%] mx-auto my-0 py-14"
    >
      <h3 class="anton text-[#FDF731] text-[30px]">
        SUIVEZ-NOUS SUR LES RÉSEAUX SOCIAUX
      </h3>
      <div
        class="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2 py-5"
      >
        <img
          src="/home/paneltalk.png"
          alt=""
          class="cursor-pointer"
          @click="openModal('/home/paneltalk.png')"
        />
        <img
          src="/home/cineniaa0.png"
          alt=""
          class="cursor-pointer"
          @click="openModal('/home/cineniaa0.png')"
        />
        <img
          src="/home/v3.png"
          alt=""
          class="cursor-pointer"
          @click="openModal('/home/v3.png')"
        />
        <img
          src="/home/whatsapp.jpeg"
          alt=""
          class="cursor-pointer"
          @click="openModal('/home/whatsapp.jpeg')"
        />
      </div>
      <a
        href="https://www.instagram.com/bantouclub/"
        target="_blank"
        class="py-4 px-11 rounded-[30px] bg-[#FDF731] text-red-500 calibri tracking-tighter text-[15px]"
        >REJOINS-NOUS</a
      >
    </div>
  </div>
</template>

<script setup>
import { useImageModal } from "../composables/useImageModal";
const { openModal } = useImageModal();
</script>
