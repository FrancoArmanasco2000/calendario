import { createRoot } from "react-dom/client";
import { App } from "./src/App"
import "./style.css"
import { ActividadesProvider } from "./src/context/ActividadesContext"

createRoot(document.getElementById("app")).render(
    <ActividadesProvider>
        <App />
    </ActividadesProvider>
)