import "./globals.css";


export const metadata = {
  title: "Lopfy - Projetos",
  description: "Criação de projetos personalizados com suporte vitalício",

  openGraph:{

    title:'Lopfy - Projetos',
    description:'Projetos Personalizados - Você se destacando na Web',
    keywords:['projetos personalizados' , 'desenvolvimento web' , 'tecnologia', 'site' , 'desenvolvedor' , 'vitalícia'],
    authors:[
      {

        nome:'lopfy',
        url:'https://job-pi-nine.vercel.app/'
      }

    ],

    images:[

      'favico.png'
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

    }

  }, 


  icons:{
    icon:'favico.png'
  }




};



  

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
     
      <body>
        
        {children}

      </body>
    </html>
  );
}
