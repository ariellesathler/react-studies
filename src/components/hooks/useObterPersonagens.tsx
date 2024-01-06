import { useCallback, useEffect, useState } from "react"

export default function useObterPersonagens(){
    const [personagens, setPersonagens] = useState<any[]>([])

    console.log("Entrou no hook.")
    
    // const obterPersonagens = useCallback(async function () {

    //     console.log("Entrou na função.")
    //     const resp = await fetch('https://swapi.dev/api/people/')
    //     const dados = await resp.json()
    //     setPersonagens(dados.results)
    // }, [])

    async function obterPersonagens() {

        console.log("Entrou na função.")
        const resp = await fetch('https://swapi.dev/api/people/')
        const dados = await resp.json()
        setPersonagens(dados.results)
        console.log(dados.results)
    }
    
    
    return {
        personagens,
        obterPersonagens
    }
}