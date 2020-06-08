let commonMixin
commonMixin = {
  methods: {
    pushNamePage (name, param) {
      if (param) {
        this.$router.push({ name: name, params: param })
      } else {
        this.$router.push({ name: name })
      }
    },
    pushPage (name, param) {
      if (param) {
        this.$router.push({ path: '/home/' + name, query: param })
      } else {
        this.$router.push({ path: '/home/' + name })
      }
    },
    pushPage3 (id) {
      this.$router.push({ path: `/home/page3/${id}` })
    },
    addTagPage (name, url, text, param) {
      this.pushPage3(param)
      if (this.$store.state.tagList[0] === undefined) {
        let arr = { text: text, url: url, param: param }
        this.$store.state.includePageNames.push(name)
        this.$store.state.tagList.push(arr)
        this.$store.state.tagSelected = (this.$store.state.tagList.length - 1) + ''
      } else {
        for (let [index, cur] of this.$store.state.tagList.entries()) {
          if (cur.text === text) {
            this.$store.state.tagSelected = index + ''
            return
          } else {
            if (index === this.$store.state.tagList.length - 1) {
              let arr = { text: text, url: url, param: param }
              this.$store.state.includePageNames.push(name)
              this.$store.state.tagList.push(arr)
              this.$store.state.tagSelected = (this.$store.state.tagList.length - 1) + ''
            }
          }
        }
      }
    }
  }
}
export default commonMixin
