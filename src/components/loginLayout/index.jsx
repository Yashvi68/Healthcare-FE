import "./style.css"
export const LoginLayout = ({heading , subHeading, children})=>{
    return(
        <div className="mainContainer">
            <figure>
                {/* <Image /> */}
                <img src="src\assets\login.png" alt="img" />
            </figure>
            <div className="loginDesc">
                <h2 className="heading">{heading}</h2>
                <p className="subHeading">{subHeading}</p>
                {children}
            </div>
        </div>
    )
}