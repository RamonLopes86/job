
import estiloDif from './diferencial.module.css';
import dif from '@/dados/dig';
import Image from 'next/image';









export default function Diferencial() {



    return (

        <section id='idnegocio' className={estiloDif.boxPai}>

            <h1>por que a Lopfy?</h1>

            <section className={estiloDif.boxCards}>


                {
                    dif.map((info , index) => {

                        return (

                            <div  key={info.id} className={`${estiloDif.card}`}>

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



