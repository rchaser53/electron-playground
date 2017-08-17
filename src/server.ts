{
  const access_key = 'gya-n';
  const currencies = 'EUR,GBP,CAD,PLN,JPY';
  const source = 'USD';
  const format = 1;
  const endPointUrl = `http://apilayer.net/api/live?access_key=${access_key}&currencies=${currencies}&source=${source}&format=${format}`

  const fs = require('fs');
  const cron = require('node-cron')
  const axios = require('axios')

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

      axios.get(endPointUrl)
      .then((ret) => {
        socket.emit('poling', JSON.stringify(ret.data.quotes));
      })
      .catch((err) => {
        console.error(err)
      })
    }, null, true, 'America/Los_Angeles');
  });
}