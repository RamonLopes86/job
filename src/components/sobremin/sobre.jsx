import estiloSobre from './sobre.module.css';
import Image from 'next/image';
import emo from '../../../public/dev.png'
import qc from '../../../public/negocio.png'
import linguagem from '../../../public/linguagem.png'
import js from '../../../public/js.png'
import rc from '../../../public/rc.png'
import sql from '../../../public/sql.png'
import mysql from '../../../public/mysql.png'
import wp from '../../../public/worpress.png'
import ht from '../../../public/html.png'
import cs from '../../../public/css.png'
import fig from '../../../public/figma.png'
import pc from '../../../public/des.jpg'








export default function Sobre() {


    const lg = [js,rc,sql,mysql,wp,ht,cs,fig]


    return (

        <section className={estiloSobre.boxQuem}>


            <section className={estiloSobre.boxImagem}>

                    <section className={estiloSobre.back}>

                            <div className={estiloSobre.front}>
                                <Image className={estiloSobre.imgBack} src={pc} alt='imagem de um computador'/>
                            </div>

                    </section>

            </section>



            <section className={estiloSobre.boxTexto}>

                <div className={estiloSobre.define}>

                    <div className={estiloSobre.boxEmoji}>
                        <Image className={estiloSobre.imgEmoji} alt='imagem de um programador e seu computador' src={emo} />
                    </div>

                    <p>Olá, me hamo Ramon , sou Desenvolvedor Web e vou te ajudar  com estratégias visuais a aprimorar sua imagem e seu alcançe profisioinal , transformando ideias em realidade com atendimento personalizado e <strong style={{textTransform:'uppercase'}}>consultoria vitalícia</strong></p>

                </div>

                <div className={estiloSobre.skills}>

                    <div className={estiloSobre.boxEmoji2}>
                        <Image className={estiloSobre.iconQc} alt='imagem de pessoas unindo parte de quebra-cabeça' src={qc} />
                    </div>

                    <p> Seu negócio ganha alcançe no digital , alem de  ampliar sua visibilidade , dando destaque ao que mais importa , construir uma imagem de sucesso com projetos personalizados e <strong style={{textTransform:'uppercase'}}>consultoria vitalícia.</strong></p>

                </div>

                <div className={estiloSobre.ferramentas}>

                    <div className={estiloSobre.boxEmoji3}>

                        <Image alt='imagem de um homem em frente a um computador' className={estiloSobre.imgLinguagem} src={linguagem} />

                    </div>

                    <p>
                        Ferramentas  e conhecimentos importantes aplicados ao seu projeto para te destacar no mercado
                    </p>

                    <div className={estiloSobre.boxIconesFerramentas}>

                        {
                            lg.map((img , index)=>{

                                return(

                                    <Image alt='icones de ling de programação' className={estiloSobre.iconLg} key={index} src={img}/>
                                )
                            })
                        }


                    </div>
                </div>

            </section>


        </section>
    )
}
