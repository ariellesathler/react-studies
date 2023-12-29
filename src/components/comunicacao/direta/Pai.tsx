import { PessoaProps } from "../PessoaProps";
import Filho from "./Filho";
interface PaiProps{
    nome: string,
    sobrenome: string
}

export default function Pai(pessoa: PaiProps){
    return (
        <>
        <div className={`
            flex flex-col gap-5
            bg-blue-500 text-white border border-white
            rounded-md p-5
        `}>
           <div className='flex justify-center gap-2 text-xl'>
                <span className='font-black'>Pai</span>
                <span>{pessoa.nome}</span>
                <span>{pessoa.sobrenome}</span>
            </div>
            <div className='flex gap-5'>
                <Filho nome="Hudson" sobrenome={pessoa.sobrenome} />                
                <Filho nome="Arielle" sobrenome={pessoa.sobrenome} />                
                <Filho nome="Gleisson" sobrenome={pessoa.sobrenome} />                
                <Filho nome="Heverson" sobrenome={pessoa.sobrenome} />
            </div>
        </div>
        </>
    )
}