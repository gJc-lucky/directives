需求： 给整个页面添加背景水印

思路： 使用 canvas 特性生成 base64 格式的图片文件，设置其字体大小，颜色等。
      将其设置为背景图片，从而实现页面或组件水印效果
使用：<template>
        <div v-waterMarker="{text:'lzg版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
      </template>

