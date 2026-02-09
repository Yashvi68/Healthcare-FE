import { useForm } from "react-hook-form" 
import { Link } from "react-router-dom"
import { Button } from "../../components/form/button"
import { Input } from "../../components/form/input"
import { buttons, links } from "../../components/constants/data"
import { LoginLayout } from "../../components/loginLayout"
import "../../components/loginLayout/style.css"

import loginImage from "../../assets/images/loginImage.png"

export const ForgotPassword = () => {
 
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm()

    const onSubmit = (data) => {
        console.log("==Forgot Password Data==", data)
        
    }

    return (
        <div className="main-container">
            <LoginLayout
                heading="Forgot Your Password?"
                subHeading="Enter your email to get the reset link!"
                imageSrc={loginImage}
                imageAlt="Forgot Password Illustration"
            >
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <Input
                        placeholder="Enter email"
                        {...register("email", {
                            required: true,
                            pattern: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
                        })}
                        
                        showErrors={errors?.email?.type === "required" || errors?.email?.type === "pattern"}
                        errorMsg={
                            errors?.email?.type === "required"
                                ? "Please enter email address"
                                : "Please enter valid email address"
                        }
                    />

                    
                    <Button type="submit" style={{ marginTop: '20px' }}>
                        {buttons.resetPassword} 
                    </Button>

                    
                    <div className="signup-footer" style={{ marginTop: '20px' }}>
                        <Link to="/login" className="signup-link" style={{ marginLeft: 0 }}>
                            &larr; Back to Login
                        </Link>
                    </div>

                </form>
            </LoginLayout>
        </div>
    )
}