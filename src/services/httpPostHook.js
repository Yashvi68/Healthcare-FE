import { useState } from "react"
import { setMessage, setStatus } from "../zustand/toastMessage-store/action"

export const HttpPostHook = (method = "POST", isNormal = false) => {
    const [isLoading, setLoading] = useState(false)
    const normalHeader = {
        "Content-Type": "application/json",
        accept: "application/json"
    }

    const documentHeader = {
        accept: "data",
    }

    const headers = isNormal ? normalHeader : documentHeader

    const httpPOST = async (url, payload) => {
        try {
            setLoading(true)
            const sendRequest = await fetch(url, {
                method, // hum yaha method default POST nahi rakhenge bcoz in case PUT method lgani hui then issue aa jayega
                headers,
                // credentials: "include",
                body: isNormal ? JSON.stringify(payload) : payload
            })
                  const convertResponseToJson = await sendRequest.json()
            setLoading(false)
            if (sendRequest.ok) {
                setStatus("success")
                setMessage( "Operation Successful");

            }
            else{
                setStatus("error");
        setMessage(convertResponseToJson.message || "Something went wrong");
     
            }
            return convertResponseToJson;

        } catch (error) {
            // return {
            //     status: false,
            //     error: error.message || "Network Error"
            // }
            setStatus("error")
            setMessage(error.message || "Network connection failed");
            return null;
        }
        finally {
            setLoading(false)
        }
    }
    return{isLoading,httpPOST}
}