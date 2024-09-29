import { useContext, useState } from 'react'
import { ActividadesContext } from '../context/ActividadesContext'
import { MdOutlineAddBox } from "react-icons/md";
import './ActivityDay.css'
import { Actividad } from './Actividad'
import { ModalAgregarTarea } from './ModalAgregarTarea'

export const ActivityDay = ({ diaSelected }) => {
    
    const { actividades, agregarActividad, eliminarActividad } = useContext(ActividadesContext)
    const [mostrarModal, setMostrarModal] = useState(false)

    const handleChangeShowModal = () => {
        setMostrarModal(!mostrarModal)
    }

    return (  
        <>
            <section className='container-actividades-dia'>
            <header className='header-actividades'>
                <h1>Actividades</h1>
                <MdOutlineAddBox className='add-actividad' onClick={handleChangeShowModal}/>
            </header>
            <div className='container-actividades'>
                    {
                        actividades.filter(actividad => actividad.dia.dia == diaSelected.dia && actividad.dia.mes == diaSelected.mes).map((actividad, index) =>
                            <Actividad actividad={actividad} key={index} />
                        )
                    }
            </div>
            </section>
            {
                mostrarModal && <ModalAgregarTarea handleChangeShowModal={handleChangeShowModal} diaSelected={diaSelected} />
            }
        </>
 )
}