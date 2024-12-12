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
import React , {useState , useEffect , useRef} from 'react';








export default function Sobre() {


    const lg = [js,rc,sql,mysql,wp,ht,cs,fig]


    const [anima , setAnima] = useState(Array.from({length:3}, (_,index) =>  estiloSobre.animaOff))


    const animaRef = useRef([])

    const frontRef = useRef()


    useEffect(()=>{

       const myObserver = new IntersectionObserver((elemento)=>{

            elemento.forEach((el)=>{

              if(el.isIntersecting){

                if(el.target === animaRef.current[0]){


                    setAnima(

                        anima => {

                            const novoAnima = [...anima]

                            novoAnima[0] = estiloSobre.animaOn

                         
                            return novoAnima


                        }
                        
                    )


                }

                if(el.target === animaRef.current[1]){

                    setAnima(

                        anima =>{

                            const novoAnima2 = [...anima]

                            novoAnima2[1] = estiloSobre.animaOn

                            return novoAnima2
                        }


                    )

                }

                if(el.target === animaRef.current[2]){

                    setAnima(

                        anima =>{

                            const novoAnima3 = [...anima]

                            novoAnima3[2] = estiloSobre.animaOn

                            return novoAnima3
                        }


                    )

                }


              }else{

                if(el.target === animaRef.current[0]){

                    setAnima(

                        anima => {

                            const SnovoAnima = [...anima]

                            SnovoAnima[0] = estiloSobre.animaOff

                         
                            return SnovoAnima


                        }
                        
                    )


                }

                if(el.target === animaRef.current[1]){

                    setAnima(

                        anima =>{

                            const SnovoAnima2 = [...anima]

                            SnovoAnima2[1] = estiloSobre.animaOff

                            return SnovoAnima2
                        }


                    )

                }
                
                if(el.target === animaRef.current[2]){

                    setAnima(

                        anima =>{

                            const SnovoAnima3 = [...anima]

                            SnovoAnima3[2] = estiloSobre.animaOff

                            return SnovoAnima3
                        }


                    )

                }



              }



            })



       }) 



       
        animaRef.current.map((blocos)=>{

            return myObserver.observe(blocos)
        })


        return () => {

            animaRef.current.map((blocos)=>{

               if(blocos){

                return myObserver.unobserve(blocos)
               }
            })

        }

    },[])


    useEffect(()=>{


        const myObserver2 = new IntersectionObserver((elemento)=>{

            elemento.forEach((el)=>{

                if(el.isIntersecting){

                    frontRef.current.classList.add(estiloSobre.frontOn);
                    frontRef.current.classList.remove(estiloSobre.frontOff)


                   

                }else{

                    frontRef.current.classList.add(estiloSobre.frontOff);
                    frontRef.current.classList.remove(estiloSobre.frontOn);


                   
                
                }


            })

        })


        myObserver2.observe(frontRef.current)


    },[])





    return (

        <section id='idsobre' className={estiloSobre.boxQuem}>

                

            <section className={estiloSobre.boxImagem}>

                    <section className={estiloSobre.back}>

                            <div ref={frontRef} className={estiloSobre.front}>
                                <Image className={estiloSobre.imgBack} src={pc} alt='imagem de um computador'/>
                            </div>

                    </section>

            </section>



            <section className={estiloSobre.boxTexto}>

                <div  ref={(el)=> animaRef.current[0] = el} className={`${estiloSobre.define} ${estiloSobre.boxGeral} ${anima[0]}`}>

                    <div className={estiloSobre.boxEmoji}>
                        <Image className={estiloSobre.imgEmoji} alt='imagem de um programador e seu computador' src={emo} />
                    </div>

                    <p> Vou te ajudar  com estratégias visuais a aprimorar sua imagem e seu alcançe profisioinal , transformando ideias em realidade com atendimento personalizado e <strong style={{textTransform:'uppercase'}}>consultoria vitalícia</strong></p>

                </div>

                <div ref={(el)=> animaRef.current[1] = el} className={`${estiloSobre.skills} ${estiloSobre.boxGeral} ${anima[1]}`}>

                    <div className={estiloSobre.boxEmoji2}>
                        <Image className={estiloSobre.iconQc} alt='imagem de pessoas unindo parte de quebra-cabeça' src={qc} />
                    </div>

                    <p> Seu negócio ganha alcançe no digital , alem de  ampliar sua visibilidade , dando destaque ao que mais importa , construir uma imagem de sucesso com projetos personalizados e <strong style={{textTransform:'uppercase'}}>consultoria vitalícia.</strong></p>

                </div>

                <div ref={(el)=> animaRef.current[2] = el}  className={`${estiloSobre.ferramentas} ${estiloSobre.boxGeral} ${anima[2]}`}>

                    <div className={estiloSobre.boxEmoji3}>

                        <Image alt='imagem de um homem em frente a um computador' className={estiloSobre.imgLinguagem} src={linguagem} />

                    </div>

                    <p>
                        Ferramentas  e conhecimentos importantes aplicados ao seu projeto para te destacar no mercado
                    </p>

                    <div ref={(el)=> animaRef.current[2] = el} className={estiloSobre.boxIconesFerramentas}>

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
