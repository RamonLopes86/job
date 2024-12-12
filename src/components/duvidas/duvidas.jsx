'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import estiloAjuda from './duvidas.module.css';
import React, { useState , useEffect , useRef } from 'react';
import {faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import arrayDados from '@/dados/array';


export default function Duvidas() {


    const [animacoes, setAnimacoes] = useState(

        arrayDados.map(() => {

            return (

                estiloAjuda.animaOff
               
            )
        })

    )


    
    const [icone , setIcone] = useState(arrayDados.map(()=>{


            return(

                faPlus
            )

    }))

    
  const [animaPerg , setAnimaPerg] = useState(estiloAjuda.pergOff)

  const pergRef = useRef()
  
 const [animaRes , setAnimaRes] = useState(arrayDados.map(()=>{

            return (
                
                estiloAjuda.resOff    
            )    
    }))
               


    function clikPergunta(index) {


        // caso tenha duvidas , voce fazer as duas formas , lembrndo que a primeira é a melhor 

        // OPÇÃO 1 

        //  AQUI VOCE FARÁ UM MAP DENTRO DOS ESTILOS ATUAIS E ATRAVEZ DO INDEX DURANTE O EVENTO CLICK ELE VAI ARTRIBUIR O ESTILO DE ACORDO COM  O INDEX SELECIONADO NO CLICK


        setAnimacoes(

             animacoes.map((estiloAtual, indice) => {

                return indice === index ? (estiloAtual === estiloAjuda.animaOff ? estiloAjuda.animaOn : estiloAjuda.animaOff) : estiloAtual

            })

        )


        setIcone  (icone.map((icones , indice)=>{

            return indice === index ? (icones === faPlus ? faMinus : faPlus) : icones

        }))



        setAnimaRes(

            animaRes.map((anima , indice)=>{

                return indice === index ? (anima === estiloAjuda.resOff ? estiloAjuda.resOn : estiloAjuda.resOff) : anima

            })

        )

        


        // OPÇÃO 2 

        // AQUI VOCE VAI COLOCAR OS ESTILOS ATUAIS NO SPRED E AVALIA-LO JUSNTO AO INDEX , VEJA :


        // setAnimacoes(

        //     animacoes => {

        //             const arrayAnimacoes = [...animacoes]

        //         arrayAnimacoes[index] = arrayAnimacoes[index] === estiloAjuda.animaOff ? estiloAjuda.animaOn : estiloAjuda.animaOff

        //         return arrayAnimacoes


        //     })



    }



  
    


   



    useEffect(()=>{

        const myObserver = new IntersectionObserver((elemento)=>{


            elemento.forEach((el)=>{


                setAnimaPerg(el.isIntersecting ? estiloAjuda.pergOn : estiloAjuda.pergOff)


            })


    })

        myObserver.observe(pergRef.current)



        return () =>{

            if (pergRef.current){

                myObserver.unobserve(pergRef.current)
            }

        }


    },[])

    




    return (

        <section id='idperguntas' className={estiloAjuda.boxPai}>

            <h1>Perguntas Comuns</h1>



            <section ref={pergRef} className={`${estiloAjuda.boxPerguntas} ${animaPerg}`}  >


                {
                    arrayDados.map((info, index) => {

                        return (
                        

                                <section key={index}>

                                    <h1 onClick={() => clikPergunta(index)} > <FontAwesomeIcon icon={icone[index]} /> {info.perg}</h1>
                                    <div  className={`${estiloAjuda.perguntas} ${animacoes[index]}`} >
                                        <p className={animaRes[index]}>{info.res}</p>
                                    </div>
                                    
                                </section>

                           
                        )
                    })
                }


            </section>


        </section>


    )
}