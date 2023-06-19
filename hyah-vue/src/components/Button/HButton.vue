<template>
  <button
    v-if="!href"
    :class="`hyah-button ${fullWidth ? 'full-width' : ''}`"
    :type="type"
    role="button"
    :disabled="disabled"
    :aria-disabled="disabled"
  >
    <slot>Click me</slot>
  </button>
  <a
    v-else
    :class="`hyah-button ${fullWidth ? 'full-width' : ''}`"
    role="button"
    :disabled="disabled"
    :aria-disabled="disabled"
    :href="href"
    :target="target"
  >
    <slot>Click me</slot>
  </a>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String as () => "button" | "submit" | "reset",
    default: "button",
    required: false,
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
    required: false,
  },
  href: {
    type: String,
    default: "",
    required: false,
  },
  target: {
    type: String,
    default: "_self",
    required: false,
  },
});
</script>

<style scoped>
.hyah-button {
  min-height: var(--hya-btn-min-ht);
  min-width: var(--hya-btn-min-wd);
  width: var(--hya-btn-wd);
  padding: var(--hyah-btn-pd);
  border: none;
  border-radius: 4px;
  color: var(--hyah-btn-c-font);
  background-color: var(--hya-btn-c-bg);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}
.hyah-button:hover:not(:disabled) {
  background-color: #4c50b2;
}
.hyah-button:disabled {
  opacity: 0.75;
  box-shadow: none;
  cursor: not-allowed;
}
.hyah-button.full-width {
  width: 100%;
}
</style>
