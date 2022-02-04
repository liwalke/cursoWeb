// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
    ctx.passo1 = 'mdw 1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.passo2 = 'mdw 2'
    next()
}

const passo3 = (ctx, next) => {
    ctx.passo3 = 'mdw 3'
}

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        //Se middlewares == true, executa próximo passo e assim por diante até executar middlewares[i](ctx, func)
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1)) //O incremento do índice ocorre aqui
    }
    execPasso(0) //Começa a partir do indice 0
}

let ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

ctx = {}
exec(ctx, passo2, passo1, passo3) // Outra sequencia
console.log(ctx)

ctx = {}
exec(ctx, passo3, passo1, passo2) // Não executa após o passo 3 pq é o final da corrente
console.log(ctx)
