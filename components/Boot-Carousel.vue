<template>
  <div class="carouselDiv">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="1920"
      img-height="1080"
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide caption="Front Office Site" img-src="https://images.pexels.com/photos/6640383/pexels-photo-6640383.jpeg?auto=compress&cs=tinysrgb&w=600">
        <p>
          Discover our products and services, come and visit us!
        </p>
      </b-carousel-slide>

      <b-carousel-slide caption="Front Office Site" img-src="https://images.pexels.com/photos/11169668/pexels-photo-11169668.jpeg?auto=compress&cs=tinysrgb&w=600">
        <p>
          Become a Vip user and discover the advantages!
        </p>
      </b-carousel-slide>

      <b-carousel-slide caption="Front Office Site" img-src="https://images.pexels.com/photos/12505898/pexels-photo-12505898.jpeg?auto=compress&cs=tinysrgb&w=600">
        <p>
          Try our Dog Sitter service!
        </p>
      </b-carousel-slide>

      <b-carousel-slide caption="Front Office Site" img-src="https://images.pexels.com/photos/3699268/pexels-photo-3699268.jpeg?auto=compress&cs=tinysrgb&w=600">
        <p>
          Try our Veterinarian service!
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