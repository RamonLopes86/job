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

            elemento.forEach((el) => {

                if (el.isIntersecting) {


                    if (el.target === cardRef.current[0]) {

                        setAnimacoes(

                            animacoes => {

                                const novo = [...animacoes]


                                novo[0] = estiloDif.blOn


                                return novo
                            }

                        )


                    }

                    if (el.target === cardRef.current[1]) {

                        setAnimacoes(

                            animacoes => {

                                const novo = [...animacoes]


                                novo[1] = estiloDif.blOn


                                return novo
                            }

                        )


                    }

                    if (el.target === cardRef.current[2]) {

                        setAnimacoes(

                            animacoes => {

                                const novo = [...animacoes]


                                novo[2] = estiloDif.blOn


                                return novo
                            }

                        )


                    }


                    if (el.target === cardRef.current[3]) {

                        setAnimacoes(

                            animacoes => {

                                const novo = [...animacoes]


                                novo[3] = estiloDif.blOn


                                return novo
                            }

                        )


                    }

              

                }else{

                    if (el.target === cardRef.current[0]) {

                        setAnimacoes(

                            animacoes => {

                                const novo = [...animacoes]


                                novo[0] = estiloDif.bl1Off


                                return novo
                            }

                        )


                    }

                    if (el.target === cardRef.current[1]) {

                        setAnimacoes(

                            animacoes => {

                                const novo = [...animacoes]


                                novo[1] = estiloDif.bl1Off


                                return novo
                            }

                        )


                    }

                    if (el.target === cardRef.current[2]) {

                        setAnimacoes(

                            animacoes => {

                                const novo = [...animacoes]


                                novo[2] = estiloDif.bl1Off


                                return novo
                            }

                        )


                    }

                    if (el.target === cardRef.current[3]) {

                        setAnimacoes(

                            animacoes => {

                                const novo = [...animacoes]


                                novo[3] = estiloDif.bl1Off


                                return novo
                            }

                        )


                    }



                }



                    





            })

        })








        cardRef.current.map((itens) => {

            myObserver.observe(itens)


        })


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



