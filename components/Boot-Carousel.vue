<template>
  <div class="carouselDiv">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="600"
      img-height="200"
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide caption="Front Office Site" img-blank>
        <p>
          Discover our products and services, come and visit us!
        </p>
      </b-carousel-slide>

      <b-carousel-slide caption="Front Office Site" img-blank>
        <p>
          Become a Vip user and discover the advantages!
        </p>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style src="./Boot-Carousel.css"></style>