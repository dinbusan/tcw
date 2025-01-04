<template>
  <div>
    <header class="bg-tom flex flex-col bg-fixed h-screen w-full bg-cover">
      <div class="container h-48 align-bottom my-auto mx-auto">
        <h6 class="display-subtext text-snow">Tom Cleerdin Works</h6>
        <h1 class="display text-aerospace-orange">
          Your ideas.<br class="hidden md:block" />
          Our expertise.
        </h1>
      </div>
      <div
        class="flex w-24 rounded-t-full border-x-4 border-t-4 border-aerospace-orange mx-auto justify-center py-5"
      >
        <div class="text-aerospace-orange animate-pulse duration-[1000ms]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </header>
    <div class="container py-20 mx-auto">
      <div class="flex items-center md:columns-2 gap-12">
        <div class="">
          <h1 class="text-3xl font-bold">
            Tom Cleerdin Works is experienced in custom building in the greater
            Amsterdam area.
          </h1>
          <hr class="w-48 h-1 mx-auto my-4 bg-gold border-0 rounded md:my-10" />

          <!-- <h3 class="text-2xl font-medium md:pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quia inventore reiciendis temporibus corporis dolore labore est
            veritatis sit, nisi et cumque magnam unde magni eius dicta dolor
            reprehenderit totam!
          </h3> -->
          <p class="text-base md:pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ea quod deserunt incidunt mollitia quaerat modi sit, quo praesentium
            est provident ducimus autem illum nesciunt eligendi magni
            voluptates. Ea, enim.
          </p>
        </div>
        <div>
          <img
            class="w-full pt-10 md:pt-0"
            src="assets/imgs/front-page-row-1.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.bg-tom {
  background-image: url("assets/imgs/tom-bg-3.jpeg");
}
</style>
