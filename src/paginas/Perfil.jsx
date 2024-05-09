import estilos from './Perfil.module.css'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'


const perfilSchema = z.object({

nome: z.string()
.min(1, 'Informe um nome')
.max(25, 'Maximo 25 caracteres'),

email: z.string()
.email({message: 'Informe um e-mail válido'}),

usuario: z.string()
.min(5, 'Minimo de 5 caracteres')
.max(25, 'Maximo 25 caracteres'),

senha: z.string()
.min(8, 'Informe 8 caracteres')
.max(8, 'Informe 8 caracteres'),


})



export function Perfil(){
 const {register, 
  handleSubmit,
  formState:{errors}
} = useForm({
  resolver: zodResolver(perfilSchema)
 })


 function obterDadosFormulario(data){
  console.log(data)

}


return(

<div className={estilos.conteiner}>

    <p className={estilos.titulo}>Perfil</p>

    <form onSubmit={handleSubmit(obterDadosFormulario)}
    className={estilos.formulario}
     

    >

     <input
      {...register('nome')}
      className={estilos.campo}
      placeholder='Nome'
     />
     {error.nome && (
      <p className={estilos.mensagem}>{error.nome.message}</p>
     )}
    

    <input
      {...register('email')}
      className={estilos.campo}
      placeholder='Email'
     />
     {error.email && (
      <p className={estilos.mensagem}>{error.email.message}</p>
     )}



    <input
      {...register('usuario')}
      className={estilos.campo}
      placeholder='Usuario'
    />
    {error.usuario && (
      <p className={estilos.mensagem}>{error.usuario.message}</p>
     )}
    


    <input 
      {...register('senha')}
      className={estilos.campo}
      placeholder='Senha'
    />

    {error.senha && (
      <p className={estilos.mensagem}>{error.senha.message}</p>
     )}
    

    <button className={estilos.botao}>Confirmar</button>

    </form>
</div>


    )

}