<template>
  <div>
    <div class="main">
      <div class="title">关于一篇博客的文章</div>
      <ul class="clearfix">
        <li>CSS</li>
        <li>HTML</li>
        <li>JS</li>
      </ul>
    </div>
  </div>
</template>
<script>
import wangEditor from 'wangeditor'
export default {
  name: 'blogList',
  data () {
    return {
      blogList: []
    }
  },
  mounted () {
    this.getBlogList()
  },
  methods: {
    async getBlogList () {
      let res = await this.$Http.getBlogList()
      if (res.errno === 0) {
        this.blogList = res.data
      }
    }
  }
}
</script>
<style scoped lang="stylus">
.main
  .title
    font-size 16px
    color #333
  ul
    text-align center
    li
      float left  
</style>
