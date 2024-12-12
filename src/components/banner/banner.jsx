

import estilobanner from './banner.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import wpp from '../../../public/whats.png'
import banner3 from '../../../public/banner2.jpg'
import nuvem from '../../../public/nuvem.jpg'
import foguete from '../../../public/foguete2.jpg'
import React , {useState  , useEffect} from 'react';





export default function Banner(props) {

    const [tx , setTx] = useState(estilobanner.txOn)
    const [bxImg , setBxImg] = useState(estilobanner.imgOn) 



    
function animaTx(){

    if(window.scrollY > 1100){

        setTx(estilobanner.txOff)
        setBxImg(estilobanner.imgOff)
      
    }else if(window.scrollY < 1000){

        setTx(estilobanner.txOn)
        setBxImg(estilobanner.imgOn)
    }

}



   



useEffect(()=>{

   window.addEventListener('scroll' , animaTx) 

   
   return () =>{

       
        window.removeEventListener('scroll' , animaTx)
   }

},[])



    return (


        <section className={estilobanner.boxBanner}>

            <section className={`${estilobanner.boxTexto} ${tx}`}>
                <h1>Conquiste uma <mark>visibilidade</mark> digital marcante para seu <mark>negócio</mark></h1>
                <p>Profissional dedicado à criação de sites personalizados, seguros e elaborados para atrair um maior número de clientes e obter resultados eficazes.</p>
                <Link href={'https://wa.me/71991265530?text="Quero Saber mais informações ..."'}  target='_Blank' ><button>Vamos conversar ? <Image alt='icone do whats app' className={estilobanner.imgWpp} src={wpp} /> </button></Link>
                
            </section>
            <section className={`${estilobanner.boxImagem} ${bxImg}`}  >
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
                        <Link onClick={props.recolher} href={'#idsobre'} className={estilobanner.linkTopo}><li>Sobre</li></Link>
                        <Link onClick={props.recolher} href={'#idquem'} className={estilobanner.linkTopo}> <li>Quem Somos</li></Link>
                        <Link onClick={props.recolher} href={'/modelos'} className={estilobanner.linkTopo}> <li>Projetos</li></Link>
                        <Link onClick={props.recolher} href={'#idnegocio'} className={estilobanner.linkTopo}><li>Negócio</li></Link>
                        <Link onClick={props.recolher} href={'#idajuda'} className={estilobanner.linkTopo}> <li>Vantagens</li></Link>
                        <Link onClick={props.recolher} href={'#idperguntas'} className={estilobanner.linkTopo}><li>Perguntas</li></Link>
                    </ul>
                </nav>



            </section>

        </section>


    )






}