import * as Vue from 'vue'
import * as SocketIO from "socket.io-client"

const socket = SocketIO('http://localhost:3000');
socket.on('news', (data) => {
  new Vue({
    el: '#app',
    data: function() {
      return {
        inputData: ''
      }
    },
    mixins: [{
      data: function() {
        return {
          inputData: 'gya-n'
        }
      }
    }],
    template: `<div v-on:click="sendMessage">
      <button>fire</button>
      <input type="text" v-on:change="changeInputData" v-bind:value="inputData"/>
    </div>`,
    methods: {
      sendMessage() {
        const temp = this
        socket.emit('my other event', {
          my: (temp as any).inputData
        })
      },
      changeInputData(event) {
        Vue.set(this, 'inputData', event.target.value)
      }
    }
  })
})

// mixins
// DI
// vueのTypeScript
// vue storybook
// vueのmoduleシステム