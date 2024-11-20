import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import estiloAjuda from './ajuda.module.css';
import Image from 'next/image';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React , {useState , useEffect , useRef} from 'react';




export default function Ajuda() {


    const [ajudaAnima,  setAjudaAnima] = useState(estiloAjuda.animaCardOff)


    const cardRef = useRef()


    useEffect(()=>{

        const myObserver = new IntersectionObserver((el)=>{

            el.forEach((e)=>{

                if(e.isIntersecting){

                    setAjudaAnima(estiloAjuda.animaCardOn)

                }else{

                    setAjudaAnima(estiloAjuda.animaCardOff)
                }

            })

        })


        myObserver.observe(cardRef.current)


    },[])


    return (

        <section  ref={cardRef} id='idajuda' className={estiloAjuda.boxAjuda}>

            <h1 >Como um Projeto Personalziado  pode trazer beneficios ao seu negócio</h1>


            <section  className={`${estiloAjuda.boxCard} ${ajudaAnima}`} >

                <div className={estiloAjuda.card}>

                    <div className={estiloAjuda.number}>
                        <p>01</p>
                    </div>

                    <div className={estiloAjuda.boxTit}>
                        <h2>visibilidade</h2>
                    </div>

                    <p>Apresente seus produtos e serviços para o mundo. Venda Mais</p>
                </div>


                <div className={estiloAjuda.card}>

                    <div className={estiloAjuda.number}>
                        <p>02</p>
                    </div>

                    <div className={estiloAjuda.boxTit}>
                        <h2>  <FontAwesomeIcon className={estiloAjuda.mais}  icon={faPlus}/>   vendas</h2>
                    </div>

                    <p>Disponibilize seus produtos ou serviços na internet, tornando a relação mais simples  e dinamica entre você e seus clientes.</p>
                </div>


                <div className={estiloAjuda.card}>

                    <div className={estiloAjuda.number}>
                        <p>03</p>
                    </div>

                    <div className={estiloAjuda.boxTit}>
                        <h2>Prestígio</h2>
                    </div>

                    <p>Conquiste a confiança dos clientes ao apresentar um site profissional que demonstre a seriedade do seu empreendimento.</p>
                </div>


                <div className={estiloAjuda.card}>

                    <div className={estiloAjuda.number}>
                        <p>04</p>
                    </div>

                    <div className={estiloAjuda.boxTit}>
                        <h2>Marketing</h2>
                    </div>

                    <p>Traga novos clientes para o seu negócio e fidelize os já existentes com recursos poderosos e adaptados às suas necessidades.</p>
                </div>

                <div className={estiloAjuda.card}>

                    <div className={estiloAjuda.number}>
                        <p>05</p>
                    </div>

                    <div className={estiloAjuda.boxTit}>
                        <h2>Projeção</h2>
                    </div>

                    <p>Destque-se no mercado  com um site sob medida, contemporâneo e eficaz.</p>
                </div>


                <div className={estiloAjuda.card}>

                    <div className={estiloAjuda.number}>
                        <p>06</p>
                    </div>

                    <div className={estiloAjuda.boxTit}>
                        <h2>Ganhos</h2>
                    </div>

                    <p>Seu Projeto trabalha por você 24hs por dia.</p>
                </div>

            </section>


        </section>
    )
}