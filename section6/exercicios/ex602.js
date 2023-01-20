const classTriangulo = (a = 0, b = 0, c = 0) => {
    if (a && b && c){
        if (a === b && b === c)
            return 'Equilátero'
        else if (a === b || b === c || a === c)
            return 'Isósceles'
        else
            return 'Escaleno'
    }
    else return 'Não é triângulo'

}
console.log(classTriangulo(10, 5))
console.log(classTriangulo(10, 10, 10))
console.log(classTriangulo(10, 10, 5))
console.log(classTriangulo(10, 5, 10))
console.log(classTriangulo(5, 10, 10))
console.log(classTriangulo(5, 10, 15))