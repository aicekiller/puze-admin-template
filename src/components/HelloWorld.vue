<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button>123</el-button>
    <el-checkbox v-model="checked">备选项</el-checkbox>
  </div>
</template>

<script>
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  import ElCheckbox from '../../node_modules/element-ui/packages/checkbox/src/checkbox'
  export default {
    components: {
      ElCheckbox,
      ElButton
    },
    name: 'HelloWorld',
    data () {
      return {
        msg: 'test',
        checked: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
