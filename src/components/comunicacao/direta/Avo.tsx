import { PessoaProps } from "../PessoaProps";
import Pai from "./Pai";
interface AvoProps{
    nome: string,
    sobrenome: string
}
export default function Avo(pessoa: AvoProps){
    return (
        <>
        <div className={`
            flex flex-col gap-5 p-5 rounded-md
            bg-purple-500 text-white border border-white
        `}>
           <div className='flex justify-center gap-2 text-xl'>
                <span className='font-black'>Pai</span>
                <span>{pessoa.nome}</span>
                <span>{pessoa.sobrenome}</span>
            </div>
            <div className='flex gap-5'>
                <Pai nome="Edward" sobrenome={pessoa.sobrenome} />
            </div>
        </div>
        </>
    )
}