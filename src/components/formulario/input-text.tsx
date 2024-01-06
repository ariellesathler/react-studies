import { useState } from "react"

interface InputTextProps{
    key: string
    label: string,
    type: string,
    placeholder:string,
    onChange?: (valor: string) => void 
}

export default function InputText(props: InputTextProps){
    
    return (
        <>
        <div className="flex gap-2">
            <label>{props.label}</label>
            <input className="" 
                key={props.label}
                type={props.type} 
                placeholder={props.placeholder}
                onChange={e=> props.onChange && props.onChange(e.target.value)}
            />
        </div>

        </>
    )

}