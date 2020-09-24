<template>
  <div id="page1" :class="$store.state.pageAnimated">
    page1,在下面的输入框输入内容，切换tabs,数据时缓存的
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'page1',
  data () {
    return {
      input: ''
    }
  },
  activated () {
    console.log('page1 activated')
  },
  created () {
    console.log('page1 created')
  },
  mounted () {
    console.log('page1 Mounted')
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  #page1{
    padding: 15px;
  }
  br{
    display: block;
    height: 10px;
  }
</style>
