import Image from 'next/image';
import estiloQuem from './quem.module.css';
import dev from '../../../public/dev.jpg'
import wpp from '../../../public/whats.png'





export default function Quem(){

    return(

        <section className={estiloQuem.boxPaiQuem}>


            <section className={estiloQuem.boxImage}>

                <Image className={estiloQuem.imgDev} alt='imagem do desenvolvedor' src={dev}  />

                <div className={estiloQuem.boxTexto}>

                    <h1>O que construimos?</h1>
                    <p>Um site é muito mais do que uma página comum na internet ,ele representa a entrada principal para o seu negócio, funcionando como uma vitrine que exibe seus produtos ou serviços.</p>
                    <button>Dúvidas ? <Image className={estiloQuem.iconWpp} src={wpp} alt='icone do whats app'/>  </button>

                    <div className={estiloQuem.boxBlocosTx}>

                        <div>
                            <h2>Landing Page</h2>
                            <p>Todo o conteúdo em uma única página, o que permite fluidez e facilidade ao consumir o conteúdo da página.</p>
                        </div>
                        <div>
                                <h2> Sites institucionais</h2>
                                <p>Para empresas que buscam se destacar da concorrência e conquistar uma forte presença digital por meio de uma página personalizada de alto impacto.</p>
                        </div>
                        <div>
                            <h2>Loja Virtual</h2>
                            <p>Dê aos seus clientes a liberdade de adquirir seus produtos de qualquer lugar e a qualquer hora do dia!</p>
                        </div>

                    </div>

                </div>

                

            </section>


        </section>
    )
}