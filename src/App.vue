<template>
  <div>
    <Navbar>
      <template #logo>
        <router-link to="/">
          <img
            src="/navbar/logo.png"
            alt=""
            class="lg:w-[180px] lg:h-[60px] w-[120px] h-[60px] object-cover"
          />
        </router-link>
      </template>

      <li><router-link to="/notre-intention">Notre Intention</router-link></li>
      <li><router-link to="/cinenia">CinéNia</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </Navbar>

    <ImageModal />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import ImageModal from "./components/ImageModal.vue";
</script>
