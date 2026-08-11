<template>
  <nav class="w-full bg-[#FDF731] py-2 sticky top-0 z-50">
    <div
      class="max-w-[1200px] lg:w-full mx-auto my-0 flex justify-between items-center px-4"
    >
      <div class="logo">
        <slot name="logo">
          <a href="/"><img src="" alt="" /></a>
        </slot>
      </div>

      <button
        class="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
        @click="isOpen = !isOpen"
        aria-label="Ouvrir le menu"
      >
        <span
          class="block h-0.5 w-6 bg-black transition-transform duration-300"
          :class="isOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="block h-0.5 w-6 bg-black transition-opacity duration-300"
          :class="isOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="block h-0.5 w-6 bg-black transition-transform duration-300"
          :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>

      <!-- menu desktop -->
      <ul class="hidden md:flex gap-3">
        <slot />
      </ul>
    </div>

    <!-- menu mobile -->
    <ul
      class="md:hidden flex flex-col items-center gap-3 overflow-hidden transition-all duration-300"
      :class="isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'"
    >
      <slot />
    </ul>
  </nav>
</template>

<style scoped>
ul :slotted(li) {
  position: relative;
  list-style: none;
  font-family: "Calibri", sans-serif;
  font-size: 17px;
  padding: 0 10px;
}

ul :slotted(a) {
  position: relative;
  text-decoration: none;
  display: inline-block;
}

ul :slotted(a)::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 0%;
  background-color: currentColor;
  transition: width 0.3s ease;
}

ul :slotted(a:hover)::after {
  width: 100%;
}

ul :slotted(a.router-link-exact-active)::after {
  animation: underline-grow 0.6s ease forwards;
}

@keyframes underline-grow {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>
