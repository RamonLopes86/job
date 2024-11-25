'use client'
import estiloDif from './diferencial.module.css';
import dif from '@/dados/dig';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';










export default function Diferencial() {


    const [animacoes, setAnimacoes] = useState(dif.map(() => {


        return (

            estiloDif.bl1Off
        )

    }))


    const cardRef = useRef([])




    useEffect(() => {

        const myObserver = new IntersectionObserver((elemento) => {

                elemento.forEach((el)=>{

                    const index = cardRef.current.indexOf(el.target)

                    if(el.isIntersecting){
                      
                        
                        setAnimacoes(

                            
                            animacoes => {


                                const novAnima = [...animacoes]


                                novAnima[index] = estiloDif.blOn

                                return novAnima
                                

                            }


                        )

                    }else{


                        setAnimacoes(

                            
                            animacoes => {


                                const novoAnima2 = [...animacoes]


                                novoAnima2[index] = estiloDif.bl1Off

                                return novoAnima2

                            }


                        )

                    }

                })


        })








        cardRef.current.forEach((card) => {

            myObserver.observe(card)


        })


        return () =>{

            cardRef.current.forEach((card)=>{

                myObserver.unobserve(card)

            })

        }


    }, [])



    return (

        <section id='idnegocio' className={estiloDif.boxPai}>

            <h1>por que a Lopfy?</h1>

            <section className={estiloDif.boxCards}>


                {
                    dif.map((info) => {

                        return (

                            <div ref={(el) => cardRef.current[info.id - 1] = el} key={info.id} className={`${estiloDif.card} ${animacoes[info.id - 1]}`}>

                                <Image className={estiloDif.icon} alt={info.tit} src={info.image} />
                                <h2>{info.tit}</h2>
                                <p>{info.tx}</p>

                            </div>

                        )

                    })


                }



            </section>

        </section>

    )
}



