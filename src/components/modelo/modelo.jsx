'use client'

import estiloMOdelo from './modelo.module.css'
import Link from 'next/link'
import arrayProj from '@/dados/arrProj'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHandPointer } from '@fortawesome/free-solid-svg-icons'








export default function Modelo() {



    return (

        <section className={estiloMOdelo.boxModelos}>

            <h2>Alguns projetos</h2>


            <Link href={'/'}> <button className={estiloMOdelo.btnSair}>  <FontAwesomeIcon className={estiloMOdelo.iconSeta} icon={faArrowRight} />   </button> </Link>






            <section className={estiloMOdelo.modelos}>



                {
                    arrayProj.map((imagens, index) => {


                        return (

                            <Link key={index} href={imagens.link} target='_blank'>

                                <div  className={estiloMOdelo.cardd}>

                                

                                    <div style={{ backgroundImage: `url(/${imagens.img}) ` }} className={estiloMOdelo.imageContainer}>

                                    </div>

                                    <p>click para ver o projeto <FontAwesomeIcon className={estiloMOdelo.iconPointer} icon={faHandPointer} /> </p>


                                    
                                </div>


                            </Link>






                        )



                    })



                }

            </section>



           

        </section>

    )
}