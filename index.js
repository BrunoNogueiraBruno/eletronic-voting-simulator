const { listar_chapas, votar } = require('./functions/readData')
const { prompt, rl } = require('./functions/userInput')
const chapas = require('./data/chapas.json')

let votacao = {}
let votantes = 0

const TOTAL_VOTANTES = 6

const options = {
    1: () => {
        listar_chapas()
        comecar()
    },
    2: async () => {
        const voto = await votar()
        votantes += 1

        if (votacao[voto]) {
            votacao[voto].votos += 1
        } else {
            votacao[voto] = { numero: voto, votos: 1 }
        }

        comecar()
    },
}

const resultado = () => {
    const candidatos = Object.values(votacao).sort((a, b) => a.votos > b.votos)
    const eleito = candidatos[0]

    const { representante, vice_representante } = chapas.find(({ numero }) => `${numero}` === eleito.numero)

    const mensagem = `
    O candidato eleito para representante da turma, com ${eleito.votos} ${eleito.votos === 1 ? 'voto' : 'votos'}
    é ${representante}, e seu vice ${vice_representante}!
    `

    candidatos.forEach(({ votos, numero: candidato_numero }, index) => {
        if (index === 0) {
            console.log(mensagem)
        } else {
            const { representante } = chapas.find(({ numero }) => `${numero}` === candidato_numero)

            console.log(`- O candidato ${representante} recebeu ${votos} ${votos === 1 ? 'voto' : 'votos'}, ficando em ${index + 1}º lugar`)
        }
    })

    rl.close()
}

const bem_vindo = async () => {
    const mensagem = `
    Bem vindo ao sistema de votação eletrônico
    Insira um dos dígitos correspondentes a opção desejada para prosseguir:

    - [1] consultar chapas
    - [2] votar 
    `

    const opcao = await prompt(mensagem)
    if (options[opcao]) options[opcao]()
}

const comecar = () => {
    const votacao_concluida = {
        [false]: bem_vindo,
        [true]: resultado
    }

    const teste_votacao = votantes >= TOTAL_VOTANTES
    votacao_concluida[teste_votacao]()
}

comecar()