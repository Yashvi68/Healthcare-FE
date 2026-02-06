import { forwardRef } from "react"

export const Button =forwardRef((props , ref)=>{
    const {type , children} = props
    return(
        <>
        <button 
        type={type}
        ref={ref}
        >
            {children}
        </button>
        </>
    )
})