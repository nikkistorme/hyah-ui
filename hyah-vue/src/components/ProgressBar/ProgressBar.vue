<template>
  <div
    class="hya-progress"
    role="progressbar"
    :aria-label="ariaLabel"
    :aria-valuemin="min"
    :aria-valuemax="max"
    :aria-valuenow="now"
  >
    <div class="hya-progress__value" :style="{ width: `${now}%` }">
      <span v-if="!label && !noLabel">{{ `${now}%` }}</span>
      <span v-if="label && !noLabel">{{ label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  ariaLabel: {
    type: String,
    default: "Loading",
    required: false,
  },
  label: {
    type: String,
    default: "",
    required: false,
  },
  noLabel: {
    type: Boolean,
    default: false,
    required: false,
  },
  min: {
    type: Number,
    default: 0,
    required: false,
  },
  max: {
    type: Number,
    default: 100,
    required: false,
  },
  now: {
    type: Number,
    default: 25,
    required: false,
  },
});
</script>

<style scoped>
.hya-progress {
  height: 30px;
  width: 100%;
  min-width: 100px;
  background-color: var(--hya-progress-c-bg);
  border: 2px solid var(--hya-progress-c-border);
  border-radius: var(--hya-progress-border-radius);
  overflow: hidden;
}
.hya-progress__value {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: var(--hya-progress-c-fill);
  color: var(--hya-progress-c-font);
}
</style>
