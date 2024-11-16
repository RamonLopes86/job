import estiloApre from './apres.module.css';
import Image from 'next/image';
import Link from 'next/link';




export default function Apresentacao(){

    return(

        <section className={estiloApre.boxPai}>

                <section className={estiloApre.boxFlex}>


                    <section className={estiloApre.boxConteudo}>

                        <div className={estiloApre.boxImagem}>

                          

                        </div>

                        <div className={estiloApre.texto}>

                            <h1>Ramon Lopes</h1>
                            <p>Olá , me chamo Ramon Lopes sou Desenvolvedor / Programador ,  CEO da Lopfy e vou juntos vamos transfromar suas ideias em realidade , com estratégias visuais criativas para aprimorar a imagem e o crescimento do seu empreendimento </p>

                            <Link href={'#'}> <button>Portifólio</button></Link>
                           

                        </div>


                    </section>



                </section>


        </section>
    )

}