(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"n++K":function(e,t,n){"use strict";n.r(t);var o={mounted(e){this.load()},data:()=>({kendoCompetents:[]}),methods:{load(){document.getElementById("kendoContainer").style.height=document.body.offsetHeight-document.getElementById("nav-menu").offsetHeight+"px",fetch("/data/kendo/ui.competent.json").then(e=>e.json()).then(e=>{this.kendoCompetents=e})},test(){console.log(123),this.$router.push("/kendo/Alert")}}},i=n("F8we"),l=Object(i.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-container",{staticStyle:{height:"700px",border:"1px solid #eee"},attrs:{id:"kendoContainer"}},[n("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[n("vue-scroll",[n("el-menu",{attrs:{"default-openeds":["2"],router:""}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-message"}),e._v("UI组件")]),e._v(" "),n("el-menu-item-group",{attrs:{id:"kendo-ui-competent-wrapper"}},[e._l(e.kendoCompetents,function(t){return[n("el-menu-item",{key:t.text,attrs:{index:t.href}},[e._v(e._s(t.text))])]})],2)],2),e._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),e._v("函数")]),e._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/kendo/guid"}},[e._v("guid")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")])],1)],2),e._v(" "),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),e._v("Globalization")]),e._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/kendo/numberformatting"}},[e._v("Number Formatting")])],1)],2)],1)],1)],1),e._v(" "),n("el-container",[n("el-header",{staticStyle:{"text-align":"left","font-size":"12px"}},[n("el-button",{attrs:{type:"text",icon:"el-icon-refresh"},on:{click:e.load}}),e._v(" "),n("el-dropdown",[n("i",{staticClass:"el-icon-setting"}),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{on:{click:e.test}},[e._v("查看")]),e._v(" "),n("el-dropdown-item",[e._v("新增")]),e._v(" "),n("el-dropdown-item",[e._v("删除")])],1)],1)],1),e._v(" "),n("el-main",[n("h1",[e._v("Kendo")]),e._v(" "),n("h3",{on:{click:e.test}},[e._v("Build Better JavaScript Apps Faster")]),e._v(" "),n("pre",[e._v("The ultimate collection of JavaScript UI components with libraries for jQuery, Angular, React, and Vue. Quickly build eye-catching, high-performance, responsive web applications—regardless of your JavaScript framework choice.\n    ")]),e._v(" "),n("router-view")],1)],1)],1)],1)},[],!1,null,null,null);t.default=l.exports}}]);