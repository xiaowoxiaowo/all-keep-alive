import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      id1: { id: 1 },
      id2: { id: 2 },
      id3: { id: 3 }
    }
  },
  created () {
    /*this.$http.get('/hello/world1', '', success => {
      console.log(success)
    })*/
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
        //this.$store.state.tagSelected = nowNum + ''
        //this.pushPage(this.$store.state.tagList[num].url, this.$store.state.tagList[num].param)
        this.pushPage3(this.$store.state.tagList[num].param)
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
            this.pushPage(this.$store.state.tagList[num - 1].url, this.$store.state.tagList[num - 1].param)
          }
        } else {
          //当关闭页面是非唯一的页面
          this.$store.state.tagList.splice(num, 1)
          this.$store.state.includePageNames.splice(num, 1)
          this.pushPage(this.$store.state.tagList[num].url, this.$store.state.tagList[num].param)
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
