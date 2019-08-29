<template>
  <div>
    <div v-for="(item , index) in blogList" v-bind:key="index">
      <span>{{item.title}}</span>
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

</style>
