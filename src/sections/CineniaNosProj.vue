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
          affiche="../../public/cinenia/amonage.png"
          titre="À MON ÂGE, JE ME CACHE ENCORE POUR FUMER"
          @click="openModal('../../public/cinenia/amonage.png')"
        />
        <Card
          affiche="../../public/cinenia/Union.png"
          titre="TONGO SAA"
          @click="openModal('../../public/cinenia/Union.png')"
        />
        <Card
          affiche="../../public/cinenia/ifbealstreetcould.png"
          titre="IF BEALE STREET COULD TALK"
          @click="openModal('../../public/cinenia/ifbealstreetcould.png')"
        />
        <Card
          affiche="../../public/cinenia/femmeaucouteau.png"
          titre="LA FEMME DU COUTEAU"
          @click="openModal('../../public/cinenia/femmeaucouteau.png')"
        />
        <Card
          affiche="../../public/cinenia/augure.png"
          titre="AUGURE"
          @click="openModal('../../public/cinenia/augure.png')"
        />
        <Card
          affiche="../../public/cinenia/joliecoiffure.png"
          titre="CHEZ JOLIE COIFFURE"
          @click="openModal('../../public/cinenia/joliecoiffure.png')"
        />
        <Card
          affiche="../../public/cinenia/Casablanca.png"
          titre="CHEZ JOLIE COIFFURE"
          @click="openModal('../../public/cinenia/Casablanca.png')"
        />
        <Card
          affiche="../../public/cinenia/BAO.png"
          titre="CHEZ JOLIE COIFFURE"
          @click="openModal('../../public/cinenia/BAO.png')"
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
