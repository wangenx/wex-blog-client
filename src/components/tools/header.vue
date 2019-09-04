<template>
  <div>
    <div>
      <router-link v-for='item in list' v-bind:key='item.id' :to="/login">{{item.name}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      list: [
        {
          name: '首页'
        },
        {
          name: 'WEB'
        },
        {
          name: 'UI'
        }
      ]
    }
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="stylus">

</style>
