<template>
  <Head>
    <Title>TCW | About</Title>
  </Head>
  <div class="">
    <header
      class="flex items-center justify-center about-header flex-col w-full bg-cover"
    >
      <h1 class="display text-aerospace-orange">Who We Are</h1>
    </header>
    <div class="container py-20 mx-auto">
      <div class="md:grid md:grid-cols-3 gap-12">
        <div class="col-span-2">
          <img
            class="w-full aspect-square"
            src="assets/imgs/about-tom.jpeg"
            alt=""
          />
        </div>
        <div class="w-full pt-12 md:pt-0">
          <h2 class="text-3xl font-bold">
            Tom Cleerdin Works is experienced in custom building in the greater
            Amsterdam area.
          </h2>
          <hr class="w-48 h-1 mx-auto my-4 bg-gold border-0 rounded md:my-10" />

          <p class="text-xl md:pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ea quod deserunt incidunt mollitia quaerat modi sit, quo praesentium
            est provident ducimus autem illum nesciunt eligendi magni
            voluptates. Ea, enim.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.about-header {
  background-image: url("assets/imgs/about-header.jpeg");
  height: 500px;
}
</style>
