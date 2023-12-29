import { useState } from "react"
import Display from "./Display"
import Botao from "./Botao"

export default function Contador(){
    const [numero, setNumero] = useState(0)

    function incrementar(valor: number){
        setNumero(numero + valor)
    }

    return (
        <div
            className={`
            flex flex-col p-2 w-72 h-72 
            border border-zinc-400 rounded-lg
            gap-3
        `}
        >
            <Display valor={numero} />
            <Botao clique={incrementar} />
        </div>
    )
}