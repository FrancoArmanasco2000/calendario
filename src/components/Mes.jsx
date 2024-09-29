import { useId } from "react"
import { Dia } from "./Dia"
import "./Mes.css"


export const Mes = ({ numeroMes, cantDias , selected, handleClickSelected}) => {
    const dias = Array.from({ length: cantDias }, (_, i) => i + 1)
    const nombreDelMes = () => {
        switch (numeroMes) {
            case 1:
                return "Enero"
            case 2:
                return "Febrero"
            case 3:
                return "Marzo"
            case 4:
                return "Abril"
            case 5:
                return "Mayo"
            case 6:
                return "Junio"
            case 7:
                return "Julio"
            case 8:
                return "Agosto"
            case 9:
                return "Septiembre"
            case 10:
                return "Octubre"
            case 11:
                return "Noviembre"
            case 12:
                return "Diciembre"
        }
    }

    return (
        <section>
            <h1 className="title-mes">{nombreDelMes(numeroMes)}</h1>
            <div className="contenedor-de-dias">
                {
                    dias.map((_, index) => (
                        <Dia key={index} numero={index + 1} numeroMes={numeroMes} selected={selected} handleClickSelected={handleClickSelected}/>
                    ))
                }
            </div>
        </section> 
    )
}