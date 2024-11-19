import estiloFot from './footer.module.css';



export default function Footer(){

    const data  = new Date().getFullYear()


    return(

        <section className={estiloFot.boxFot}>

                <h3>Lopfy <span>&copy;</span> todos os direitos reservados - <span>{data}</span> </h3>

        </section>
    )
}