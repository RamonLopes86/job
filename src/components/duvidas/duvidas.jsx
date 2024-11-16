'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import estiloAjuda from './duvidas.module.css';
import React , {useState} from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import arrayDados from '@/dados/array';


export default function Duvidas(){

    const [animPer2 , setAnimaPer2] = useState(estiloAjuda.animaOff)
    const [animaPer , setAnimaPer] = useState(estiloAjuda.animaOff)
    const [cond , setCond] = useState(true)

    




    function clikPergunta(perg){

        if(perg === 0){

            console.log('zero')

            if(cond){

                setAnimaPer(estiloAjuda.animaOn)
                setCond(false)
               
    
            }else{
    
                setAnimaPer(estiloAjuda.animaOff)
                setCond(true)
               
            }
        }

        if(perg === 1){

            console.log('um')

            if(cond){

                setAnimaPer(estiloAjuda.animaOn)
                setCond(false)
               
    
            }else{
    
                setAnimaPer(estiloAjuda.animaOff)
                setCond(true)
               
            }
        }

     



    }


    return(

        <section className={estiloAjuda.boxPai}>

                <h1>Perguntas Comuns</h1>

               

                    <section className={estiloAjuda.boxPerguntas}>

                        {/* <div className={`${estiloAjuda.perguntas} ${animaPer}`}>
                            <h1> <FontAwesomeIcon onClick={()=>clikPergunta('1')} icon={faPlus}/>  Qual o investimento para desenvolver um projeto ?</h1>
                            <p>O investimento para o desenvolvimento do site pode variar conforme os recursos e funcionalidades disponíveis. Quando utilizada de maneira inteligente, uma ferramenta pode trazer um retorno positivo em relação ao tempo e ao investimento financeiro.</p>
                        </div>

                        <div className={`${estiloAjuda.perguntas} ${animPer2}`}>
                            <h1><FontAwesomeIcon onClick={()=>clikPergunta('2')} icon={faPlus}/>Prazo de entrega ?</h1>
                            <p> O prazo de entrega variará conforme o tipo de site a ser desenvolvido. Em geral, o decorre entre  7 a 20 dias após  o envio das informações necessárias para o projeto.</p>
                        </div>

                        <div className={`${estiloAjuda.perguntas} ${animPer2}`}>
                            <h1><FontAwesomeIcon onClick={()=>clikPergunta('3')} icon={faPlus}/>Pagamento</h1>
                            <p> O prazo de entrega variará conforme o tipo de site a ser desenvolvido. Em geral, o decorre entre  7 a 20 dias após  o envio das informações necessárias para o projeto.</p>
                        </div> */}

                            {
                                arrayDados.map((info , index)=>{

                                    return(
                                            <div key={index} className={`${estiloAjuda.perguntas} ${animaPer}`} >
                                                  <h1> <FontAwesomeIcon onClick={()=>clikPergunta(index)} icon={faPlus}/> {info.perg}</h1>
                                                  <p>{info.res}</p>  
                                            </div>
                                    )
                                })
                            }


                    </section>

        </section>

       
    )
}