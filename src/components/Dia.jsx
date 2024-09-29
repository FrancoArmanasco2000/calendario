import "./Dia.css"
import {useContext} from "react"
import {ActividadesContext} from "../context/ActividadesContext"

export const Dia = ({ numero, numeroMes, selected, handleClickSelected }) => {

    const {actividades} = useContext(ActividadesContext)

    const tieneActividades = () => {
        return actividades.some(actividad => actividad.dia.mes == numeroMes && actividad.dia.dia == numero)
    }

    const handleClickDia = () => {
        handleClickSelected(numero,numeroMes)
    }

    return (
        <>
            <div onClick={handleClickDia} className={numeroMes == selected.mes && numero == selected.dia ? 'dia-seleccionado' : 'container-dia'}
                style={{ borderColor: tieneActividades() ? 'rgb(38,98,217)' : 'rgb(54, 54, 58)' }}
            >
                {numero}
            </div>
        </>
    )
}