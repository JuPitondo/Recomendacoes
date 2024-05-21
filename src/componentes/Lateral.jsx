import estilos from './Lateral.module.css'
import {Gear, FilmSlate, User} from '@phosphor-icons/react'
import {Link} from 'react-router-dom'

export function Lateral(){
    return(
        <aside className={ estilos.conteiner }>
            <header>
                <img className={ estilos.imagemCabecalho } src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F05%2Fcb%2Ff6%2F05cbf67d48ce9c90b2b4fba828b52d23.jpg&f=1&nofb=1&ipt=77c15022bdf5ea3e19b3132fac22da8ef0aa4607aa1dbb32a92d892876b80961&ipo=images' />

                <div className={ estilos.perfil }>
                    <img className={ estilos.avatar } src='https://avatars.githubusercontent.com/u/160610081?v=4' />
                    <strong>Juliana Pitondo</strong>
                </div>
            </header>
            <section className={ estilos.opcoes }>

                <Link 
                    className={ estilos.botao }
                    to={'/inicial'}
                >
                    <FilmSlate size={20} />
                    <strong>Filmes</strong>
                </Link>

                <Link 
                    className={ estilos.botao }
                    to={'perfil'}
                >
                    <Gear size={20} />
                    <strong>Perfil</strong>
                </Link>

                <Link 
                    className={ estilos.botao }
                    to={'sobre'}
                >
                    <User size={20} />
                    <strong>Sobre</strong>
                </Link>

            </section>
        </aside>
    )
}
