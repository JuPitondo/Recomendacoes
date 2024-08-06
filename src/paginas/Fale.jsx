import estilos from './Fale.module.css'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'


const faleSchema = z.object({

    nome: z.string()
           .min(2, 'Informe um nome!')
           .max(25, 'Máximo de 25 caracteres!'),
    
    email: z.string()
            .email({message: 'Informe um e-mail válido!'}),

    mensagem: z.string()
            .nonempty( 'Digite uma mensagem!')
           

       
})


export function Fale(){

    const {register, 
           handleSubmit,
           formState: {errors}
        } = useForm({
            resolver: zodResolver(faleSchema)
        })


    function obterDadosFormulario(data){ 
        alert(`Nome: ${data.nome} \nE-mail: ${data.email} \nMensagem: ${data.mensagem}`)
    }

    return(
        <div className={estilos.conteiner}> 

            <p className={estilos.titulo}>Fale Conosco</p>

            <form 
                className={estilos.formulario}
                onSubmit={handleSubmit(obterDadosFormulario)}
            > 
                <input 
                    {...register('nome')}
                    className={estilos.campo}
                    placeholder='Nome' 
                />
                {errors.nome && (
                    <p className={estilos.mensagem}>
                        {errors.nome.message}
                    </p>
                )}

                <input 
                    {...register('email')}
                    className={estilos.campo}
                    placeholder='E-mail' 
                />
                {errors.email && (
                    <p className={estilos.mensagem}>
                        {errors.email.message}
                    </p>
                )}

                <textarea
                    {...register('mensagem')}
                    className={estilos.campo}
                    placeholder='Mensagem'
                />
                {errors.mensagem && (
                    <p className={estilos.mensagem}>
                        {errors.mensagem.message}
                    </p>
                )}

               <button
                    className={estilos.botao}
                    type='submit'
                >Enviar</button>
            </form>
        </div>
    )
}