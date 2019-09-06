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
    <div class="choujiang">
      <ul :style="containerStyle(disOne.distance)">
        <li :style='item.cqBgc' v-for="item in arr" v-bind:key='item.index'></li>
      </ul>
      <ul :style="containerStyle(disTwo.distance)">
        <li :style='item.cqBgc' v-for="item in arr" v-bind:key='item.index'></li>
      </ul>
      <ul :style="containerStyle(disThree.distance)">
        <li :style='item.cqBgc' v-for="item in arr" v-bind:key='item.index'></li>
      </ul>
    </div>
    <div class="bot" @click="move()">开始</div>
  </div>
</template>
<script>
import wangEditor from 'wangeditor'
export default {
  name: 'blogList',
  data () {
    return {
      blogList: [],
      cqBgc: {
        background: 'url(' + require('../../static/timg.jpg') + ') no-repeat 100%'
      },
      arr: [
        {
          id: 1,
          cqBgc: {
            background: 'url(' + require('../../static/timg.jpg') + ') no-repeat 100%'
          }
        },
        {
          id: 2,
          cqBgc: {
            background: 'url(' + require('../../static/timp1.jpg') + ') no-repeat 100%'
          }
        },
        {
          id: 3,
          cqBgc: {
            background: 'url(' + require('../../static/timp2.jpg') + ') no-repeat 100%'
          }
        },
        {
          id: 4,
          cqBgc: {
            background: 'url(' + require('../../static/timp3.jpg') + ') no-repeat 100%'
          }
        },
        {
          id: 1,
          cqBgc: {
            background: 'url(' + require('../../static/timg.jpg') + ') no-repeat 100%'
          }
        }
      ],
      disOne: {
        distance: 0,
        num: 0,
        index: -1,
        timer: null
      },
      disTwo: {
        distance: 0,
        num: 0,
        index: -1,
        timer: null
      },
      disThree: {
        distance: 0,
        num: 0,
        index: -1,
        timer: null
      }
    }
  },
  mounted () {
    // this.getBlogList()
  },
  computed: {
  },
  methods: {
    containerStyle (distance) {
      return {
        transform: `translate3d(0, ${distance}px, 0)`
      }
    },
    async getBlogList () {
      let res = await this.$Http.getBlogList()
      if (res.errno === 0) {
        // this.blogList = res.data
        window.setTimeout(() => {
          this.disOne.index = parseInt((Math.random() * 4) + 1)
          this.disTwo.index = parseInt((Math.random() * 4) + 1)
          this.disThree.index = parseInt((Math.random() * 4) + 1)
        }, 8000)
      }
    },
    animate (des) {
      des.timer = window.setInterval(() => {
        if (des.index >= 0) {
          if (-des.index === Math.round(des.distance / 100)) {
            des.distance = -(des.index - 1) * (100)
            des.index = -1
            des.num = 0
            window.clearInterval(des.timer)
          } else {
            if (des.distance < -((this.arr.length - 1) * 100)) {
              des.distance = -(-des.distance - (this.arr.length - 1) * 100)
            } else {
              if (des.num > 0) des.num = des.num - 0.04
              des.distance += (-des.num)
            }
          }
        } else if (des.distance < -((this.arr.length - 1) * 100)) {
          des.distance = -(-des.distance - (this.arr.length - 1) * 100)
        } else {
          if (des.num < 8) des.num = des.num + 0.02
          des.distance += (-des.num)
        }
      }, 10)
    },
    move () {
      this.getBlogList()
      this.animate(this.disOne)
      window.setTimeout(() => {
        this.animate(this.disTwo)
      }, 500)
      window.setTimeout(() => {
        this.animate(this.disThree)
      }, 1000)
    }
  },
  watch: {}
}
</script>
<style scoped lang="stylus">
.main
  display none
  .title
    font-size 16px
    color #333
  ul
    text-align center
    li
      float left
.choujiang
  height 100px
  width 620px
  margin 0 auto
  overflow hidden
  position relative
  ul
    width 200px
    height 100px
    background-color #ccc
    position absolute
    left 0
    top 0
    transition top .5s
    li
      width 100%
      height 100%
  ul:nth-child(2)
    left 210px
  ul:last-child
    left 420px
.bot
  width 90px
  height 40px
  line-height 40px
  color #333
  cursor pointer
  margin 20px auto 0
  background-color #ddefff
</style>
