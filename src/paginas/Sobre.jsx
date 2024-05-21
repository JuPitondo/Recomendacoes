import estilos from './Sobre.module.css'

export function Sobre(){

    return(
        <div className={estilos.conteiner}> 

            <img className={estilos.avatar} src='https://avatars.githubusercontent.com/u/160610081?v=4' />
            <p className={estilos.texto}>Juliana Pitondo</p>
            <p className={estilos.texto}>3DS-B</p>

        </div>
    )
}
