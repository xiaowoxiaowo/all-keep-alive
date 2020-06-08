<template>
  <div id="page3" :class="$store.state.pageAnimated">
    page3(可复用页面)
    <el-input type="text" v-model="id"></el-input>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      test: ''
    }
  },
  props: {
    id: {
      type: String,
      default: null
    }
  },
  watch: {
    id (newVal) {
      console.log(newVal)
    }
  },
  created () {
    console.log('page3 Created')
  },
  mounted () {
    console.log('page3 Mounted')
  },
  destroyed () {
    console.log('page3 destroyed')
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  #page3{
    padding: 15px;
  }
</style>
