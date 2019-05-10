<template>
  <div id="app">
    <a
      class="github-fork-ribbon"
      href="https://github.com/lyrieek/lyrieek.github.io"
      title="GitHub"
    ></a>
    <el-menu id="nav-menu" mode="horizontal" @select="select" router>
      <li class="el-menu-item" style="margin-right: 10%;border-bottom-color: transparent;">
        <router-link to="/index" class="el-icon-star-on" style="text-decoration: none;"/>
      </li>
      <el-menu-item index="kendo">指南</el-menu-item>
      <el-menu-item index="standard">标准</el-menu-item>
      <el-menu-item index="api">API</el-menu-item>
      <el-submenu index="_">
        <template slot="title">产品</template>
        <el-menu-item index="docTool">文档生成引擎</el-menu-item>
        <el-menu-item index="plugin">部署插件</el-menu-item>
      </el-submenu>
      <li class="el-menu-item">
        <el-input v-model="input" placeholder="在文档中搜索"></el-input>
      </li>
      <el-menu-item index="message" disabled>消息</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <hr>
    <div>
      <el-row :gutter="20" style="margin:20px">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>Kendo</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看</el-button>
              </div>
              <div>快速构建引人注目、高性能、响应迅速的Web应用程序,支持jquery/angular/react/vue库</div>
			  <hr />
              <div>The ultimate collection of JavaScript UI components with libraries for jQuery, Angular, React, and Vue. Quickly build eye-catching, high-performance, responsive web applications—regardless of your JavaScript framework choice.</div>
              <!-- <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div> -->
            </el-card>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  render(h) {
    // throw new Error('oops')
  },
  methods: {
    select: (key, keyPath) => {
      console.log(key + ":" + keyPath);
    }
  },
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 14px;
}

h2 {
  font-size: 18px;
}

html {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}

#nav-menu {
  padding: 0px 12.5%;
}
</style>
