<template>
  <div>
    <header
      id="navbar"
      :class="{ onScroll: !topOfPage }"
      class="bg-transparent text-lg z-50 hover:bg-black ease-in-out duration-300 sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-2 fixed top-0 right-0 left-0"
    >
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <NuxtLink
            class="text-change icon-display text-aerospace-orange font-bold"
            to="/"
            >TCW</NuxtLink
          >
        </div>

        <div class="sm:hidden">
          <button @click="toggleMenu" type="button" class="text-snow">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        :class="[
          isOpen ? 'block' : 'hidden',
          'sm:flex',
          'text-snow',
          'px-2',
          'pt-2',
          'pb-4',
        ]"
      >
        <ul class="sm:flex text-change">
          <li
            @click="toggleMenu"
            class="rounded px-2 py-1 hover:text-aerospace-orange"
          >
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li
            @click="toggleMenu"
            class="rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2 hover:text-aerospace-orange"
          >
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li
            @click="toggleMenu"
            class="rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2 hover:text-aerospace-orange"
          >
            <NuxtLink class="" to="/portfolio">Portfolio</NuxtLink>
          </li>
          <li
            @click="toggleMenu"
            class="rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2 hover:text-aerospace-orange"
          >
            <NuxtLink class="" to="/products">Products</NuxtLink>
          </li>
          <li
            @click="toggleMenu"
            class="rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2 hover:text-aerospace-orange"
          >
            <NuxtLink class="" to="/contact">Contact</NuxtLink>
          </li>
          <!-- <li
              @click="toggleMenu"
              class="rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2 hover:text-aerospace-orange"
            >
              <NuxtLink class="btn" to="/products/lkhasdfjsd">oops</NuxtLink>
            </li> -->
        </ul>
      </nav>
    </header>

    <div class=" ">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const topOfPage = ref(true);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleScroll = () => {
  topOfPage.value = window.scrollY === 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* .router-link-exact-active {
    color: var(--aerospace-orange);
  } */

.onScroll {
  background-color: var(--black);
  transition: background-color 0.3s ease-in-out;
}

#navbar:hover .text-change,
.onScroll .text-change {
  color: snow !important;
  transition: 0.3s ease-in-out;
}
</style>
