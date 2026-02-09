import { forwardRef } from "react"

export const Button =forwardRef((props , ref)=>{
    const {type , className,children,...restProps} = props
    return(
        <>
        <button 
        type={type}
        ref={ref}
        className={className}
        {...restProps}
        >
            {children}
        </button>
        </>
    )
})