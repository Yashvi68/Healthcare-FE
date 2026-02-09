import { Input } from "../../components/form/input"
import { LoginLayout } from "../../components/loginLayout"
import { useForm } from "react-hook-form"
import loginImage from "../../assets/images/loginImage.png"
import {Link} from "react-router"
import { Button } from "../../components/form/button"
import { buttons, links } from "../../components/constants/data"
import { httpPost } from "../../services/httpPOST"


export const SignUp = () =>{
     const form = useForm()
   
        const { register,
            formState: { errors },
            handleSubmit,
            watch
        } = form

        const onSubmit = async(data) => {
        // console.log("==Signup Data==", data)
        // api call 
        const formData = new FormData()
        console.log("==formdata==",formData)
        formData.append("email",data.email) //key-value
        formData.append("password",data.password) //key-value

        const res = await httpPost(api.signup ,formData)

        //checking result from backend
        if(res.status){
            console.log("User registration done !")
        }else{
            console.log("User registration failed")
        }
    }
    return(
        <div>
            <LoginLayout
            heading="Create Account"
                subHeading="Sign up to get started!"
                imageSrc={loginImage}
                imageAlt="Signup Illustration"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <Input
                     placeholder="Full Name"
                        {...register("fullName", { required: true, minLength: 3 })}
                        showErrors={errors?.fullName?.type === "required" || errors?.fullName?.type === "minLength"}
                        errorMsg={errors?.fullName?.type === "required" ? "Name is required" : "Name must be at least 3 chars"}
                    /> */}

                      <Input
                        placeholder="Email"
                        {...register("email", {
                            required: true,
                            pattern: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
                        })}
                        showErrors={errors?.email?.type === "required" || errors?.email?.type === "pattern"}
                        errorMsg={errors?.email?.type === "required" ? "Email is required" : "Invalid email address"}
                    />

                    <Input 
                     placeholder="Password"
                        type="password" 
                        {...register("password", {
                            required: true,
                             pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=$$$${};':"\\|,.<>\/?`~])[A-Za-z\d!@#$%^&*()_+\-=$$$${};':"\\|,.<>\/?`~]{6,}$/
                        })}
                        showErrors={errors?.password?.type === "required" || errors?.password?.type === "pattern"}
                        errorMsg={
                            errors?.password?.type === "required"
                                ? "Enter a password"
                                : "Must represent 6+ chars, 1 uppercase, 1 number, 1 special char"
                        }
                    />

                      {/* Confirm Password Input (New Logic) */}
                    <Input
                        placeholder="Confirm Password"
                        type="password"
                        {...register("confirmPassword", {
                            required: true,
                            // Validate checks if this value matches the watched 'password' value
                            validate: (val) => {
                                if (!val) return "Confirm your password"
                                if (watch("password") !== val) return "Passwords do not match"
                            },
                        })}
                        showErrors={errors?.confirmPassword} // showErrors checks for existence of error
                        errorMsg={errors?.confirmPassword?.message} // Display the message returned by validate
                    />

                    <Button type="submit">
                        {buttons.signup}
                    </Button>

                    <div className="signup-footer">
                        <p className="signup-text">
                            {links.loginText}{" "}
                            <Link to="/login" className="signup-link">
                                {links.loginLink}
                            </Link>
                        </p>
                    </div>
                </form>
            </LoginLayout>
        </div>
    )
}