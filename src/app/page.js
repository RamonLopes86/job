'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Topo from "@/components/topo/topo";
import Banner from "@/components/banner/banner";
import Quem from "@/components/quem_somos/quem";
import Sobre from "@/components/sobremin/sobre";
import Ajuda from "@/components/ajuda/ajuda";
import Duvidas from "@/components/duvidas/duvidas";
import Apresentacao from "@/components/apresentacao/apresentacao";
import Diferencial from "@/components/diferencial/diferencial";
import Footer from "@/components/footer/footer";
import Relogio from "@/components/relogio/relogio";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";




export default function Home() {

  const [animNav, setAnimaNav] = useState(styles.animaNavOff)
  


  function openNav(param) {

    if (param === 'abrir') {

      setAnimaNav(styles.animaNavOn)

    } else if (param === 'fechar') {

      setAnimaNav(styles.animaNavOff)

    }

  }



  function recolherMenu() {

    setAnimaNav(styles.animaNavOff)

  }





  useEffect(() => {


    window.addEventListener('resize', () => {

      if (window.innerWidth >= 990) {

        setAnimaNav(styles.animaNavOff)

      }


    })





  }, [])





  return (

    <div className={styles.conteudo}>

      <Topo

        click={openNav}
      />

      <Banner

        anima={animNav}
        click={openNav}
        recolher={recolherMenu}

      />
      <Quem />

      <Sobre />


      <Ajuda />



      <Duvidas />

      <Apresentacao />

      <Diferencial/>

      <Footer/>

      <Link className={styles.linkTopo} href={'#idtopo'}> 
      
       
        <FontAwesomeIcon className={styles.iconTop} icon={faChevronUp} />

        <p>TOPO</p>
      
      
      </Link>


      <Relogio/>


    </div>

  );
}
