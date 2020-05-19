<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>这是测试页面</h2>
    <button type="button" @click="monu">加一</button>
    <router-link to="/">首页</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: 1
    };
  },
  methods: {
    monu() {
      this.msg++;
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
