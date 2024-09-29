import React, { useState, createContext } from 'react'
import { actividades2 } from '../constants/actividades.js'

const ActividadesContext = createContext()

function ActividadesProvider({ children }) {
    const [actividades, setActividades] = useState(actividades2)

    const agregarActividad = (actividad) => {
        const newActividades = [...actividades, actividad]
        setActividades(newActividades)
    }

    const eliminarActividad = (actividad) => {
        const newActividades = actividades.filter(actividadItem => actividadItem !== actividad)
        setActividades(newActividades)
    }

    return (
        <ActividadesContext.Provider value={{actividades, agregarActividad, eliminarActividad}}>
            {children}
        </ActividadesContext.Provider>
    )
} 

export { ActividadesProvider, ActividadesContext }