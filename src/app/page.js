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

import React , {useEffect, useState} from "react";



export default function Home() {

  const [animNav , setAnimaNav] = useState(styles.animaNavOff)

 
  function openNav(param){

     if(param === 'abrir'){

        setAnimaNav(styles.animaNavOn)

     }else if(param === 'fechar'){

        setAnimaNav(styles.animaNavOff)
      
     }


  }




  useEffect(()=>{


    window.addEventListener('resize' , ()=> {

      if(window.innerWidth >= 990 ){

        setAnimaNav(styles.animaNavOff)
  
      }
      

    })


    


  },[])





  return (
    
    <div className={styles.conteudo}>

      <Topo
      
      click = {openNav}
      
      />
      <Banner

        anima ={animNav}
        click={openNav}
      
      />
      <Quem/>

      <Sobre/>
      

      <Ajuda/>

     

      <Duvidas/>

      <Apresentacao/>

   



    </div>

  );
}
