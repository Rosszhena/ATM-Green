let express = require('express');
let app = express();
const accountSid = 'AC007a6122fe849ef5bcb94e0eb70c3bf5';
const authToken = '3a203c551580b27ba5b224b938f4f1a0';
const client = require('twilio')(accountSid, authToken);

app.get('/', function (req, res) {
  console.log("En la ruta")
  client.messages
      .create({
        body: ' *BBVA BANCOMER, S.A.\n RFC\n\n FECHA         HORA      CAJERO\n 09/09/2018    10     MM5928\n\n  DEPOSITO EN EFECTIVO\n CLIENTE:LABORATORIA CODING ACC\n  UBICADO EN:D.F. COAHUILA\n  FECHA DE APLICACIÓN:9/09/2018\n FOLIO NUMERO: 3508 AUT:364733\n CUENTA/TARJETA DE ABONO**9926\n IMPORTE:        $16.50.00\n EFE.DEPOSITADO          $1,700.00\n CAMBIO ENTREGADO     $50.00\n MOTIVO DE PAGO: PAGO FEED\n\n  CUALQUIER ACLARACION ACUDE A TU\n SUCURSAL O LLAMAA LA LINEA BANCOMER AL\n        01 800 226 26 63 ',
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
