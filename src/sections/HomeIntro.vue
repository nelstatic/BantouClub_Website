<template>
  <div class="home w-full bg-[#FDF731] py-6">
    <div class="max-w-[1200px] mx-auto my-0 flex justify-between items-center">
      <div class="plongez">
        <div class="image-container">
          <img src="../../public/home/IMG_0928.JPG" alt="" />
        </div>
        <div class="content">
          <h1 class="anton">
            <span class="surligne">PLONGEZ DANS</span>
            <span class="surligne">LA MAGIE DU CINÉMA</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.home {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.plongez {
  position: relative;
  overflow: hidden;
  margin: 10px;
}
.image-container {
  background-color: black;
}
.image-container img {
  display: block; /* supprimer l'espace inline parasite */
  opacity: 0.5;
  width: 100%;
  height: 100%;
}
.overlay {
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
}

.content {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content h1 {
  text-align: center;
  line-height: 65px;
  font-size: 60px;
  color: #5fb822;
}

.content h1 span.surligne {
  display: block;
  width: fit-content;
  margin: 0 auto;
  background-image: linear-gradient(#ed3f3f, #ed3f3f);
  background-repeat: no-repeat;
  /* background-size: 100% 50px; */
  background-position: 0 45px;
  padding-bottom: 10px;
  animation: surlignage 0.8s ease-out forwards;
}

@keyframes surlignage {
  from {
    background-size: 0% 24px;
  }
  to {
    background-size: 100% 24px;
  }
}
</style>
