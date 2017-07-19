// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import * as Vue from 'vue'

new Vue({
  el: '#app',
  template: `<div>
    8823
  </div>`,
  mounted()  {
    console.log('mounted!')
  }
})