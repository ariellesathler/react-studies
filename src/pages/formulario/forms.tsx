import InputText from "@/components/formulario/input-text";
import { useState } from "react";

export default function FormsPage(){

    const [value, setValue] = useState('')

    const onChange = function(texto:string){
        setValue(texto)
        console.log("Função de change" + texto)
    }

    function onSubmit(event: any){
        console.log("Função submit " + value)
        event.preventDefault();
    }
    return (
        <div className="content-center justify-center bg-zinc-400 ">
            <div className="flex-row gap-2 h-30 bg-red-400">
                <nav>
                    <ul>
                        <li>Pedidos</li>
                        <li>Estoque</li>
                        <li>Comandas</li>
                    </ul>
                </nav>
            </div>
            <div className="bg-zinc-300 w-1/2 self-center justify-self-center">
            <form >
                <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    This information will be displayed publicly so be careful what you share.
                </p>
                </div>
            </form>
            </div>
            {/* <form onSubmit={onSubmit}>
                <InputText key="nome" label="Nome" type="text"
                placeholder="Escreva o nome aqui"
                onChange={onChange}
                />
                <button className="border-emerald-300" type="submit">OK</button>
            </form> */}

 
        </div>
    )
}