<script setup>
import { useImageModal } from "../composables/useImageModal";

const { isOpen, currentImage, closeModal } = useImageModal();
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        @click.self="closeModal"
      >
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-white text-3xl leading-none"
        >
          &times;
        </button>
        <img
          :src="currentImage?.src"
          :alt="currentImage?.alt"
          class="max-h-[90vh] max-w-[90vw] object-contain"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
