import Image from 'next/image';
import estiloQuem from './quem.module.css';
import dev from '../../../public/dev.jpg'
import wpp from '../../../public/whats.png'

import React , {useState , useEffect , useRef} from 'react';





export default function Quem(){

    

    const [animaImg , setAnimaImg] = useState(estiloQuem.imgOff)

    const [blocoAnima , setBlocoAnima] = useState(estiloQuem.blOff)

    const [anima , setAnima] = useState(Array.from({length:3} , (_,index)=> index = estiloQuem.blMenorOff1))

    const imgRef = useRef()
    const blRef = useRef()



    const divRef = useRef([])

    


    useEffect(()=>{

        const myObserver = new IntersectionObserver((elemento)=>{

                elemento.forEach((info)=>{

                    

                    if(info.isIntersecting){

                    
                        if(info.target === imgRef.current){

                            setAnimaImg(estiloQuem.imgOn)

                        

                        }

                        if(info.target === blRef.current){

                            setBlocoAnima(estiloQuem.blOn)
                        }


                        if(info.target === divRef.current[0]){

                            setAnima(

                               anima =>{

                                const novo = [...anima]

                                novo[0] = estiloQuem.blMenorOn


                                return novo

                               }

                            )

                        }

                        if(info.target === divRef.current[1]){


                          setAnima(

                            anima =>{

                                const sNovo = [...anima]


                                sNovo[1] = estiloQuem.blMenorOn

                                return sNovo

                            }

                          )

                        }


                        if(info.target === divRef.current[2]){


                            setAnima(
  
                              anima =>{
  
                                  const div2 = [...anima]
  
  
                                  div2[2] = estiloQuem.blMenorOn
  
                                  return div2
  
                              }
  
                            )
  
                          }

                       
                       


                    }else{

                        if(info.target === imgRef.current){

                            setAnimaImg(estiloQuem.imgOff)

                        }

                        if(info.target === blRef.current){

                            setBlocoAnima(estiloQuem.blOff)
                        }
                        
                        
                        if(info.target === divRef.current[0]){

                           setAnima(

                            anima =>{

                                const novoS = [...anima]

                                novoS[0] = estiloQuem.blMenorOff1


                                return novoS

                               }

                           )

                        }


                        if(info.target === divRef.current[1]){


                            setAnima(
  
                              anima =>{
  
                                  const sNovo2 = [...anima]
  
  
                                  sNovo2[1] = estiloQuem.blMenorOff1
  
                                  return sNovo2
  
                              }
  
                            )
  
                          }



                          if(info.target === divRef.current[2]){


                            setAnima(
  
                              anima =>{
  
                                  const Sdiv2 = [...anima]
  
  
                                  Sdiv2[2] = estiloQuem.blMenorOff1
  
                                  return Sdiv2
  
                              }
  
                            )
  
                          }



                        
                    }

                })

        })



        myObserver.observe(imgRef.current)
        myObserver.observe(blRef.current)
        
        divRef.current.map((div)=>
        
            {

                return myObserver.observe(div)
            
            }
        
        )



        return () => {

            myObserver.unobserve(imgRef.current)
            myObserver.unobserve(blRef.current)
            

            divRef.current.map((div)=>
        
                {
    
                    return myObserver.unobserve(div)
                
                }
            
            )

        }

           

       


    },[])




    return(

        <section id='idquem' className={estiloQuem.boxPaiQuem}>


            <section className={estiloQuem.boxImage}>

                <Image ref={imgRef} className={`${estiloQuem.imgDev} ${animaImg}`} alt='imagem do desenvolvedor' src={dev}  />

                <div ref={blRef} className={`${estiloQuem.boxTexto} ${blocoAnima}`}>

                    <h1>O que construimos?</h1>
                    <p>Um site é muito mais do que uma página comum na internet ,ele representa a entrada principal para o seu negócio, funcionando como uma vitrine que exibe seus produtos ou serviços.</p>
                    <button>Dúvidas ? <Image className={estiloQuem.iconWpp} src={wpp} alt='icone do whats app'/>  </button>

                    <div className={estiloQuem.boxBlocosTx}>

                        <div>
                            <h2>Landing Page</h2>
                            <p>Todo o conteúdo em uma única página, o que permite fluidez e facilidade ao consumir o conteúdo da página.</p>
                        </div>
                        <div >
                                <h2> Sites institucionais</h2>
                                <p>Para empresas que buscam se destacar da concorrência e conquistar uma forte presença digital por meio de uma página personalizada de alto impacto.</p>
                        </div>
                        <div>
                            <h2>Loja virtual</h2>
                            <p>Dê aos seus clientes a liberdade de adquirir seus produtos de qualquer lugar e a qualquer hora do dia!</p>
                        </div>

                    </div>

                </div>


                <div className={estiloQuem.boxTextoEscondido}>

                    <h1>O que construimos?</h1>

                    <p>Um site é muito mais do que uma página comum na internet ,ele representa a entrada principal para o seu negócio, funcionando como uma vitrine que exibe seus produtos ou serviços.</p>
                        
                    <button className={estiloQuem.btnEscondido}>Dúvidas ? <Image className={estiloQuem.iconWppEsc} src={wpp} alt='icone do whats app'/>  </button>

                    <div className={estiloQuem.boxBlocosEscondTx}>

                        <div className={anima[0]}      ref={(el)=> divRef.current[0] = el } >
                            <h2>Landing Page</h2>
                            <p>Todo o conteúdo em uma única página, o que permite fluidez e facilidade ao consumir o conteúdo da página.</p>
                        </div>
                        <div className={anima[1]}  ref={(el)=>(divRef.current[1])= el} >
                                <h2> Sites institucionais</h2>
                                <p>Para empresas que buscam se destacar da concorrência e conquistar uma forte presença digital por meio de uma página personalizada de alto impacto.</p>
                        </div>
                        <div className={anima[2]}  ref={(el)=>(divRef.current[2])= el} >
                            <h2>Loja virtual</h2>
                            <p>Dê aos seus clientes a liberdade de adquirir seus produtos de qualquer lugar e a qualquer hora do dia!</p>
                        </div>

                    </div>

                </div>

                

            </section>


        </section>
    )
}