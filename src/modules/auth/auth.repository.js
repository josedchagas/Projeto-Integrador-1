import fs from "node:fs/promisses"

export const buscarUsuario = async (arquivo)=>{
    const data = await fs.readFile(arquivo, 'utf-8')
    return JSON.parse(data)
}

export const salvarUsuario = async (arquivo, usuario)=>{
    const dat = await fs.readFile(arquivo, 'utf=8')
    const inv = JSON.parse(dat)
    inv.push(usuario)

    await fs.writeFile(arquivo, JSON.stringify(inv))
}