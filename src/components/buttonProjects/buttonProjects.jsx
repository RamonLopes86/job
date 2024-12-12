import estiloBtnProj from './buttonProj.module.css';
import Link from 'next/link';



export default function ViewProj() {

    return (

        <section className={estiloBtnProj.boxBtnProj}>

            <Link href={'/modelos'}><button><p>Ver Projetos</p></button></Link>

        </section>


    )

}