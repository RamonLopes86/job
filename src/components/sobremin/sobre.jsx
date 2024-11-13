import estiloSobre from './sobre.module.css';
import Image from 'next/image';
import ramon from '../../../public/ramon2.png'




export default function Sobre() {

    return (

        <section className={estiloSobre.boxQuem}>


            <section className={estiloSobre.boxImagem}>



            </section>

        

            <section className={estiloSobre.boxTexto}>

                <div className={estiloSobre.define}>

                    {/* <Image src={}/> */}
                    <p>Olá, me hamo Ramon , sou Desenvolvedor Web e vou te ajudar a comestratégias visuais a aprimorar sua imagem e seu alcançe profisioinal , transformando ideias em realidade com atendimento personalizado e consultoria vitalícia</p>

                </div>
                <div className={estiloSobre.skills}>
                   <p> Seu negócio ganha alcançe no digital , alem de  ampliar sua visibilidade , dando destaque ao que mais importa , construir uma imagem de sucesso com projetos personalizados e consultoria vitalícia.</p>

                </div>

                <div className={estiloSobre.ferramentas}>

                    <p>
                        ferramentas importantes e conhecimento na sua aplicação são fundamentais e servirá para direciona-los a melhor forma de alcançar visibilidade e consequentemente maior captação de clientes para seu negócio
                    </p>

                    <div className={estiloSobre.boxIconesFerramentas}>

                        

                    </div>
                </div>

            </section>


        </section>
    )
}
