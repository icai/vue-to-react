<template>
  <div class="lorem">
    {{lorem}}
  </div>
</template>
<script>
export default {
  name: 'lorem',
  props: {
      len: {
        type: Number,
        default: 10
      }
  },
  data () {
    return {
      str: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
    }
  },
  computed: {
    lorem () {
      return this.genLorem()
    }
  },
  methods: {
    genLorem () {
      let str = ''
      for (let i = 0; i < this.len; i++) {
        str = str + this.str
      }
      return str
    }
  }
}
</script>