import estilos from './Login.module.css'
import { useState } from 'react'

export function Login(){

const [usuario, setUsuario] = useState('')
const [senha, setSenha] = useState ('')

function obterDadosFormulario(event){

    event.preventDefault()

    console.log(`Usuario: ${usuario}`)
    console.log(`Senha: ${senha}`)

}

    return(
        <div className={estilos.conteiner}>
            <form className={estilos.formulario}
            onSubmit={obterDadosFormulario}
            >

    <input
      className={estilos.campo}
      placeholder='Usuario'
      value={usuario}
      onChange={ event => setUsuario(event.target.value) }
    />
    
    <input 
      className={estilos.campo}
      placeholder='Senha'
      value={senha}
      onChange={ event => setSenha(event.target.value) }
    />

    <button className={estilos.botao}>
    Entrar</button>

            </form>
        </div>
    )
}