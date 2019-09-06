<template>
  <div>
    <div class="nav">
      <router-link v-for='item in list' v-bind:key='item.id' :to='item.path'>{{item.name}}</router-link>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>
<script>
export default {
  name: 'indexMain',
  data () {
    return {
      list: [
        {
          name: '首页',
          path: '/index'
        },
        {
          name: '分类',
          path: '/new'
        },
        {
          name: '标签',
          path: '/tabs'
        }
      ]
    }
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="stylus">
.nav
  height 60px
  font-size 16px
  line-height 60px
  a
    color #333
    margin 0 20px
    line-height 59px
    display inline-block
    border-bottom 0px solid #dddddd
    transition border-bottom .2s , color .5s
  .router-link-active
    color #000
    font-weight bold
    border-bottom 1px solid #dddddd
.content
  width 1200px
  margin 30px auto 0
</style>
