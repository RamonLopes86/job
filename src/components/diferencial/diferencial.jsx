
import estiloDif from './diferencial.module.css';
import dif from '@/dados/dig';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';







export default function Diferencial() {





    return (

        <section className={estiloDif.boxPai}>

            <h1>por que a Lopfy?</h1>

            <section className={estiloDif.boxCards}>


                {
                    dif.map((info) => {

                        return (

                            <div key={info.id} className={estiloDif.card}>

                                <Image alt={info.tit} src={info.image} />
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



