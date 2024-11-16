<template>
  <Head>
    <Title>TCW | About</Title>
  </Head>
  <div class="container p-4 mx-auto">
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, eveniet!
      Rem expedita optio at! Earum molestiae minima voluptate quaerat asperiores
      voluptates veniam deleniti tempore. Itaque sapiente quisquam ipsum fugiat
      obcaecati.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur
      neque harum nostrum nisi vitae est nam necessitatibus reprehenderit,
      assumenda ratione officiis architecto unde adipisci! Porro natus laborum
      quia in?
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("api/currency/GBP");
</script>

<style scoped></style>
