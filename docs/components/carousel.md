# Carousel

Put some spotlight on the slide.

## Overview

The Carousel is a slideshow for cycling through a series of content. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.

## Usage

## Accessibility

### Behavior

- The Carousel's automatic sliding can be paused because it can be too fast or distracting to some users. See [WCAG 2.1 Guideline 2.2.2](https://www.w3.org/WAI/WCAG21/quickref/#qr-time-limits-pause).

### Screen Reader Support

- The Carousel's "next" and "previous" buttons have `aria-label="Next slide"` and `aria-label="Previous slide"` respectively. Because the buttons do not have text content, the `aria-label` attribute is necessary to provide a label for screen reader users. See [WCAG 2.1 Guideline 4.1.2](https://www.w3.org/WAI/WCAG21/quickref/#name-role-value).
- A visually hidden WAI-ARIA live region is present to inform screen reader users what slide is currently shown. See [WCAG 2.1 Guideline 4.1.3](https://www.w3.org/WAI/WCAG21/quickref/#status-messages).
  - `aria-live="polite"` is used so that the screen reader will wait to announce changes to the live region until the user has paused interacting with the page, so as not to interrupt the user.
  - `aria-atomic="true"` is used so that the screen reader will announce the entire contents of the live region when it changes, rather than just the changed portion.

### Keyboard Interaction

The Carousel's controls are fully keyboard accessible. See [WCAG 2.1 Guideline 2.1.1](https://www.w3.org/WAI/WCAG21/quickref/#qr-keyboard-operation-keyboard-operable).

| Key                                       | Function                                     |
| ----------------------------------------- | -------------------------------------------- |
| <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd> | Moves focus to the next or previous control. |
| <kbd>Space</kbd> and <kbd>Enter</kbd>     | Activates the focused control.               |
