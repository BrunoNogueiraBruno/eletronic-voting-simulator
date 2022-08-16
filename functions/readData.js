const { __esModule } = require('react-scrollama')
const chapas = require('../data/chapas.json')
const { prompt } = require('./userInput')

const display_chapa = ({ nome_da_chapa, representante, vice_representante, numero }) => console.log(`
    Chapa ${nome_da_chapa},
    candidato a representante: ${representante},
    candidato a vice-representante: ${vice_representante},
    número da candidatura: ${numero},
`)

const listar_chapas = () => {
    return chapas.map((chapa) => display_chapa(chapa))
}

const votar = async () => {
    const mensagem_voto = 'Insira o número de candidatura da chapa em que pretende votar '
    const voto = await prompt(mensagem_voto)

    const candidatura = chapas.find(({ numero }) => `${numero}` === voto)

    try {
        display_chapa(candidatura)
        const mensagem_confirmacao = `
        Confirmar voto?

        - [s] sim
        - [n] não 
        `

        const confirmacao = await prompt(mensagem_confirmacao)
        if (confirmacao !== 's') throw Error()

        return voto

    } catch (_err) {
        votar()
    }
}

module.exports = {
    listar_chapas,
    votar
}
