'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import estiloAjuda from './duvidas.module.css';
import React, { useState } from 'react';
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





        


        // OPÇÃO 2 

        // AQUI VOCE VAI COLOCAR OS ESTILOS ATUAIS NO SPRED E AVALIA-LO JUSNTO AO INDEX , VEJA :


        // setAnimacoes(

        //     animacoes => {

        //             const arrayAnimacoes = [...animacoes]

        //         arrayAnimacoes[index] = arrayAnimacoes[index] === estiloAjuda.animaOff ? estiloAjuda.animaOn : estiloAjuda.animaOff

        //         return arrayAnimacoes


        //     })



    }









    return (

        <section id='idperguntas' className={estiloAjuda.boxPai}>

            <h1>Perguntas Comuns</h1>



            <section className={estiloAjuda.boxPerguntas}>


                {
                    arrayDados.map((info, index) => {

                        return (
                        

                                <section key={index}>

                                    <h1 onClick={() => clikPergunta(index)} > <FontAwesomeIcon icon={icone[index]} /> {info.perg}</h1>
                                    <div  className={`${estiloAjuda.perguntas} ${animacoes[index]}`} >
                                        <p>{info.res}</p>
                                    </div>
                                    
                                </section>

                           
                        )
                    })
                }


            </section>


        </section>


    )
}