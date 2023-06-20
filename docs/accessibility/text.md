<script setup>
  import { HButton } from 'hyah-vue';
</script>

# Text Content

## Footnotes

Footnotes are used to provide supportive information to the main text. They are typically used to provide references to sources, or to provide additional information that is not essential to the main text.

```html
<p>
  This is some example text supported by a footnote
  <a id="footnote-1-link" href="#footnote-1">
    <sup>[1] <span class="hya-sr-only">Footnote details</span></sup>
  </a>
  .
</p>

<ol>
  <li id="footnote-1">
    Footnotes provide supportive information.
    <a href="#footnote-1-link" aria-label="Back to content">↩</a>
  </li>
</ol>
```

<div style="display: flex; flex-direction: column; gap: 50px; padding: 20px 24px; border-radius: 8px; background-color: #161618">
  <p>
    This is some example text supported by a footnote
    <a id="footnote-1-link" href="#footnote-1">
      <sup>[1] <span class="hya-sr-only">Footnote details</span></sup>
    </a>
    .
  </p>

  <ol>
    <li id="footnote-1">
      Footnotes provide supportive information.
      <a href="#footnote-1-link" aria-label="Back to content">↩</a>
    </li>
  </ol>
</div>

1. The link to the footnote should be placed immediately after the text that it is supporting.
1. The link to the footnote (ex. "[1]") is contained by an `<a>` tag.
1. The `<a>` tag has a unique id attribute and an href attribute set to the id of the footnote it links to.
1. The `<a>` tag wraps a `<sup>` tag. This is the recommended presentation for footnote links, ideally consistent across the web.
1. Add a `<span>` tag inside of the `<sup>` tag with a description of where the footnote link leads, such as "footnote details." This way, screen readers will read out more than just "one" for the link. Use CSS to hide this text visually but keep it on the page for screen readers and other assistive technologies.
1. The footnotes at the bottom of the page are contained in an `<ol>` tag, since the order of the footnotes matters.
1. The `<li>` tag containing the footnote has a unique id attribute, matching the href attribute on the footnote link.
1. The footnote `<li>` tag contains an `<a>` tag that links back to the corresponding footnote link. The href attribute matches the id attribute of the footnote link. If multiple footnote links lead to the same footnote (like if one reference is used in multiple places on a page) JavaScript will be required to dynamically change the href attribute of the link in the footnote to take users back to where they came from.
1. If if the content of the "back to content" link is not readable text, the link should have an aria-label attribute that describes the link.

The relevant WCAG 2.0 Guidelines are:

- [Guideline 2.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation.html): Ensure that users can navigate and interact with footnotes using only a keyboard, without relying on mouse or touch gestures.
- [Guideline 2.4](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms.html): Ensure that footnotes are structured and marked up in a way that allows users to easily navigate to and from the footnote content.
- [Guideline 4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat.html) Ensure that footnotes are compatible with assistive technologies such as screen readers, allowing users with disabilities to access and understand the footnote content.
