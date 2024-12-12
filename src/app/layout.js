import "./globals.css";
import Head from "next/head";


export const metadata = {
  title: "Lopfy - Projetos",
  description: "Criação de projetos personalizados com suporte vitalício",

  openGraph:{

    title:'Lopfy - Projetos',
    description:'Projetos Personalizados - Você se destacando na Web',

    keywords:[
      'projetos personalizados' , 
      'desenvolvimento web' , 
      'tecnologia', 'site' , 
      'desenvolvedor' , 
      'vitalícia'
    
    ],
    authors:[
      {

        nome:'lopfy',
        url:'https://job-pi-nine.vercel.app/'
      }

    ],

    images:[

      '/favico.png'
    ],

    locale:'pt_BR',

    type:'website'

  },


  robots:{

    index:true,
    follow:true,
    nocache:true,

    googlebot:{

      index:true,
      follow:true
  
    },
   
  }, 





  icons:{
    icon:'favico.png'
  }




};



  

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
        <Head>
        <title>Lopfy - Projetos</title>
        <meta name="description" content="Criação de projetos personalizados com suporte vitalício" />
        <meta name="keywords" content="projetos personalizados, desenvolvimento web, tecnologia, site, desenvolvedor, vitalícia" />
        <meta property="og:title" content="Lopfy - Projetos" />
        <meta property="og:description" content="Projetos Personalizados - Você se destacando na Web" />
        <meta property="og:image" content="/favico.png" />
        <meta name="robots" content="index, follow, nocache" />
        <meta name="googlebot" content="index, follow" />
        <link rel="icon" href="/favico.png" />
      </Head>
     
      <body>
        
        {children}

      </body>
    </html>
  );
}
