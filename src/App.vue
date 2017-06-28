<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/home" active-class="visited">Home</router-link>
      <router-link to="/Resume" active-class="visited">Resume</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  text-align: right;
  margin: 15px;
  a {
    text-decoration: none;
    color: #555;
    & + a {
      margin-left: 5px;
    }
    &.visited {
      font-weight: bolder;
      text-decoration: underline;
    }
  }
}
</style>
