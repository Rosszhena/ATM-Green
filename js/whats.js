let express = require('express');
let app = express();
const accountSid = 'AC007a6122fe849ef5bcb94e0eb70c3bf5';
const authToken = '3a203c551580b27ba5b224b938f4f1a0';
const client = require('twilio')(accountSid, authToken);

app.get('/', function (req, res) {
  console.log("En la ruta")
  client.messages
      .create({
        body: 'Hola Mundo',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+5215559650719'
       })
      .then(message => console.log(message.sid)).
      done()
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log("Server runing on port 3000")

});
// +14155238886
