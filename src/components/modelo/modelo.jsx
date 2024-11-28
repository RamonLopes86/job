import estiloMOdelo from './modelo.module.css'
import Link from 'next/link'
import Image from 'next/image'
import arrayProj from '@/dados/arrProj'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEye } from '@fortawesome/free-solid-svg-icons'
import barber from '../../../public/barberCompleta.png'





export default function Modelo() {







    return (

        <section className={estiloMOdelo.boxModelos}>

            <div className={estiloMOdelo.boxButton}>

                <Link href={'/'}> <button className={estiloMOdelo.btnSair}>  <FontAwesomeIcon className={estiloMOdelo.iconSeta} icon={faArrowRight} />   </button> </Link>

            </div>




            <section className={estiloMOdelo.modelos}>



                {
                    arrayProj.map((imagens) => {


                        return (

                            <div className={estiloMOdelo.cardd}>





                                <div style={{ backgroundImage: `url(/${imagens.img}) `}} className={estiloMOdelo.imageContainer}>



                                </div>



                            </div>




                        )



                    })



                }






                {/* {

                            arrayProj.map((image , index)=>{

                                    return(


                                        <div className={estiloMOdelo.card} key={index}>

                                            <Image alt='imagens dos projetos desenvolvidos' className={estiloMOdelo.image} src={image.img}/>

                                    
                                            <Link href={''}> <button className={estiloMOdelo.btnVer}>Ver projeto  <FontAwesomeIcon className={estiloMOdelo.iconOlho} icon={faEye}/>   </button> </Link>
                                          

                                        </div>

                                    )

                            })


                        }
                     */}


            </section>



        </section>

    )
}