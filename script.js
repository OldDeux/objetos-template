const estudante = {
    nome: "victor",
    sobrenome: "melo",
    numeroMatricula: 12345,
    notasSemestres: [8, 10]

}

estudante.modulo = "javaScript"

console.log(estudante.nome)
console.log(estudante.notasSemestres[1]) 
console.log(estudante.modulo)

const copiaEstudante = {
    ...estudante,
    nome: "Astrodev",
    notasSemestres: [...estudante.notasSemestres, 9],
    modulo: "html",

}

console.log(copiaEstudante)

const estudanteLabenu = [estudante, copiaEstudante]

console.log(estudanteLabenu)

const carrinho = {
    nome: "victor",
    forma: "debito",
    endereço: "rua marginal",
    compras: [
        {
        nome: "leite",
        preço: 8.00.toFixed(2),
        quantidade: 2 

        },
        
        {
        nome: "farinha",
        preço: 5.50.toFixed(2),
        quantidade: 1 
        },
    
        {
        nome: "arroz",
        preço: 6.00.toFixed(2),
        quantidade: 3 
        },

    ],
}


console.log(carrinho)

const cartaoPresente = {
    ...carrinho,
    nome: "maria",
    forma: "cartão presente"
}

console.log(cartaoPresente)