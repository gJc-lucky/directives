/* eslint-disable vue/no-parsing-error */
<template>
  <div id="app" v-waterMarker="{text:'弓俊超',textColor:'rgba(180, 180, 180, 0.4)'}">
    <HelloWorld msg="Hello World"/>
    <div class="m-t">
      <span>点击复制：</span>
      <button v-copy="copyText">复制</button>
    </div>
    <div class="m-t">
      <span>长按触发：</span>
      <button v-longpress="longpress">长按</button>
    </div>
    <div class="m-t">
      <span>点击防抖：</span>
      <button v-debounce="debounceClick">防抖</button>
    </div>
    <div class="m-t">
      <span>禁止输入表情和特殊字符：</span>
      <input type="text" v-model="note" v-emoji />
    </div>
    <div class="m-t">
      <span>权限：</span>
      <div class="btns">
        <!-- 显示 -->
        <button v-permission="'1'">权限按钮1</button>
        <!-- 不显示 -->
        <button v-permission="'10'">权限按钮2</button>
      </div>
    </div>
    <div class="m-t">
      <span>水印：</span>
      <div v-waterMarker="{text:'lzg版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
    </div>
    <div class="m-t">
      <span>拖拽：</span>
      <div class="draggable" v-draggable></div>
    </div>
    <div class="m-t">
      <span>图片懒加载：</span>
          <img v-for="item in images" :key="item" style="width:100px" v-LazyLoad="item">
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
      return {
        copyText: 'a copy directives',
        note:'',
        images:[require('./assets/img1.jpg'),require('./assets/img2.jpg')]
      }
    },
    methods: {
    longpress () {
      alert('长按指令生效')
    },
    debounceClick () {
      console.log('只触发一次')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 900px;
}
.m-t{
  margin-top: 10px;
}
.draggable{
 position: fixed;
    z-index: 99;
    right: 10px;
    bottom: 85px;
    width: 40px;
    height: 40px;
    box-shadow: 0 2px 4px #ddd;
    border-radius: 50%;
    color: #fff;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1989fa;
}
</style>
