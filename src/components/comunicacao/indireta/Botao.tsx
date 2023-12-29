interface BotaoProps{
    clique: (valor: number) => void    
}
export default function Botao(props: BotaoProps){
    return (
        <div className="flex bg-slate-400">
            <button className="w-full font-black size-10 "
            onClick={() => props.clique(10)}>
                +
            </button>
         </div>
    )
}