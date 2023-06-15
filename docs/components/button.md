<script setup>
  import { HButton } from 'hyah-ui-vue';
</script>

# Button

Click me baby one more time

## Usage

```vue
<template>
  <HButton>Button</HButton>
</template>
```

<HButton>Button</HButton>

## Accessibility

### Out of the box

The button's height and width have a minimum of 44px so the target size is large enough for a user to easily tap with a finger or click with a mouse (See [Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)).

When the button is disabled, the `aria-disabled` attribute is set to `true` along with the `disabled` attribute (See [aria-disabled](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)).

### Custom Options

If the button does not contain text, provide an accessible label via the `aria-label` or `aria-labelledby` attributes (See [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) and [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)).

```vue
<template>
  <!-- Describe with aria-label -->
  <HButton aria-label="Close"></HButton>

  <!-- Describe with aria-description -->
  <span id="close-button-label">Close</span>
  <HButton aria-labelledby="close-button-label"></HButton>
</template>
```

If there is a text description of the button, use the `aria-describedby` attribute to associate the description with the button (See [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)).

```vue
<template>
  <HButton aria-describedby="recycle-button-description">
    Move to recycle bin
  </HButton>
  <span id="recycle-button-description">
    Items in the recycle bin will be permanently removed after 30 days.
  </span>
</template>
```

<div style="display: flex; flex-direction: column; gap: 20px; padding: 20px 24px; border-radius: 8px; background-color: #161618">
  <HButton aria-describedby="recycle-button-description">Move to recycle bin</HButton>
  <span id="recycle-button-description">Items in the recycle bin will be permanently removed after 30 days.</span>
</div>

## Customization

### Styling

To customize the button's appearance, you may override the styles on the `hyah-button` class, or apply your own values to the CSS variables below:

```css
:root {
  --hya-btn-min-ht: 44px;
  --hya-btn-min-wd: 44px;
  --hya-btn-wd: fit-content;
  --hya-btn-c-bg: var(--hya-c-primary);
}
```

## Parameters

Any additional attributes provided will be applied to the `button` (or `a`) element directly, such as `aria-label`, `aria-labelledby`, `target`, etc.

| Name        | Description                                                              | Type     | Default    |
| ----------- | ------------------------------------------------------------------------ | -------- | ---------- |
| `type`      | The type of button. (`button`, `submit`, `reset`)                        | `string` | `"button"` |
| `disabled`  | If `true`, the button is disabled (also sets `aria-disabled` to `true`). | `bool`   | `false`    |
| `fullWidth` | If `true`, the button will take up the full width of its container.      | `bool`   | `false`    |
| `href`      | The URL to link to when the button is clicked (element becomes an `a`).  | `string` |            |
