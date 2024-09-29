import './ModalAgregarTarea.css';
import { IoClose } from "react-icons/io5";
import { useContext } from 'react';
import { ActividadesContext } from '../context/ActividadesContext';

export const ModalAgregarTarea = ({ handleChangeShowModal, diaSelected }) => {
    
    const { agregarActividad } = useContext(ActividadesContext)

    const handleAgregarTarea = (e) => {
        e.preventDefault()
        handleChangeShowModal()
        const data = Object.fromEntries(new FormData(e.target))
        const nuevaActividad = {
            name: data.name,
            dia: diaSelected,
            horaInicio: data.horarioInicio,
            horaFin: data.horarioFin
        }
        agregarActividad(nuevaActividad)
    }

    return (
        <div className='modal-agregar-tarea'>
            <div className='button-cerrar' onClick={handleChangeShowModal}><IoClose /></div>
            <form className='form-modal' onSubmit={handleAgregarTarea}>

                <h1>Agregar Tarea</h1>
                <label>Actividad
                <input type='text' placeholder='Actividad' name='name' required/>
                </label>
                <label >Horario inicio
                    <input type='time' name='horarioInicio' required/>
                </label>
                <label>Horario fin
                    <input type='time' name='horarioFin' required/>
                </label>

                <button className='button-agregar'>Agregar</button>
            </form>
        </div>
    )
}