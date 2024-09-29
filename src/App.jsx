import "./App.css"
import { meses } from "./constants/meses"
import { Mes } from "./components/Mes"
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { useState } from "react"
import { FaCalendarAlt } from "react-icons/fa";
import { ActivityDay } from "./components/ActivityDay";

export const App = () => {

    const date = new Date()
    const [indexMes, setIndexMes] = useState(date.getUTCMonth() + 1)
    const [diaSelected, setDiaSelected] = useState({
        mes: date.getUTCMonth()+1,
        dia: date.getUTCDate()
    })
    
    const handleClickBack = () => {
        let newIndexMes = indexMes
        if (newIndexMes - 1 < 1) newIndexMes = 12 
        else newIndexMes -=1
        setIndexMes(newIndexMes)
    }

    const handleClickNext = () => {
        let newIndexMes = indexMes
        if (newIndexMes + 1 > 12) newIndexMes = 1
        else newIndexMes +=1
        setIndexMes(newIndexMes)
    }

    const handleClickSelected = (numero, nombreMes) => {
        setDiaSelected({
            mes: nombreMes,
            dia: numero
        })
    }


    return (
        <main className="container-main">
            <section className="container-info-dia">
                <ActivityDay diaSelected={diaSelected} />
            </section>
            <section className="container-calendar">
                <header className="header-calendar">
                    <h1 className="title-calendar">Mi calendario <FaCalendarAlt /></h1>
                    <div className="calendar-box-buttons">
                        <button className="button-calendar" onClick={handleClickBack}><IoMdArrowRoundBack/></button>
                        <button className="button-calendar" onClick={handleClickNext}><IoMdArrowRoundForward/></button>
                    </div>    
                </header>
                <div className="meses">
                    <Mes numeroMes={indexMes} cantDias={meses[indexMes - 1].dias} selected={diaSelected} handleClickSelected={handleClickSelected} />
                </div>
            </section>
        </main>
    )
}