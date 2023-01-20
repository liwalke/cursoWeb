 function funcionarOuNao(valor, chanceErro){
     return new Promise((reject, resolve) => {
         if(Math.random() < chanceErro){
             reject('Ocorreu um erro')
         } else {
            resolve(valor)
         }
     })
 }

 funcionarOuNao('Testando...', 0.1)
    .then(console.log)
    .catch(console.log)