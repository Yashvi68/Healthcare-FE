import { forwardRef } from "react"

export const Button =forwardRef((props , ref)=>{
    const {type , children,...restProps} = props
    return(
        <>
        <button 
        type={type}
        ref={ref}
        {...restProps}
        >
            {children}
        </button>
        </>
    )
})