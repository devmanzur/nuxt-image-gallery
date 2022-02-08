<template>
  <div>
    <slider-view :photos="images"></slider-view>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
    }
  },
  computed: {
    images() {
      return this.$store.state.images.images;
    },
  },
  created() {
    this.$store.dispatch('images/getImages');
  },
  methods: {
    
  },
}
</script>
