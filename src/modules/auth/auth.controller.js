import service from 'auth.service.js'
import fs from 'node:fs/promises'

export const exibirPaginaCadastro = async (request, response) => {
    const html = await fs.readFile('./index.html', 'utf-8')
    
}

export const processarCadastro = async (request, response) => {
    
}