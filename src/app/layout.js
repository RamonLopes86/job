import "./globals.css";




export const metadata = {
  title: "Lopfy - Projetos",
  description: "Criação de projetos personalizados com suporte vitalício",

  openGraph:{

    title:'Lopfy - Projetos',
    description:'Projetos Personalizados - Você se destacando na Web',
    images:[

      'favico.png'

    ]

    

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
