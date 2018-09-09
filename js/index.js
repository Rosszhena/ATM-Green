const btnAccount = document.getElementById('cash');
const btnDeposite = document.getElementById('cashContinue');
const sig = document.getElementById('continue');

const database = firebase.database();

const validateInpuntAccount = () => {
    const number = document.getElementById('numCta').value;
    if (number.length < 10 ){
       console.log('Ingresa un numero de cuenta valido' )
    } else {
        firebase.database().ref('clientes').push();
        let client = firebase.database().ref('clientes').push();
        let keyClient = client.getKey();
        firebase.database().ref(`clientes/${keyClient}`).set({
          key: keyClient,
          account: number
        })
          .then(function() {
              console.log('se registro')
          })
          .catch(function(error) {
            console.log(error);
          });
    }
};

// Información pantalla aparece cuenta y esta input para el monto
database.ref('clientes').on('child_added', function(snapshot) {
    const accountPrint = document.getElementById('accountPrint');
    let data = snapshot.val();
    accountPrint.innerHTML = `
    <p>${data.account}</p>
  `;
  });

// Registro de monto del deposito
const validateDeposite = () =>  {
    database.ref('clientes').on('child_added', function(snapshot) {
    let data =snapshot.val()
    const amountDeposit = document.getElementById('depositAmount').value;
    if(!amountDeposit){
       console.log('Ingresa un monto')
    } else {
       let ref = database.ref('clientes').child(`${data.key}`);
       return ref.update({
           amountDeposit: amountDeposit
       });
   }
});
};

// Información pantalla aparece cuenta y monto
database.ref('clientes').on('child_added', function(snapshot) {
    const accountAmountPrint = document.getElementById('accountAmountPrint');
    let data = snapshot.val();
    accountAmountPrint.innerHTML = `
    <p>${data.account}</p>
    <p>${data.amountDeposit}</p>
  `;
  });

  const validatemail = () => {
  let cel = document.getElementById('num').value;

  if ( !(/^[0-9]{10}$/.test(cel))) {

    // Se maqueta error en rojo del input
    console.log('numero invalido');
  } else {
    // El número es correctamente ingresado
      console.log('numero valido');
  }

}



sig.addEventListener('click', validatemail, false);
btnAccount.addEventListener('click', validateInpuntAccount)
btnDeposite.addEventListener('click', validateDeposite)

