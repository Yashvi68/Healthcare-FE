export const Image = ( props) =>{
    const { src, alt, className, ...rest} = props
    return(
        <>
        <img
            src={src}
            alt={alt || "app-image"} 
            className={className}
            loading="lazy" 
            {...rest} 
        />
        </>
    )
}