<template>
<div id="app">
  <a class="github-fork-ribbon" href="https://github.com/lyrieek/lyrieek.github.io" title="GitHub"></a>
  <div class="header-container">
    <h1 style="text-shadow: 5px 5px #1177aa;">快速,全面,丰富的帮助文档</h1>
    <p>帮助文档</p>
  </div>

  <div>
    <kendo></kendo>
    <!-- <router-view></router-view> -->
  </div>
</div>
</template>

<script>
import kendo from './views/kendo'

export default {
  data() {
    return {}
  },
  components: { kendo }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}

h1 {
  font-size: 4.7em;
}

.header-container {
  margin-top: 100px;
  padding: 20px;
  padding-left: 20%;
  background-color: #4ebdef;
}

.header-container * {
  color: #fff;
}
</style>
