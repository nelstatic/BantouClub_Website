<template>
  <div class="section-3 w-full bg-[#FDF731] py-18">
    <div
      class="flex flex-col gap-8 max-w-[630px] lg:max-w-[1200px] mx-auto my-0"
    >
      <p
        class="anton lg:text-[23px] text-[17px] mx-auto lg:max-w-full max-w-[90%]"
      >
        CINÉ<span class="text-[#ED3F3F]">NIA</span> SE VEUT À LA FOIS UN LIEU DE
        TRANSMISSION, DE RÉFLEXION ET DE PARTAGE,
        <span class="text-[#ED3F3F]"
          >OÙ LE CINÉMA DEVIENT UN OUTIL POUR FAIRE COMMUNAUTÉ ET OUVRIR DE
          NOUVEAUX HORIZONS</span
        >. C'EST POURQUOI LE PROJET PREND LA FORME D'UN CINÉ-CLUB MENSUEL
        ITINÉRANT,
        <span class="text-[#ED3F3F]">ANCRÉ DANS PLUSIEURS VILLES</span> EN
        FRANCE, SUR LE CONTINENT AFRICAIN ET À L'INTERNATIONAL
        <span class="text-[#ED3F3F]"
          >UNE MÊME SÉANCE, VÉCUE SIMULTANEMENT EN DIFFÉRENTS ENDROITS</span
        >, PAR DES GENS QUI NE SE CONNAISSENT PAS ENCORE MAIS PARTAGENT DÉJÀ
        QUELQUE CHOSE.
      </p>
      <div class="flex flex-col lg:flex-row gap-3 justify-between">
        <img
          src="/cinenia/7b9b80bb-b425-4560-8277-a80f907d484e.JPG"
          class="lg:w-[590px] lg:h-[400px] w-[90%] object-cover cursor-pointer mx-auto"
          alt=""
          @click="
            openModal('/cinenia/7b9b80bb-b425-4560-8277-a80f907d484e.JPG')
          "
        />
        <img
          src="/cinenia/DSC_0039.JPG"
          class="lg:w-[590px] lg:h-[400px] w-[90%] object-cover cursor-pointer mx-auto"
          alt=""
          @click="openModal('/cinenia/DSC_0039.JPG')"
        />
      </div>
      <p
        class="anton lg:text-[23px] text-[17px] mx-auto lg:max-w-full max-w-[90%]"
      >
        CHAQUE CHAPITRE LOCAL EST ANIMÉ PAR DES MEMBRES DE LA COMMUNAUTÉ,
        <span class="text-[#ED3F3F]"
          >DANS DES LIEUX CHOISIS POUR LEUR PROXIMITÉ AVEC LES GENS</span
        >
        : CAFÉS, ASSOCIATIONS, ESPACES CULTURELS DE QUARTIER.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useImageModal } from "../composables/useImageModal";
const { openModal } = useImageModal();
</script>
