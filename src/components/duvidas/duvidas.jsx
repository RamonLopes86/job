'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import estiloAjuda from './duvidas.module.css';
import React , {useState} from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import arrayDados from '@/dados/array';


export default function Duvidas(){

    
    // const [cond , setCond] = useState(true)
    const [animacoes , setAnimacoes] = useState(

        arrayDados.map(()=>{

            return(

                estiloAjuda.animaOff
            )
        })

    )
    

    function clikPergunta(index){

        setAnimacoes( 

                prevAnima=>{

                    const novo = [...prevAnima]

                    novo[index] = novo[index] === estiloAjuda.animaOff ? estiloAjuda.animaOn : estiloAjuda.animaOff

                    return novo
                }

            // prevAnima =>{

            //     const novaAnima = [...prevAnima]

            //     novaAnima[index] = cond ? estiloAjuda.animaOn : estiloAjuda.animaOff

            //     return novaAnima
            // }

        )

    }
     

   






    return(

        <section className={estiloAjuda.boxPai}>

                <h1>Perguntas Comuns</h1>

               

                    <section className={estiloAjuda.boxPerguntas}>

                    
                            {
                                arrayDados.map((info , index)=>{

                                    return(
                                            <div key={index} className={`${estiloAjuda.perguntas} ${animacoes[index]}`} >
                                                  <h1 onClick={()=>clikPergunta(index)} > <FontAwesomeIcon icon={faPlus}/> {info.perg}</h1>
                                                  <p>{info.res}</p>  
                                            </div>
                                    )
                                })
                            }


                    </section>

        </section>

       
    )
}