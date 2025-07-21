<template>
  <Transition name="hya-carousel-item">
    <li class="hya-carousel-item">
      <slot></slot>
    </li>
  </Transition>
</template>

<script setup lang="ts"></script>

<style scoped>
.hya-carousel-item {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - var(--hya-carousel-nav-ht));
  transition: left 0.6s ease-out;
}
.hya-carousel-item__active {
  visibility: visible;
  left: 0;
}
.hya-carousel-item__prev {
  left: -100%;
}
.hya-carousel-item__next {
  left: 100%;
}
.hya-carousel-item__next.hya-in-transition,
.hya-carousel-item__prev.hya-in-transition {
  visibility: visible;
}
</style>
