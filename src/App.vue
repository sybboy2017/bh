<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: Microsoft YaHei,Tahoma,Verdana;
  font-size: 12px;
  line-height: 18px;
  color: #333;
  outline: none;
  background: #f2f2f2;
}
body, button, select, textarea, input, label, option, fieldset, legend{font-family: Microsoft YaHei,Tahoma,Verdana;font-size: 12px;line-height: 18px;color: #333;outline: none;}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, legend, input, textarea, button, p, blockquote, th, td{margin: 0;padding: 0;}
html,html body{height: 100%;color:#333333}
textarea{resize: none};
input::-ms-clear{display:none;}
.clear{height:1px;overflow:hidden;clear:both;}
a,img{border:0;}
a{color: #666;text-decoration: none;&:hover{color:#0053a6;};}
li{list-style-type:none;}
i{font-style: normal;}
.fl{float:left;}
.fr{float:right;}
.nf{clear:both;}
.red{color:red;font-weight:bold;}
.green{color:#00b500;font-weight:bold;}
.ds{display:block;}
.hid{overflow:hidden;}
.clearfix{*zoom:1}
.clearfix:after{display:block;visibility:hidden;clear:both;height:0;content:'.';font-size:0}
.jianbian{background: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#f4f4f4),color-stop(100%,#eee));background: -webkit-linear-gradient(top,#f4f4f4 0,#eee 100%);background: linear-gradient(to bottom,#f4f4f4 0,#eee 100%);}
.bottomshadow{border-bottom: solid 1px #B3B3B3;-webkit-box-shadow: 0 1px 1px 0 #DFDFDF;box-shadow: 0 1px 1px 0 #DFDFDF;}
.disBox{display:box;display:-webkit-box;display:-ms-box;display:-moz-box;}
.box-sizing{-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;}
.box-flex{box-flex:1;-webkit-box-flex:1;-moz-box-flex:1;-ms-box-flex:1;}
em{font-style:normal;}
</style>
