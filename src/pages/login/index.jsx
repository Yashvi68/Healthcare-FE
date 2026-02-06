import { Button } from "../../components/form/button"
import { Input } from "../../components/form/input"
import { buttons, links } from "../../components/constants/data"
import { useForm } from "react-hook-form"
import { LoginLayout } from "../../components/loginLayout"
import "../../components/loginLayout/style.css"
// import { Link } from "react-router"

export const Login = () => {
    const form = useForm()
    // console.log("==form==", form)

    const { register,
        formState: { errors },
        handleSubmit
    } = form
    // console.log("==register==", register)
     const onSubmit = (data) => {
        console.log("==data==",data)
  };
    return (
        <div className="main-container">
            <LoginLayout
                heading="Welcome Back"
                subHeading="Sign in to continue to your account."
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        placeholder="Email"
                        {...register("email", {
                            required: true,
                            pattern:
                                /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
                        }

                        )}
                        showErrors={
                            errors?.email?.type === "required" || //use optional chaining otherwise it will crash bcoz initial render pe empty object
                            errors?.email?.type === "pattern"
                        }
                        errorMsg={
                            errors?.email?.type === "required" ? "Email is required" : "Invalid email address"
                        }
                    ></Input>

                    {/*password */}
                    <Input
                        placeholder="Password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=$$$${};':"\\|,.<>\/?`~])[A-Za-z\d!@#$%^&*()_+\-=$$$${};':"\\|,.<>\/?`~]{6,}$/
                        })}
                        showErrors={errors?.password?.type === "required" || errors?.password?.type === "pattern"}
                        errorMsg={
                            errors?.password?.type === "required"
                                ? "Please enter password"
                                : "Password must be 6+ characters with 1 uppercase, 1 number, 1 special character"
                        }
                    >
                    </Input>

                    {/*forgot pasword */}
                    <a href="https://www.google.com">{links.forgotPassword}</a>

                    {/*signin button */}
                    <Button
                        type="submit"
                    >
                        {buttons.signin}
                    </Button>
                </form>
            </LoginLayout>


        </div>
    )
}