
import estiloTopo from './topo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png'





export default function Topo(){


    return(

        <section className={estiloTopo.boxTopo}>

            <div className={estiloTopo.marca}>
                <p>L</p>
                <p>o</p>
                <p>p</p>
                <p>f</p>
                <p>y</p>
                
            </div>

            <nav className={estiloTopo.navPrincipal}>

                <ul>
                    <Link href={'#'} className={estiloTopo.linkTopo}><li>Sobre</li></Link>
                    <Link href={'#'} className={estiloTopo.linkTopo}> <li>Quem Somos</li></Link>
                    <Link href={'#'} className={estiloTopo.linkTopo}> <li>Modelos</li></Link>
                    <Link href={'#'} className={estiloTopo.linkTopo}><li>Negócio</li></Link>
                    <Link href={'#'} className={estiloTopo.linkTopo}> <li>Vantagens</li></Link>
                    <Link href={'#'} className={estiloTopo.linkTopo}><li>Dúvidas Frequentes</li></Link>
                   
                </ul>

                   
            </nav>




            {/* Nav escondida */}

                

        </section>
        
                    
                 



    )

}