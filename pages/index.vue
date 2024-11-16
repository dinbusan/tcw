<template>
  <div>
    <div>
      <svg
        style="width: 100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 3000 1688"
      >
        <image
          xlink:href="assets/imgs/24-36Hrs-Amsterdam-01-01-cwqt-videoSixteenByNine3000.jpg"
          style="width: 3000px"
        ></image>
        <NuxtLink class="image-mapper-shape" to="/about">
          <g>
            <polygon
              class="image-mapper-shape"
              data-index="1"
              points="1025.64 874.644 1025.64 504.273 1074.07 433.048 1113.96 421.652 1151 504.273 1176.64 868.946"
            ></polygon>
          </g>
        </NuxtLink>
        <NuxtLink class="image-mapper-shape" to="/about">
          <g>
            <polygon
              class="image-mapper-shape"
              data-index="2"
              points="1353.28 509.971 1364.67 888.889 1566.95 880.342 1558.4 495.727"
            ></polygon>
          </g>
        </NuxtLink>
        <NuxtLink class="image-mapper-shape" to="/products">
          <g>
            <polygon
              class="image-mapper-shape"
              data-index="3"
              points="1740.74 498.576 1806.27 413.105 1797.72 367.521 1863.25 367.521 1908.83 487.179 1917.38 888.889 1740.74 891.738"
            ></polygon>
          </g>
        </NuxtLink>
        <NuxtLink class="btn image-mapper-shape" to="/contact">
          <g>
            <polygon
              class="image-mapper-shape"
              data-index="4"
              points="2139.6 529.915 2222.22 444.444 2313.39 529.915 2327.64 888.889 2148.15 886.04"
            ></polygon>
          </g>
        </NuxtLink>
      </svg>
    </div>
    <div class="container p-4 mx-auto">
      <h2>Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        adipisci dolores ipsam voluptatum blanditiis laborum reprehenderit id
        earum omnis ut optio quas officia et fuga, quibusdam perspiciatis aut
        porro voluptate.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam
        architecto blanditiis eius sunt consequuntur voluptatibus sapiente vel
        placeat hic. Aspernatur quibusdam ratione iusto eius sequi? Alias sunt
        praesentium minus.
      </p>
      <h1 class="text-4xl font-bold">This is a heading 1</h1>
      <h2 class="text-3xl font-semibold">This is a heading 2</h2>
      <h3 class="text-2xl font-medium">This is a heading 3</h3>
      <p class="text-base">This is a paragraph.</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* g:hover .image-mapper-shape {
  stroke: white;
  stroke-width: 2px;
  opacity: 20%;
} */

.image-mapper-shape {
  fill: rgba(0, 0, 0, 0); /* Transparent fill */
  stroke: rgba(255, 255, 255, 0); /* Invisible stroke */
  pointer-events: all; /* Ensure the polygon area responds to mouse events */
  transition: stroke 0.2s ease-in-out, stroke-width 0.2s ease-in-out,
    filter 0.3s ease-in-out;
}

/* Apply the glow effect on hover */
.image-mapper-shape:hover,
.image-mapper-shape:active,
.image-mapper-shape:focus {
  stroke: rgba(255, 255, 255, 0.8); /* White stroke color */
  stroke-width: 10px; /* Larger stroke width */
  filter: drop-shadow(
    0 0 10px rgba(255, 255, 255, 0.8)
  ); /* Apply glow effect */
}
</style>
