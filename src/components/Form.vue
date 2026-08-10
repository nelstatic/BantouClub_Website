<template>
  <form class="flex flex-col gap-6 calibri" @submit.prevent="handleSubmit">
    <div class="flex gap-5">
      <div class="flex flex-col flex-1">
        <label for="firstname" :style="{ color: labelColor }">
          Prénom <span class="text-sm">(obligatoire)</span>
        </label>
        <input
          id="firstname"
          v-model="form.firstname"
          type="text"
          required
          class="border rounded-2xl px-3 py-2"
        />
      </div>
      <div class="flex flex-col flex-1">
        <label for="lastname" :style="{ color: labelColor }">
          Nom de famille <span class="text-sm">(obligatoire)</span>
        </label>
        <input
          id="lastname"
          v-model="form.lastname"
          type="text"
          required
          class="border rounded-2xl px-3 py-2"
        />
      </div>
    </div>

    <div class="flex flex-col">
      <label for="email" :style="{ color: labelColor }">
        E-mail <span class="text-sm">(obligatoire)</span>
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        class="border rounded-2xl px-3 py-2"
      />

      <div v-if="showSubscribe" class="flex items-center gap-2 mt-2">
        <input id="subscribe" v-model="form.subscribe" type="checkbox" />
        <label for="subscribe" :style="{ color: labelColor }" class="mb-1"
          >S'INSCRIRE POUR RECEVOIR NOS ACTUALITÉS</label
        >
      </div>
    </div>

    <div class="flex flex-col">
      <label for="message" :style="{ color: labelColor }">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="4"
        required
        class="border rounded-3xl px-3 py-2 resize-none"
      ></textarea>
    </div>

    <button
      type="submit"
      class="self-start rounded-full px-6 py-2"
      :style="{ color: buttonTextColor, backgroundColor: buttonBgColor }"
    >
      ENVOYER
    </button>
  </form>
</template>

<script setup>
import { reactive } from "vue";

const props = defineProps({
  labelColor: { type: String, default: "#333333" },
  buttonTextColor: { type: String, default: "#ffffff" },
  buttonBgColor: { type: String, default: "#000000" },
  showSubscribe: { type: Boolean, default: true },
});

const form = reactive({
  firstname: "",
  lastname: "",
  email: "",
  subscribe: false,
  message: "",
});

const emit = defineEmits(["submit"]);

function handleSubmit() {
  emit("submit", { ...form });
}
</script>
