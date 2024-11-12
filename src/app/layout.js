
import "./globals.css";

export const metadata = {
  title: "Lopfy - Projetos",
  description: "Criação de projetos personalizados com suporte vitalício",

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
