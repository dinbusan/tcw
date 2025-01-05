<template>
  <Head>
    <Title>TCW | About</Title>
  </Head>
  <div class="">
    <header class="flex about-header flex-col w-full bg-cover"></header>
    <div class="container pt-4 w-full mx-auto">
      <h2>About</h2>
      <img src="assets/imgs/IMG_0282.JPG" alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, eveniet!
        Rem expedita optio at! Earum molestiae minima voluptate quaerat
        asperiores voluptates veniam deleniti tempore. Itaque sapiente quisquam
        ipsum fugiat obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur
        neque harum nostrum nisi vitae est nam necessitatibus reprehenderit,
        assumenda ratione officiis architecto unde adipisci! Porro natus laborum
        quia in?
      </p>
      <div>{{ data }}</div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("api/currency/GBP");
</script>

<style scoped>
.about-header {
  background-image: url("assets/imgs/about-header.jpeg");
  height: 500px;
}
</style>
