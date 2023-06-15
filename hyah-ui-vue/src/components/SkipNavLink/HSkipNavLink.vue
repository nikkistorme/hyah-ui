<template>
  <a class="hyah-skip-nav" :href="to" @click="moveFocus">
    <slot> Skip to main content </slot>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: "#maincontent",
    required: false,
  },
});
const moveFocus = () => {
  const mainContent = document.getElementById(props.to.slice(1));
  if (mainContent) {
    mainContent.focus();
  }
};
</script>

<style>
.hyah-skip-nav {
  position: absolute;
  left: -9999px;
  padding: 1em;
  background-color: #252529;
  opacity: 0;
  z-index: 1000;
}
.hyah-skip-nav:focus {
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}
</style>
