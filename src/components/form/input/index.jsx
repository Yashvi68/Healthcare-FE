import { forwardRef } from "react"
export const Input = forwardRef((props, ref) => {
    const { label,
        children,
        showErrors,
        errorMsg,
        ...restInputParams
    } = props

    return (

        <div className="input-container">
            {label?.length && (
                <div className="label-field">
                    <label>
                        {label}
                    </label>
                </div>)}

            <div className="inputField">
                <input
                    ref={ref}
                    {...restInputParams
                    }
                />
                {children}
            </div>
            {showErrors && <p className="errorMessage">{errorMsg}</p>}
        </div>
    )
})