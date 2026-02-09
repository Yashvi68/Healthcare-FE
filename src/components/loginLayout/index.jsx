import "./style.css"
import { Image } from "../image"
export const LoginLayout = (props)=>{
    const {heading , subHeading, children, imageSrc,imageAlt,...restProps} = props
    return(
        <div className="mainContainer">
            <figure>
                <Image
                src = {imageSrc}
                alt = {imageAlt}
                />
            </figure>
            <div className="loginDesc">
                <h2 className="heading">{heading}</h2>
                <p className="subHeading">{subHeading}</p>
                {children}
            </div>
        </div>
    )
}