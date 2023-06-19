<script setup>
  import { HButton } from 'hyah-vue';
</script>

# Text Content

## Footnotes

Footnotes are used to provide supportive information to the main text. They are typically used to provide references to sources, or to provide additional information that is not essential to the main text.

1. The link to the footnote should be placed immediately after the text that it is supporting.
1. The link to the footnote should be placed inside an `<a>` element with an `href` attribute that points to the footnote.
1. The footnote should be placed at the end of the document, after the main text.
1. The footnote should be placed inside an `<li>` element with an `id` attribute that matches the `href` attribute of the link to the footnote.
1. The footnote should contain a link back to the text that it is supporting.

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
