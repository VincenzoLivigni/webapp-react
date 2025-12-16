import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'

export default function Loader() {

    return (
        <div className="loader">
            <Quantum
                size="100"
                speed="1.8"
                color="rgb(255, 193, 7)"
            />
        </div>
    )
}