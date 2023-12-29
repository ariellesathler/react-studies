import Avo from "@/components/comunicacao/direta/Avo"

export default function PaginaDireta(){
    return (
        <>
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <Avo nome="João Francisco" sobrenome="Santos"/>
        </div>
        </>
    )
}