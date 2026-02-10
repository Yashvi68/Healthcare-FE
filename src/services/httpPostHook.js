import { useState } from "react"

export const HttpPostHook = ( method = "POST",isNormal = false) =>{
    const[isLoading , setLoading] = useState(false)
    const normalHeader = {
        "Content-Type" : "application/json",
        accept : "application/json"
    }

    const documentHeader = {
        accept : "data",
    }

    const headers = isNormal ? normalHeader : documentHeader

    const httpPOST = async(url, payload)=>{
    try {
        setLoading(true)
        const sendRequest = await fetch(url, {
            method, // hum yaha method default POST nahi rakhenge bcoz in casePUT method lgani hui then issue aa jayega
          headers ,
          credentials : true,
          body : isNormal ? JSON.stringify(payload) : payload 
        })

        const convertResponseToJson = await sendRequest.json()
        setLoading(false)
        console.log("==response==",convertResponseToJson)
    } catch (error) {
        
    }
    finally{
        setLoading(false)
    }
    }
}