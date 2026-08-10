// composables/useImageModal.js
import { ref } from "vue";

// state partagé en dehors de la fonction = un seul état pour toute l'app
const isOpen = ref(false);
const currentImage = ref(null);

export function useImageModal() {
  function openModal(imageSrc, alt = "") {
    currentImage.value = { src: imageSrc, alt };
    isOpen.value = true;
    document.body.style.overflow = "hidden"; // empêcher le scroll derrière
  }

  function closeModal() {
    isOpen.value = false;
    currentImage.value = null;
    document.body.style.overflow = "";
  }

  return {
    isOpen,
    currentImage,
    openModal,
    closeModal,
  };
}
