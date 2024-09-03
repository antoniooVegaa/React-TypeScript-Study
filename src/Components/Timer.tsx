import { useEffect, useState, useRef } from "react"


//Crear un type
type TymeArgs ={
    milisegundos: number,
    segundos?: number //DETERMINA QUE ES OPCIONAL
}

// SE PUEDE REALIZAR LA DESTRUCUTRACIÓN DE LOS ARGUMENTOS TRABAJANDO CON LOS NOMBRES DE LOS ATRIBUTOS
// DE ESTA MANERA {NombreAtributo}, EL ATRIBUTO DEBE ESTAR DEFINIDO EN TymeArgs
const Timer = ({milisegundos}: TymeArgs) => { 

    const [segundos, setSegundos]= useState(0);
    const ref = useRef<NodeJS.Timeout>();

    useEffect(()=>{
        // VERIFICA QUE EXISTA, EN CASO DE QUE TRUE, EJECUTA EL LIMPIADOR DE INTERVALO
        ref.current && clearInterval(ref.current); 

        ref.current= setInterval(()=> setSegundos(s=>s+1), milisegundos);

    },[milisegundos])



    return (
        <>
            <h4>
                Timer: <small>{segundos}</small>
            </h4>
        </>
    )
}

export default Timer