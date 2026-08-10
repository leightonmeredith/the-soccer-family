const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8082});

//connection happens on every tab
wss.on('connection', ws => {
  console.log('New client connected')

  ws.on('message', data => {
        console.log(`client has sent us ${data}`);
        ws.send(data.toString().toUpperCase())
      })

  ws.on('close', () => {
    console.log('Client has disconnected');
  })
});
