import estiloAjuda from './ajuda.module.css';



export default function Ajuda() {


    return (

        <section className={estiloAjuda.boxAjuda}>

            <h1>Como um Projeto pode trazer beneficios ao seu negócio</h1>


            <section className={estiloAjuda.boxCard}>

                <div className={estiloAjuda.card}>

                    <div className={estiloAjuda.number}>
                        <p>01</p>
                    </div>

                    <h2>visibilidade</h2>

                    <p>Apresente seus produtos e serviços para o mundo. Venda Mais</p>
                </div>


                <div className={estiloAjuda.card}>

                    <div className={estiloAjuda.number}>
                        <p>01</p>
                    </div>

                    <h2>Maximize suas vendas</h2>

                    <p>Disponibilize seus produtos ou serviços na internet, tornando a relação mais simples  e dinamica entre você e seus clientes.</p>
                </div>


                <div className={estiloAjuda.card}>

                    <div className={estiloAjuda.number}>
                        <p>01</p>
                    </div>

                    <h2>Prestígio</h2>

                    <p>Conquiste a confiança dos clientes ao apresentar um site profissional que demonstre a seriedade do seu empreendimento.</p>
                </div>

            </section>


        </section>
    )
}