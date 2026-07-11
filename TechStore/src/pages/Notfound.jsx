import{link}from "react-router-dom";
export default function NotFound(){
    return(
        <div classname="mx-auto flex min-h-[calc(100vh-64px)]max-ww-lg flex-col items-center justify-center px-4 text-center">
            <p className="text-2xl font-semibold text-horizon-accent2">404</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-horizon-text sm:text-5xl">Pagina no encontrada</h1>
            <p className="mt-2 text-horizon-muted">Esta ruta no existe</p>
        </div>
    )
}