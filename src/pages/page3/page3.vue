<template>
  <div id="page3" :class="$store.state.pageAnimated">
    page3(可复用页面)
    <el-input type="text" v-model="test"></el-input>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      test: '',
      dataList: []
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
      //console.log(newVal)
    }
  },
  activated () {
    console.log('page3 activated')
  },
  created () {
    console.log(this.$route)
    console.log('page3 created')
  },
  mounted () {
    console.log('page3 Mounted')
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
