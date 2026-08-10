<template>
  <div class="collaborer bg-[#ed3f3f] py-15">
    <div class="flex max-w-[1200px] mx-auto my-0">
      <h3 class="anton text-[#FDF731] text-[50px] w-1/2">
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
