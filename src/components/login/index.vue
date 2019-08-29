<template>
  <div class="login" ref='logins' :style="loginBgc">
    <div class="main">
      <div class="content">
        <el-form ref="form" :model="form" label-width="54px">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginBgc: {
        background: 'url(' + require('../../static/bgc.png') + ') no-repeat'
      },
      form: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    // this.$refs.logins.style.height = document.documentElement.clientHeight + 'px'
  },
  methods: {
    // 登录
    async onSubmit () {
      let res = await this.$Http.postLogin(this.form, false)
      if (res.errno === 0) {
        this.$router.push({path: '/new'})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.login
  width 100%
  height 100%
  margin 0 auto
  background-size cover
  .main
    height 100%
    width 460px
    background-color rgba(6, 80, 88, 0.5)
    margin-left 56.666%
    .content
      width 80%
      height 60%
      padding-top 70%
      margin 0 auto
</style>
<style lang="stylus">
.login
  .el-form-item__label
    color #ffffff
html
  height 100%
  > body
    height 100%
    > div
      height 100%
</style>
