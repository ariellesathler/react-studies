import useObterPersonagens from "@/components/hooks/useObterPersonagens"
import { useEffect } from "react"

export default function PaginaPersonagens(){
    console.log("Entrou na pagina")
    const {personagens, obterPersonagens} = useObterPersonagens()
    
    useEffect(() => {
        obterPersonagens()
    }, [])
    return (
        <>
        <div className="flex justify-center h-screen text-zinc-800">
            <table className="w-3/5 text-xl opacity-70  rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-zinc-500">
                        <th className="p-2 font-black">Nome</th>
                        <th className="p-2 font-black">Altura</th>
                        <th className="p-2 font-black">Peso</th>
                        <th className="p-2 font-black">Ações</th>
                    </tr>
                </thead>
                <tbody>                                
                {personagens.map((personagem: any, indice: number)=> (
                    <tr key={indice}
                        className={`
                                text-center
                                ${indice % 2 === 0 ? 'bg-zinc-200' : 'bg-zinc-400'}
                            `}>   
                        <td className="p-2">{personagem.name}</td>  
                        <td className="p-2">{personagem.height}</td>  
                        <td className="p-2">{personagem.mass}</td>  
                        <td className="p-2"></td>                                   
                    </tr> 
                ))} 
                </tbody>
            </table>
        </div>
        </>
    )
}