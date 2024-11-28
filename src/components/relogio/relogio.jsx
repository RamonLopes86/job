import estiloRel from './estilorel.module.css'
import React , {useState  ,useEffect} from 'react'



export default function Relogio(){


    const [hora , setHora] = useState(new Date().getHours())
  const [min , setMin] = useState(new Date().getMinutes())


 

  function attClock(){


    const novoHorario = new Date()

    setHora(novoHorario.getHours())
    setMin(novoHorario.getMinutes())

    
  }




  useEffect(()=>{

    if(hora >=0 && hora <=9){

      setHora(`0 ${hora}`)

    }

    if(min >=0 && min <=9){

      setMin(` 0 ${min}`)

    }


    const intervalo = setInterval(()=>{

        attClock()

    },1000)


    return () =>{

      
      clearInterval(intervalo)

    }

  })
    

   


    return(

        <div className={estiloRel.horario}>

        <span>{hora}<p>h</p></span>

            <div className={estiloRel.boxPontos}>

              

                <div className={estiloRel.ponto}>
                  {/* ponto */}
                </div>
                <div className={estiloRel.ponto}>
                  {/* ponto */}
                </div>
              
            </div>

            <span>{min}<p>min</p></span>
        </div>



    )
}