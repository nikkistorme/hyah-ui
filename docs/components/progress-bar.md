<script setup>
  import { ProgressBar } from "hyah-vue";
</script>

# Progress Bar

Are we there yet?

## Overview

A Progress Bar is a visual indicator of the progress of a task. It can be used to show the progress of a loading state, form completion, or similar process.

## Usage

### Basic Example

```vue
<script setup>
import { ProgressBar } from "hyah-vue";
const now = ref(25);
</script>

<template>
  <ProgressBar :now="now" />
</template>
```

<ProgressBar now="25" />

### With No Label

```vue
<script setup>
import { ProgressBar } from "hyah-vue";
const now = ref(65);
</script>

<template>
  <ProgressBar :now="now" noLabel />
</template>
```

<ProgressBar now="65" noLabel />

## Accessibility

### Out of the Box

- The Progress Bar has `role="progressbar"` to define it as displaying progress information.
- The Progress Bar has `aria-label="Loading"` by default.
- The Progress Bar has `aria-valuemin="0"` and `aria-valuemax="100"` to define the minimum and maximum values. These can be changed via the `min` and `max` props.
- The Progress Bar has `aria-valuenow` to define the current value. This can be changed via the `now` prop.

### Custom Options

- If the progress bar is describing the state of a particular section of the page, use the `aria-describedby` attribute on that section to point to the progress bar's `id` attribute. While the progress bar is busy, the section should have `aria-busy="true"`.

```vue
<script>
import { ProgressBar } from "hyah-vue";
</script>

<template>
  <ProgressBar id="api-progress" now="25" />

  <section aria-describedby="api-progress" aria-busy="true">
    <!-- Pending API data -->
  </section>
</template>
```

## Customization

To customize the Progress Bar's appearance, you can override the styles on the `hya-progress` and `hya-progress__value` classes, or use the following CSS variables:

```css
:root {
  --hya-progress-ht: 30px;
  --hya-progress-min-ht: 30px;
  --hya-progress-wd: 100%;
  --hya-progress-min-wd: 100px;
  --hya-progress-c-bg: #252529;
  --hya-progress-c-fill: var(--hya-c-primary);
  --hya-progress-c-font: var(--hya-c-font);
  --hya-progress-c-border: var(--hya-c-primary);
  --hya-progress-border-wd: 2px;
  --hya-progress-border-radius: 20px;
}
```

## Props

| Name        | Description                              | Type      | Default   |
| ----------- | ---------------------------------------- | --------- | --------- |
| `now`       | The current value of the progress bar.   | `number`  | `25`      |
| `min`       | The minimum value of the progress bar.   | `number`  | `0`       |
| `max`       | The maximum value of the progress bar.   | `number`  | `100`     |
| `label`     | The label for the progress bar.          | `string`  | `${now}%` |
| `ariaLabel` | The aria-label for the progress bar.     | `string`  | `Loading` |
| `noLabel`   | Removes the label from the progress bar. | `boolean` | `false`   |
