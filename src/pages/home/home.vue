<template>
  <div id="home">
    <header></header>
    <div class="content">
      <div class="leftBox">
        <div @click="addTagPage('page1','page1','测试页面1')">测试页面1</div>
        <div @click="addTagPage('page2','page2','测试页面2')">测试页面2</div>
        <div @click="addTagPage('page22','page22','路由不同，组件相同')">测试页面22</div>
        <div @click="addTagPage('page3','page3','复用页面-1','1')">复用页面，参数1</div>
        <div @click="addTagPage('page3','page3','复用页面-2','2')">复用页面，参数2</div>
        <div @click="addTagPage('page3','page3','复用页面-3','3')">复用页面，参数3</div>
      </div>
      <div class="rightBox">
        <div class="tagBox">
          <el-tabs v-model="$store.state.tagSelected" type="card" closable @tab-remove="closeTag" @tab-click="clickTag">
            <el-tab-pane
              v-for="(item, index) in tagList"
              :key="index"
              :label="item.text"
              :name="index + ''"
            >
            </el-tab-pane>
          </el-tabs>
        </div>
        <div id="routerBox">
          <all-keep-alive :include="includePageNames">
            <router-view :key="$route.fullPath" />
          </all-keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import { allKeepAlive } from '@/config/all-keep-alive'
export default {
  name: 'home',
  components: { allKeepAlive },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {

  },
  computed: {
    ...mapState(['includePageNames', 'tagList', 'tagSelected'])
  },
  methods: {
    clickTag (val) {
      let num = val._props.name
      let nowNum = parseInt(this.$store.state.tagSelected)
      //点击tag切换页面
      if (num !== nowNum) {
        this.$store.state.tagSelected = nowNum + ''
        this.pushPage3(this.$store.state.tagList[num].url, this.$store.state.tagList[num].param)
      }
    },
    closeTag (val) {
      let num = parseInt(val)
      let nowNum = parseInt(this.$store.state.tagSelected)
      //关闭tag
      if (num === nowNum) {
        //当关闭页面是当前页
        if (num === this.$store.state.tagList.length - 1) {
          //当关闭页面是最右侧页面
          if (this.$store.state.tagList.length === 1) {
            //当关闭页面是存在的唯一一个页面
            console.log('无法关闭最后一个页面')
            /*this.$store.state.tagList = []
             this.$store.state.includePageNames = []
             this.$store.state.tagSelected = 0*/
          } else {
            this.$store.state.tagList.splice(num, 1)
            this.$store.state.includePageNames.splice(num, 1)
            this.$store.state.tagSelected = (num - 1) + ''
            this.pushPage3(this.$store.state.tagList[num - 1].url, this.$store.state.tagList[num - 1].param)
          }
        } else {
          //当关闭页面是非唯一的页面
          this.$store.state.tagList.splice(num, 1)
          this.$store.state.includePageNames.splice(num, 1)
          this.pushPage3(this.$store.state.tagList[num].url, this.$store.state.tagList[num].param)
        }
      } else {
        //当关闭页面不是当前页
        this.$store.state.tagList.splice(num, 1)
        this.$store.state.includePageNames.splice(num, 1)
        if (num < nowNum) {
          nowNum--
          this.$store.state.tagSelected = nowNum + ''
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  #home{
    &>header{
      height: 80px;
      border-bottom: 1px solid #E4E7ED;
      position: relative;
      z-index: 99999;
      background: white;
    }
    &>.content{
      height: calc(100vh - 81px);
      .leftBox{
        position: relative;
        z-index: 99999;
        background: white;
        float: left;
        width: 150px;
        height: 100%;
        border-right: 1px solid #E4E7ED;
        div{
          line-height: 35px;
          text-align: center;
          cursor: pointer;
          &:hover{
            background: #ccc;
          }
        }
      }
      .rightBox{
        float: left;
        width: calc(100% - 151px);
        height: 100%;
        .tagBox{
          position: relative;
          z-index: 99999;
          background: white;
          height: 40px;
          .tag{
            position: relative;
            display: inline-block;
            height: 40px;
            text-align: center;
            line-height: 40px;
            padding: 0px 20px 0px 10px;
            border-right: 1px solid #E4E7ED;
            cursor: pointer;
            &:hover,&.active{
              background: #ccc;
              color: white;
            }
            span{
              position: absolute;
              right: 5px;
              top:10px;
              height: 20px;
              line-height: 20px;
              cursor: pointer;
              font-size: 12px;
            }
          }
        }
        #routerBox{
          height: calc(100% - 40px);
          overflow-x: hidden;
          overflow-y: auto;
        }
      }
    }
  }
</style>
