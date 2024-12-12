import Link from "next/link"
import estiloFound from './notFound.module.css';





export default function NotFound(){


    return(

        <section className={estiloFound.boxPai}> 


                <h1>Pagina nao encontrada</h1>

                <p>404</p>

                <Link className={estiloFound.link} href={'/'}>Voltar a pagina principal</Link>

        </section>

    )

}