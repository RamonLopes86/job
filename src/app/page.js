import Image from "next/image";
import styles from "./page.module.css";
import Topo from "@/components/topo/topo";
import Banner from "@/components/banner/banner";
import Quem from "@/components/quem_somos/quem";

export default function Home() {
  return (
    
    <div className={styles.conteudo}>

      <Topo/>
      <Banner/>
      <Quem/>



    </div>

  );
}
