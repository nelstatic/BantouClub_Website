<template>
  <div class="contact bg-[#fdf731] w-full py-15">
    <div class="flex justify-between max-w-[1200px] mx-auto my-0 items-center">
      <div class="flex flex-col w-full">
        <h1 class="text-[60px] text-[#5FB822] anton">PARLONS CINÉMA !</h1>
        <div class="flex justify-between">
          <Form
            label-color="#1a1a1a"
            button-bg-color="#ed3F3F"
            button-text-color="#fdf731"
            :show-subscribe="false"
            class="w-1/2 pt-16 pr-16"
          />
          <img
            src="../../public/contact/IMG_0927.JPG"
            class="w-[700px] object-cover cursor-pointer"
            alt=""
            @click="openModal('../../public/contact/IMG_0927.JPG')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Form from "../components/Form.vue";
import { useImageModal } from "../composables/useImageModal";
const { openModal } = useImageModal();
</script>
