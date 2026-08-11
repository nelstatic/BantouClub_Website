<template>
  <div class="contact bg-[#fdf731] w-full py-15">
    <div
      class="flex justify-between max-w-[1200px] lg:w-full w-[90%] mx-auto my-0 items-center"
    >
      <div class="flex flex-col lg:gap-0 gap-6 w-full">
        <h1 class="lg:text-[60px] text-[50px] text-[#5FB822] anton">
          PARLONS CINÉMA !
        </h1>
        <div class="flex lg:flex-row flex-col-reverse justify-between">
          <Form
            label-color="#1a1a1a"
            button-bg-color="#ed3F3F"
            button-text-color="#fdf731"
            :show-subscribe="false"
            class="w-1/2 pt-16 pr-16"
          />
          <img
            src="/contact/IMG_0927.JPG"
            class="w-[700px] object-cover cursor-pointer"
            alt=""
            @click="openModal('/contact/IMG_0927.JPG')"
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
