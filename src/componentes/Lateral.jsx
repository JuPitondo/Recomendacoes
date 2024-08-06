import estilos from './Lateral.module.css'
import {Gear, FilmSlate, User, ChatCircleDots} from '@phosphor-icons/react'
import {Link} from 'react-router-dom'

import foto from '../assets/usuario.jpg'

export function Lateral(){
    return(
        <aside className={ estilos.conteiner }>
            <header>
                <img className={ estilos.imagemCabecalho } src='https://i.pinimg.com/564x/d1/f9/2a/d1f92aff1ab609ac9c2bc7329085fcbd.jpg' />

                <div className={ estilos.perfil }>
                    <img className={ estilos.avatar } src={`https://i.pinimg.com/564x/c0/0f/f9/c00ff948a52b2001c518474688bd116c.jpg`} />
                    <strong>Usuário</strong>
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

                <Link 
                    className={ estilos.botao }
                    to={'fale'}
                >
                    <ChatCircleDots size={20} />
                    <strong>Fale Conosco</strong>
                </Link>



            </section>
        </aside>
    )
}
