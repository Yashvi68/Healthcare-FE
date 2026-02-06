export const httpPost = async(url , method = "POST")=>{
    try {
        const response = await fetch(url, {
            method : method
        })
        const data = await response.json()
    } catch (error) {
        
    }
}