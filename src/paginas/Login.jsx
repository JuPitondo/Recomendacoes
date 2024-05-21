import estilos from './Login.module.css'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export function Login(){

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()


    function obterDadosFormulario(e){

        e.preventDefault()

        console.log(`Usuário: ${usuario}`)
        console.log(`Senha: ${senha}`)

        navigate('inicial')

    }

    return(
        <div className={estilos.conteiner}> 

            <form 
                className={estilos.formulario}
                onSubmit={obterDadosFormulario}
            > 

                <input 
                    className={estilos.campo}
                    placeholder='Usuário' 
                    value={usuario}
                    onChange={ e => setUsuario(e.target.value) }
                />

                <input 
                    className={estilos.campo}
                    placeholder='Senha' 
                    value={senha}
                    onChange={ e => setSenha(e.target.value) }
                />

                <button
                    className={estilos.botao}
                    type='submit'
                >Entrar</button>

            </form>
        </div>
    )
}
