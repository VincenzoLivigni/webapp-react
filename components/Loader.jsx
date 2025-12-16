import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'
import { useLoadingContext } from '../contexts/LoadingContext'

export default function Loader() {

    const { loading } = useLoadingContext()

    // se la pagina non sta caricando, il componente Loader non deve apparire
    if (loading === false) return null

    return (
        <div className="loader">
            <Quantum
                size="100"
                speed="4.0"
                color="rgb(255, 193, 7)"
            />
        </div>
    )
}