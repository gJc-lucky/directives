##实现长按，用户需要按下并按住按钮几秒钟，触发相应的事件

<template>
  <button v-longpress="longpress">长按</button>
</template>

<script>
export default {
  methods: {
    longpress () {
      alert('长按指令生效')
    }
  }
}
