
import estiloTopo from './topo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';






export default function Topo(props){


    return(

        <section id='idtopo' className={estiloTopo.boxTopo}>

            <FontAwesomeIcon onClick={() => props.click('abrir')} className={estiloTopo.menuHam} icon={faBars}/>

            <Link href={'#idlopfy'}>
                <div  className={estiloTopo.marca}>
                    <p>L</p>
                    <p>opfy</p>
                
                </div>
            </Link>

            <nav className={estiloTopo.navPrincipal}>

                <ul>
                    <Link href={'#idsobre'} className={estiloTopo.linkTopo}><li>Sobre</li></Link>
                    <Link href={'#idquem'} className={estiloTopo.linkTopo}> <li>Quem Somos</li></Link>
                    <Link href={'/modelos'} className={estiloTopo.linkTopo}> <li>Projetos</li></Link>
                    <Link href={'#idnegocio'} className={estiloTopo.linkTopo}><li>Negócio</li></Link>
                    <Link href={'#idajuda'} className={estiloTopo.linkTopo}> <li>Vantagens</li></Link>
                    <Link href={'#idperguntas'} className={estiloTopo.linkTopo}><li>Perguntas</li></Link>
                   
                </ul>

                   
            </nav>




         

                

        </section>
        
                    
                 



    )

}