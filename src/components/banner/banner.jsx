

import estilobanner from './banner.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import wpp from '../../../public/whats.png'
import banner3 from '../../../public/banner2.jpg'
import nuvem from '../../../public/nuvem.jpg'
import foguete from '../../../public/foguete2.jpg'










export default function Banner(props) {

  


    return (


        <section className={estilobanner.boxBanner}>

            <section className={estilobanner.boxTexto}>
                <h1>Conquiste uma <mark>visibilidade</mark> digital marcante para seu <mark>negócio</mark></h1>
                <p>Profissional dedicado à criação de sites personalizados, seguros e elaborados para atrair um maior número de clientes e obter resultados eficazes.</p>
                <button>Vamos conversar ? <Image alt='icone do whats app' className={estilobanner.imgWpp} src={wpp} /> </button>
            </section>
            <section className={estilobanner.boxImagem}>
                <Image className={estilobanner.image} alt='image' src={banner3} />
                <Image alt='imagens de nuvens' className={`${estilobanner.imgNuvem} ${estilobanner.nuvem}`} src={nuvem} />
                <Image alt='imagens de nuvens' className={`${estilobanner.imgNuvem1} ${estilobanner.nuvem}`} src={nuvem} />
                <Image alt='imagens de nuvens' className={`${estilobanner.imgNuvem2} ${estilobanner.nuvem}`} src={nuvem} />
                <Image alt='imagem de um foguete' src={foguete} className={estilobanner.imgFoguete} />
            </section>


            <section className={`${estilobanner.navEscondida} ${props.anima}`}>

                <nav>

                    <FontAwesomeIcon onClick={()=> props.click('fechar')} className={estilobanner.iconX} icon={faX}/>
                    <ul>
                        <Link href={'#'} className={estilobanner.linkTopo}><li>Sobre</li></Link>
                        <Link href={'#'} className={estilobanner.linkTopo}> <li>Quem Somos</li></Link>
                        <Link href={'#'} className={estilobanner.linkTopo}> <li>Modelos</li></Link>
                        <Link href={'#'} className={estilobanner.linkTopo}><li>Negócio</li></Link>
                        <Link href={'#'} className={estilobanner.linkTopo}> <li>Vantagens</li></Link>
                        <Link href={'#'} className={estilobanner.linkTopo}><li>Perguntas</li></Link>
                    </ul>
                </nav>



            </section>

        </section>


    )






}