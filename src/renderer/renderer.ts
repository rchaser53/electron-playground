import * as Vue from 'vue'
import * as SocketIO from "socket.io-client"

new Vue({
  el: '#app',
  template: `<div>
    8823
  </div>`,
  mounted()  {
    console.log('mounted!')
  }
})

 var socket = SocketIO('http://localhost:3000');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });