<template>
  <div class="nos-proj w-full bg-[#52A00D] py-10">
    <div class="lg:max-w-[1200px] max-w-[630px] mx-auto my-0">
      <h2
        class="text-[#FDF731] pb-12 text-[30px] anton lg:max-w-full max-w-[90%] mx-auto"
      >
        NOS PROJECTIONS
      </h2>
      <div
        class="grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-3 lg:max-w-full max-w-[90%] mx-auto"
      >
        <Card
          affiche="/cinenia/amonage.png"
          titre="À MON ÂGE, JE ME CACHE ENCORE POUR FUMER"
          @click="openModal('/cinenia/amonage.png')"
        />
        <Card
          affiche="/cinenia/Union.png"
          titre="TONGO SAA"
          @click="openModal('/cinenia/Union.png')"
        />
        <Card
          affiche="/cinenia/ifbealstreetcould.png"
          titre="IF BEALE STREET COULD TALK"
          @click="openModal('/cinenia/ifbealstreetcould.png')"
        />
        <Card
          affiche="/cinenia/femmeaucouteau.png"
          titre="LA FEMME DU COUTEAU"
          @click="openModal('/cinenia/femmeaucouteau.png')"
        />
        <Card
          affiche="/cinenia/augure.png"
          titre="AUGURE"
          @click="openModal('/cinenia/augure.png')"
        />
        <Card
          affiche="/cinenia/joliecoiffure.png"
          titre="CHEZ JOLIE COIFFURE"
          @click="openModal('/cinenia/joliecoiffure.png')"
        />
        <Card
          affiche="/cinenia/Casablanca.jpg"
          titre="CASABLANCA"
          @click="openModal('/cinenia/Casablanca.jpg')"
        />
        <Card
          affiche="/cinenia/BAO.png"
          titre="LES SAIGNANTES"
          @click="openModal('/cinenia/BAO.png')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";

import { useImageModal } from "../composables/useImageModal";
const { openModal } = useImageModal();
</script>
