<template>
  <div class="hya-carousel" ref="carousel" :data-current-slide="currentSlide">
    <ul>
      <slot></slot>
    </ul>
    <ul v-if="arrows && slides.length > 1" class="hya-carousel__arrows">
      <li>
        <button
          type="button"
          class="hya-carousel__btn-prev"
          aria-label="Previous slide"
          @click="prevSlide()"
        >
          &ltri;
        </button>
      </li>
      <li>
        <button
          type="button"
          class="hya-carousel__btn-next"
          aria-label="Next slide"
          @click="nextSlide()"
        >
          &rtri;
        </button>
      </li>
    </ul>
    <ul v-if="navigation && slides.length > 1" class="hya-carousel__nav">
      <li>
        <button type="button" class="hya-carousel__nav-btn-autoplay">
          <span class="hya-sr-only">Begin autoplay</span>
          &#9658;
        </button>
      </li>
      <li v-for="i in slides.length" :key="i">
        <button
          :class="`hya-carousel__nav-btn ${
            i === currentSlide ? 'hya-carousel__nav-btn__active' : ''
          }`"
          type="button"
          :aria-label="`Carousel slide ${i} of ${slides.length}`"
          @click="setSlides(i, true)"
        >
          {{ i }}
        </button>
      </li>
    </ul>
    <div
      class="hya-carousel__live hya-sr-only"
      aria-live="polite"
      aria-atomic="true"
    >
      {{ liveRegionText }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from "vue";

defineProps({
  autoplay: {
    type: Boolean,
    default: false,
  },
  arrows: {
    type: Boolean,
    default: true,
  },
  navigation: {
    type: Boolean,
    default: true,
  },
});

const carousel = ref<HTMLElement | null>(null);
const currentSlide = ref(1);
provide("currentItem", currentSlide.value);
const slides = ref<HTMLElement[]>([]);

onMounted(() => {
  if (!carousel.value) return;
  // Set the slides
  slides.value = Array.from(
    carousel.value.querySelectorAll(".hya-carousel-item")
  );
  // Set the first slide as active
  slides.value[0].classList.add("hya-carousel-item__active");
  // Set the last slide as previous
  slides.value[slides.value.length - 1].classList.add(
    "hya-carousel-item__prev"
  );
  // Set the second slide as next
  slides.value[1].classList.add("hya-carousel-item__next");
});

const liveRegionText = ref("");

// Function to set a slide the current slide
// @param {number} newSlide - The number of the slide to set as current
// @param {boolean} setFocusHere - Whether the focus should be set after the carousel advanced to slide number newIndex
// @param {string} transition - Whether the transition is going into the next or previous direction
const setSlides = (
  newSlide: number,
  setFocusHere: boolean = false,
  transition: "next" | "prev" | "none" = "none"
) => {
  const length = slides.value.length;
  let newPrev = newSlide - 1;
  let newNext = newSlide + 1;

  // If the next slide number is greater than the number of slides,
  // the next slide should be the first one of the slides.
  // If the previous slide number is less than 0.
  // the previous slide is the last of the slides.
  if (newNext > length) newNext = 1;
  else if (newPrev <= 0) newPrev = length;

  // Reset slide classes
  slides.value.forEach((slide) => {
    slide.classList.remove(
      "hya-carousel-item__prev",
      "hya-carousel-item__next",
      "hya-carousel-item__active"
    );
  });

  // Set the new slide classes
  slides.value[newNext - 1].classList.add("hya-carousel-item__next");
  if (transition === "next")
    slides.value[newNext - 1].classList.add("hya-in-transition");
  slides.value[newNext - 1].setAttribute("aria-hidden", "true");

  slides.value[newPrev - 1].classList.add("hya-carousel-item__prev");
  if (transition === "prev")
    slides.value[newPrev - 1].classList.add("hya-in-transition");
  slides.value[newPrev - 1].setAttribute("aria-hidden", "true");

  slides.value[newSlide - 1].classList.add("hya-carousel-item__active");
  slides.value[newSlide - 1].removeAttribute("aria-hidden");

  // Update the global current slide
  currentSlide.value = newSlide;

  // Announce the new slide to screen readers
  liveRegionText.value = `Item ${currentSlide.value} of ${length}`;
};

// Function to advance to the previous slide
const prevSlide = () => {
  if (!carousel.value) return;
  const length = slides.value.length;
  let newSlide = currentSlide.value - 1;

  // If we are already on the first slide, show the last slide instead.
  if (newSlide <= 0) newSlide = length;

  // If we advance to the previous slide, the next needs to be
  // visible to the user, so the third parameter is 'next', not
  // prev.
  setSlides(newSlide, false, "next");
};

// Function to advance to the next slide
const nextSlide = () => {
  if (!carousel.value) return;
  const length = slides.value.length;
  let newSlide = currentSlide.value + 1;

  // If we are already on the last slide, show the first slide instead.
  if (newSlide === length + 1) newSlide = 1;

  // If we advance to the next slide, the previous needs to be
  // visible to the user, so the third parameter is 'prev', not
  // next.
  setSlides(newSlide, false, "prev");
};
</script>

<style>
.hya-carousel * {
  box-sizing: border-box;
}
.hya-carousel {
  position: relative;
  height: 300px;
  width: 300px;
  padding-bottom: var(--hya-carousel-nav-ht);
  border-radius: 10px;
  background-color: #252529;
  overflow: hidden;
}
.hya-carousel ul {
  padding: 0;
  margin: 0;
}
.hya-carousel li {
  list-style-type: none;
}
.hya-carousel__btn-prev,
.hya-carousel__btn-next {
  z-index: 700;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  height: 44px;
  width: 44px;
  padding: 10px 5px;
  border: 0;
  background: rgba(255, 255, 255, 0.6);
  line-height: 1;
  cursor: pointer;
  transition: padding 0.4s ease-out;
}
.hya-carousel__btn-prev {
  left: 0;
  border-radius: 0 0.25em 0.25em 0;
}
.hya-carousel__btn-next {
  right: 0;
  border-radius: 0.25em 0 0 0.25em;
}
.hya-carousel__nav {
  position: absolute;
  height: var(--hya-carousel-nav-ht);
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.hya-carousel__nav-btn {
  min-height: 44px;
  min-width: 44px;
  border: none;
  border-radius: var(--hyah-border-radius);
  background-color: var(--hya-c-primary);
  cursor: pointer;
}
</style>
