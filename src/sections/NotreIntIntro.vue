<template>
  <div class="notre-int bg-[#FDF731] w-full py-14">
    <div class="flex justify-between max-w-[1200px] mx-auto my-0">
      <div class="col-1 flex flex-col max-w-3/7 gap-12">
        <h1 class="anton text-[60px]">NOTRE INTENTION</h1>
        <p class="calibri font-bold text-[16px]">
          Bantouclub a pour but est de créer des passerelles interculturelles
          auprès de publics n'ayant pas l'habitude de communiquer entre eux en
          célébrant les diversités.
        </p>
        <p class="calibri text-[16px]">
          Notre intention est de créer des mondes en partage motivée par un
          pourquoi social. Cela s'est imposé en constatant la difficulté de
          circulation de certaines productions culturelles,
          <span class="font-bold"
            >souvent appréciés seulement pour leur caractère niche ou dit «
            issue de la diversité »</span
          >
          même lorsque les consommateurs sont culturellement concernés.
        </p>
        <p class="calibri text-[16px]">
          <span class="font-bold">Contribuer à une mosaïque culturelle</span>
          plus homogène et accessible,<span class="font-bold">
            tout en continuant de questionner : qui fait l'art et pour qui</span
          >. A travers des événements, rencontres et propositions artistiques,
          le projet met en lumière des esthétiques, des récits et des
          imaginaires issus des cultures africaines et diasporiques, tout en
          favorisant
          <span class="font-bold"
            >le dialogue, latransmission et la création collective</span
          >
          afin de réduire l'entre-soi et proposer une lecture du monde plus
          populaire et inclusive.
        </p>
        <p class="calibri font-bold text-[16px]">
          *Bantou caractérise les peuples allant de l'Afrique centrale à
          l'Afrique du Sud ayant des langues et des cultures similaires.<br />
          *Bantou signifie le peuple, les humains.
        </p>
      </div>
      <div class="col-2 flex flex-col max-w-3/7 gap-y-2">
        <img
          src="../../public/notreint/IMG_1616.webp"
          class="cursor-pointer"
          alt=""
          @click="openModal('../../public/notreint/IMG_1616.webp')"
        />
        <img
          src="../../public/notreint/IMG_1614.webp"
          class="cursor-pointer"
          alt=""
          @click="openModal('../../public/notreint/IMG_1614.webp')"
        />
        <p class="calibri font-bold italic text-[16px]">
          Panel Talk, la mémoire comme matière. Quand l'image reconstruit
          l'absence
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useImageModal } from "../composables/useImageModal";
const { openModal } = useImageModal();
</script>
