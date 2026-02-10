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
        console.log("🛠️ Hook: httpPOST Started with URL:", url);
        try {
            setLoading(true)
            const sendRequest = await fetch(url, {
                method, // hum yaha method default POST nahi rakhenge bcoz in casePUT method lgani hui then issue aa jayega
                headers,
                // credentials: "include",
                body: isNormal ? JSON.stringify(payload) : payload
            })
                  console.log("Hook: Fetch Completed. Status:", sendRequest.status);
                  const convertResponseToJson = await sendRequest.json()
                  console.log("JSON Parsed:", convertResponseToJson);
            setLoading(false)
            if (sendRequest.ok) {
                console.log("🟢 Setting Success Toast");
                setStatus("success")
                setMessage( "Operation Successful");

            }
            else{
                console.log(" Setting error Toast");
                console.log("toast error")
                setStatus("error");
        setMessage(convertResponseToJson.message || "Something went wrong");
     
            }
            return convertResponseToJson;

        } catch (error) {
            console.error("==Error==:", error);
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