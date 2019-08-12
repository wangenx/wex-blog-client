<template>
  <div class="login" ref='logins' :style="loginBgc">
    <div class="main"></div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginBgc: {
        background: 'url(' + require('../../static/bgc.png') + ') no-repeat'
      }
    }
  },
  mounted () {
    this.$refs.logins.style.height = document.documentElement.clientHeight + 'px'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.login
  width 100%
  margin 0 auto
  .main
    height 100%
    width 460px
    background-color #064e55
    opacity 0.5
    margin-left 56.666%
</style>
