<template>
  <div class="collaborer bg-[#ed3f3f] py-15">
    <div
      class="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:max-w-[1200px] lg:w-full w-[90%] mx-auto my-0"
    >
      <h3 class="anton text-[#FDF731] lg:text-[50px] text-[40px] lg:w-1/2">
        ENVIE DE<br />
        COLLABORER ?
      </h3>
      <Form
        label-color="#fdf731"
        button-bg-color="#fdf731"
        button-text-color="#ED3F3F"
        :show-subscribe="true"
        class="w-1/2"
      />
    </div>
  </div>
</template>

<script setup>
import Form from "../components/Form.vue";
</script>
