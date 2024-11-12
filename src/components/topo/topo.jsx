
import estiloTopo from './topo.module.css';
import Link from 'next/link';




export default function Topo(){


    return(

        <section className={estiloTopo.boxTopo}>

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