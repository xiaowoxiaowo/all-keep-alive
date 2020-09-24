<template>
  <div id="page2" :class="$store.state.pageAnimated">
    page2,在下面的输入框输入内容，切换tabs,数据时缓存的
    <el-input type="text" v-model="page2Data"></el-input>
    <br>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'page2',
  data () {
    return {
      page2Data: '',
      id1: { id: 1 },
      id2: { id: 2 },
      id3: { id: 3 },
      count: 0
    }
  },
  activated () {
    console.log('page2 activated')
  },
  created () {
    console.log('page2 created')
  },
  mounted () {
    console.log('page2 Mounted')
  },
  computed: {
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>
<style lang="scss" scoped>
  #page2{
    padding: 15px;
  }
</style>
