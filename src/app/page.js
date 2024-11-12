import Image from "next/image";
import styles from "./page.module.css";
import Topo from "@/components/topo/topo";
import Banner from "@/components/banner/banner";

export default function Home() {
  return (
    
    <div className={styles.conteudo}>

      <Topo/>
      <Banner/>



    </div>

  );
}
