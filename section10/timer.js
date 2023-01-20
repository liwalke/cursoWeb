const schedule = require('node-schedule')

/**
 * O formato da String é 'segundo minuto hora diaDoMês mês diaDaSemana'
 * No exemplo abaixo, será executado a cada 5seg sempre que for as 21h de uma terça-feira
 *  */
const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 2', function(){
    console.log('Executando a tarefa 1!', new Date().getSeconds()) //Dentro dessa função ocorre a tarefa em si.
})

//setTimeout - executa a função após contar o tempo em mseg
setTimeout(function (){
    tarefa1.cancel()
    console.log('Tarefa 1 cancelada!')
}, 20000)

//Criando uma regra para o temporizador
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 21
regra.second = 15

// A tarefa será executada todo segundo 15, as 21h de segunda a quinta-feira
const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando a tarefa 2!', new Date().getSeconds())
})

// Os outros temporizadores do node são:
// setImmediate()
// setInterval()