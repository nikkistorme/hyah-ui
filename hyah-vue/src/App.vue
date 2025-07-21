<script setup lang="ts">
import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar/ProgressBar.vue";
import Carousel from "./components/Carousel/Carousel.vue";
import CarouselItem from "./components/CarouselItem/CarouselItem.vue";
</script>

<template>
  <div>
    <h1>Hyah Testing</h1>
    <h2>Vue</h2>

    <h3>Carousel</h3>
    <Carousel>
      <CarouselItem>
        <div
          style="
            background-color: blue;
            padding: 15px;
            height: 100%;
            width: 100%;
          "
        >
          <p style="margin-top: 0">Item 1</p>
          <img
            src="http://localhost:5173/android-chrome-512x512.png"
            alt="cowboooooy"
            style="width: 75%; height: auto; object-fit: contain"
          />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div
          style="
            background-color: red;
            padding: 15px;
            height: 100%;
            width: 100%;
          "
        >
          <p style="margin-top: 0">Item 2</p>
          <img
            src="http://localhost:5173/android-chrome-512x512.png"
            alt="cowboooooy"
            style="width: 75%; height: auto; object-fit: contain"
          />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div
          style="
            background-color: green;
            padding: 15px;
            height: 100%;
            width: 100%;
          "
        >
          <p style="margin-top: 0">Item 3</p>
          <img
            src="http://localhost:5173/android-chrome-512x512.png"
            alt="cowboooooy"
            style="width: 75%; height: auto; object-fit: contain"
          />
        </div>
      </CarouselItem>
    </Carousel>

    <h3>Progress</h3>
    <ProgressBar />

    <h3>Button</h3>
    <Button>Click me</Button>
  </div>
</template>
