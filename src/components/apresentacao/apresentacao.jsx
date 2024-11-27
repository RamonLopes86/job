'use clinet'

import estiloApre from './apres.module.css';
import Link from 'next/link';
import React , {useState , useEffect , useRef} from 'react';







export default function Apresentacao(){

    const [animaImagem , setAnimaImagem] = useState(estiloApre.animaImgOff)
    const [animaTx , setAnimaTx] = useState(estiloApre.animaTxOff)

    const imgRef = useRef()
    const txRef = useRef()
    const contRef = useRef()



    useEffect(()=>{

        const myObserver = new IntersectionObserver((elemento)=>{

                elemento.forEach((el)=>{


                    if(el.isIntersecting){


                     

                            setAnimaImagem(estiloApre.animaOn)

                  

                  

                            setAnimaTx(estiloApre.animaOn)

                    


                    }else{


                     

                            setAnimaImagem(estiloApre.animaImgOff)

                

                    

                            setAnimaTx(estiloApre.animaTxOff)


                    }

                })

        })



            myObserver.observe(contRef.current)
        // myObserver.observe(imgRef.current)
        // myObserver.observe(txRef.current)

    },[])


    return(

        <section className={estiloApre.boxPai}>

                <section className={estiloApre.boxFlex}>


                    <section ref={contRef}  className={estiloApre.boxConteudo}>

                        <div ref={imgRef}  className={`${estiloApre.boxImagem} ${animaImagem}`}>

                          

                        </div>

                        <div ref={txRef} className={`${estiloApre.texto} ${animaTx}`}>

                            <h1>Ramon Lopes</h1>
                            <p>Sou Desenvolvedor / Programador ,  e com a  <span>Lopfy</span> vamos juntos  transfromar suas ideias em realidade , com estratégias visuais criativas para aprimorar a imagem e o <span>crescimento</span> do seu empreendimento </p>

                            <Link target='_Blank' href={'https://ramon-portifolio.vercel.app/'}> <button>Portifólio</button></Link>
                           

                        </div>


                    </section>



                </section>


        </section>
    )

}