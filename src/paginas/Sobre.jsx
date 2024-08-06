import estilos from './Sobre.module.css'

import foto from '../assets/usuario.jpg'

export function Sobre(){

    return(
        <div className={estilos.conteiner}> 

            <img className={estilos.avatar} src={`https://avatars.githubusercontent.com/u/160610081?v=4`} />
            <p className={estilos.texto}>Juliana Pitondo dos Reis </p>
            <p className={estilos.texto}>3DS-B</p>

        </div>
    )
}
