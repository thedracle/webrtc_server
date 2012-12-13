var app = require('express').createServer();
app.listen(parseInt(process.env.PORT || '8000'));

webrtc = require('webrtc.io').listen(app);
