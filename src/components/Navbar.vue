<template>
  <nav class="w-full bg-[#FDF731] py-2 sticky top-0 z-50">
    <div class="max-w-[1200px] mx-auto my-0 flex justify-between items-center">
      <div class="logo">
        <slot name="logo">
          <a href="/"><img src="" alt="" /></a>
        </slot>
      </div>
      <ul class="flex gap-3">
        <slot />
      </ul>
    </div>
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

<script setup></script>
