//telling backend if sending text or file
const normalHeader = {
    "Content-Type": "application/json",
    "Accept": "application/json",
}

//yaha hum content-type nhi likhenge bcoz browser auomatically adds multipart/form-data
const documentHeader = {
    accept: "application/json",
};

export const httpPost = async (url, payload, isFormData = false) => {
    try {
        // Note: When sending FormData, we do NOT set 'Content-Type': 'application/json'.
        // The browser it automatically ; sets it to 'multipart/form-data' with the boundary.
        const headers = isFormData ? documentHeader : normalHeader;

        //2. if JSON we will stringify it else we will let it be
        // const body = isFormData ? payload : JSON.stringify(payload)

        const response = await fetch(url, {
            method: "POST",
            headers,
            body:isFormData ? payload : JSON.stringify(payload),
            // body: body, use it once same key-value
        });
        
        //waiting for server reply and parse response
        const dataRes = await response.json();
        console.log("==dataRes==",dataRes)

        return {
            status: response.ok,
            statusCode: response.status,
            data: dataRes
        };

    } catch (error) {
        console.error("==Error==:", error);
        return {
            status: false,
            error: error.message || "Network Error"
        };
    }
};