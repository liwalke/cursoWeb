const bird = document.querySelector('.bird')
const img = document.querySelector('#img-bird')
bird.style.top = `50%`
let posVert = bird.offsetTop
let step = 15
let actualLayer = 0
console.log(bird)
const elementHeight = img.clientHeight
console.log(img)
console.log(elementHeight)
const posMinima = posVert - elementHeight
const posMaxima = elementHeight
console.log(posMinima)
console.log(posMaxima)

addEventListener('keydown', () => {
    setTimeout(() => {
        posVert = bird.offsetTop
        actualLayer ++
        const ownLayer = actualLayer
        birdJump(bird, posVert, step, ownLayer)
    }, 10)
})

function birdJump(elem, posAct, stp, lyr) {
    console.log(entreExtremos(posAct))

    if ((stp > -50) && (actualLayer === lyr)){
        posAct -= stp
        elem.style.top = `${posAct}px`
        if (stp > -5){
            stp--
        }
        setTimeout(() => birdJump(elem, posAct, stp, lyr), 10);
    }
    else{
        console.log('Fim movimento')
    }
}

function entreExtremos (posActual) {
    if ((posActual > posMinima) && (posActual < posMaxima))
        return true
    else
        return false
}