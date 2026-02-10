import { Button } from "../../components/form/button"
import { Input } from "../../components/form/input"
import { buttons, links } from "../../constants/data"
import { useForm } from "react-hook-form"
import { LoginLayout } from "../../components/loginLayout"
import loginImage from "../../assets/images/loginImage.png"
import {Link} from "react-router"
import styles from "./style.module.scss";
import { httpPost } from "../../services/httpPOST"
import { api } from "../../constants/api"
import { useAuthStore } from "../../zustand/auth-store"
import { setUserDetails } from "../../zustand/auth-store/actions"

export const Login = () => {

    const {userDetails} = useAuthStore();
    // console.log(userDetails, 'userDetails')
    const {register,
        formState: { errors },
        handleSubmit} = useForm()
    // console.log("==form==", form)

    // console.log("==register==", register)
     const onSubmit = async(data) => {
        // console.log("==data==",data)
        // const formData = new FormData()
        // formData.append("email",data.email)
        // formData.append("password",data.password)

// *********PAYLOAD : FE JO DATA BE KO BHEJTA THAT IS PAYLOAD*************
const payload = {
    email : data.email,
    password : data.password
}
console.log("==payload==",payload)
    const res = await httpPost(api.login, payload, false); 
            // setUserDetails("loggedin")
        if(res.status) {
            setUserDetails(res.data);
            console.log("Login Success", res.data);

        //saving token that BE is sending
         localStorage.setItem('token', res.data.token);
    } else {
        console.log("Login Failed", res.data);
    }
  };
    return (
       
            <LoginLayout
                heading="Welcome Back"
                subHeading="Sign in to continue to your account."
                imageSrc = {loginImage}
            >
                <form 
                onSubmit={handleSubmit(onSubmit)}
                className={styles.formContainer}
                >
                    <Input
                        placeholder="Email"
                        className = {styles.inputBox}
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
                        className = {styles.inputBox}
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
                <div className={styles.forgotPassword} >
                        <Link to="/forgot-password" className={styles.authLink}>
                            {links.forgotPassword || "Forgot Password?"}
                        </Link>
                    </div>
                    {/*signin button */}
                    <Button
                        type="submit"
                        className={styles.primaryBtn}
                    >
                        {buttons.signin}
                    </Button>

                     {/*  Sign Up */}
                    {/* <div className="signup-footer">
                        <p className="signup-text">
                            {links.signupText}{" "}
                            <Link to="/signup" className="signup-link">
                                {links.signupLink}
                            </Link>
                        </p>
                    </div> */}
                </form>
            </LoginLayout>


     
    )
}