<template>
  <div class="hello">
    <h3>{{ userInfo.name }}</h3>
  </div>
</template>

<script>
import { store, mutations } from '@/libs/store'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    haha: String
  },
  computed: {
    userInfo () {
      return store.userInfo
    }
  },
  created () {
    this.arrJion()
    mutations.setUserInfo({
      name: '测试observable(小vuex)'
    })
  },
  methods: {
    arrJion () {
      const arr = [1, 2, 3, 4]
      // eslint-disable-next-line no-eval
      console.log(eval(arr.join('+')))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
