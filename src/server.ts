{
  const fs = require('fs');
  const cron = require('node-cron')

  const handler = (req, res) => {
    fs.readFile(__dirname + '/index.html',
    (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }

      res.writeHead(200);
      res.end(data);
    });
  }

  const app = require('http').createServer(handler)
  const io = require('socket.io')(app);

  app.listen(3000);
  io.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' });

    new cron.schedule('0 * * * * *', function() {
      console.log('You will see this message every minute');
      socket.emit('poling', Date.now())
    }, null, true, 'America/Los_Angeles');
  });
}