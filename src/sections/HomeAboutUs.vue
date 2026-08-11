<template>
  <div class="w-full bg-[#FDF731] py-10">
    <div
      class="flex flex-col-reverse lg:flex-row gap-5 max-w-[1200px] lg:w-full w-[90%] mx-auto my-0 justify-between"
    >
      <img
        src="/home/IMG_0925.webp"
        class="w-[500px] object-cover cursor-pointer"
        alt=""
        @click="openModal('/home/IMG_0925.webp')"
      />
      <div class="flex flex-col gap-8 lg:max-w-[50%] lg:py-15 py-12">
        <h2 class="text-[#5FB822] anton text-[30px] lg:text-[60px]">
          À PROPOS DE NOUS
        </h2>
        <p class="calibri text-[18px] lg:text-[21px]">
          <span class="font-semibold"
            >BantouClub est un espace culturel itinérant et créatif dédié à la
            valorisation des expressions afrodescendantes et diasporiques
            contemporaines.</span
          >
          Fondée par Raffaell Zanga, issue d'une double culture gabonaise et
          camerounaise, le collectif œuvre à la création de passerelles
          interculturelles auprès de publics qui ne se croisent pas toujours, en
          célébrant les diversités.
        </p>
        <div class="mx-auto my-0 py-13">
          <a
            href="#"
            class="py-4 px-11 rounded-[35px] text-[#fdf731] bg-[#ed3f3f] tracking-tighter text-[15px]"
            >EN SAVOIR PLUS</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useImageModal } from "../composables/useImageModal";
const { openModal } = useImageModal();
</script>
