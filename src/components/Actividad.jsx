import './Actividad.css'
import { motion } from 'framer-motion'
import { useState, useContext } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { ActividadesContext } from '../context/ActividadesContext';

export const Actividad = ({ actividad }) => {

    const { eliminarActividad } = useContext(ActividadesContext)

    const [expandir, setExpandir] = useState(false)

    const handleExpandir = () => {
        setExpandir(!expandir)
    }

    const handleBorrarActividad = () => {
        eliminarActividad(actividad)
    }

    return (
        <motion.div
            onClick={handleExpandir}
            initial={{ opacity: 0 , height: '2.25rem' }}
            animate={{ opacity: 1 , height: expandir ? '5rem' : '2.25rem'}}
            transition={{ duration: 0.2 }}
            className='actividad'>
            <div className='header-actividad'>
                <p className="titulo-actividad">{actividad.name}</p>
                <p className="duracion-actividad">{actividad.horaInicio} - {actividad.horaFin}</p>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: expandir ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className='acciones-actividad'>
                <FaTrashAlt className='icono-eliminar' onClick={handleBorrarActividad}/>
                <MdModeEditOutline className='icono-editar' />
            </motion.div>
        </motion.div>
    )
}