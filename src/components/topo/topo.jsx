
import estiloTopo from './topo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';






export default function Topo(props){


    return(

        <section className={estiloTopo.boxTopo}>

            <FontAwesomeIcon onClick={() => props.click('abrir')} className={estiloTopo.menuHam} icon={faBars}/>

            <div className={estiloTopo.marca}>
                <p>L</p>
                <p>opfy</p>
                
            </div>

            <nav className={estiloTopo.navPrincipal}>

                <ul>
                    <Link href={'#'} className={estiloTopo.linkTopo}><li>Sobre</li></Link>
                    <Link href={'#'} className={estiloTopo.linkTopo}> <li>Quem Somos</li></Link>
                    <Link href={'#'} className={estiloTopo.linkTopo}> <li>Modelos</li></Link>
                    <Link href={'#'} className={estiloTopo.linkTopo}><li>Negócio</li></Link>
                    <Link href={'#'} className={estiloTopo.linkTopo}> <li>Vantagens</li></Link>
                    <Link href={'#'} className={estiloTopo.linkTopo}><li>Perguntas</li></Link>
                   
                </ul>

                   
            </nav>




         

                

        </section>
        
                    
                 



    )

}