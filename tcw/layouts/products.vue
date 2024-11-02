<template>
  <div>
    <Head>
      <Title>TCW | Products</Title>
    </Head>

    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink class="font-bold" to="/"
          >Tom Cleerdin Works | Products</NuxtLink
        >
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
    <footer class="container mx-auto p-4">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
