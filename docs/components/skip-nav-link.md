<script setup>
  import { HSkipNavLink } from 'hyah-vue'
</script>

# Skip Navigation Link

Skip, skip, skip to my content

## Overview

A Skip Navigation Link (or Skip to Main Content) is a navigation shortcut that allows users to bypass repetitive or non-essential content and jump directly to the main content of a webpage. It helps users who rely on screen readers or keyboard navigation to quickly access the primary information or functionality of a page without having to navigate through unnecessary elements.

## Usage

The Skip Navigation Link needs to be the first focusable element on the page. It is hidden by default and only becomes visible when it receives focus. This is to prevent it from being visible to sighted users who are using a mouse to navigate the page.

For the Skip Navigation Link to work properly, the main content of the page must have a unique `id` attribute. The `id` attribute is used to create an anchor link that the Skip Navigation Link can jump to. By default, the Skip Navigation Link will jump to the first element with `id="maincontent"`.

```vue
<template>
  <HSkipNavLink />
</template>
```

<div style="margin: 40px 0;">
  <HSkipNavLink style="position: initial; opacity: 1; border-radius: 4px" />
</div>

The above example is made visible for demonstration purposes. In practice, the Skip Navigation Link is hidden by default.

## Accessibility

The presence of a Skip Navigation Link satisfies WCAG Success Criterion [2.4.1 Bypass Blocks](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html): "A mechanism is available to bypass blocks of content that are repeated on multiple Web pages."

The Skip Navigation Link is hidden by default and only becomes visible when it receives focus. This is to prevent it from being visible to sighted users who are using a mouse to navigate the page.

## Customization

To customize the Skip Navigation Link's appearance, use the `hyah-skip-nav` class.

## Props

| Name | Description                           | Type     | Default         |
| ---- | ------------------------------------- | -------- | --------------- |
| `to` | The `id` of the main content element. | `string` | `"maincontent"` |
