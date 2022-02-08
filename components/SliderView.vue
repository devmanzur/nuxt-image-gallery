<template>
  <div>
          <b-carousel id="carousel-no-animation" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators>
            <template v-for="(photo, index) in photos" >
              <b-carousel-slide
              :key="index"
              :img-src="photo.src.landscape"
              style="height:100vh"
              ></b-carousel-slide>
            </template>
          </b-carousel>
        </div>
</template>

<script>
export default {
    props:{
        photos:{
            type: Array,
            required: true,
        }
    },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    next() {
      const total = this.images.length-1;
      if(this.currentIndex < total){
      this.currentIndex += 1;
      }
    },
    prev() {
      if(this.currentIndex > 0){
      this.currentIndex -= 1;
      }
    }
  },
}
</script>
