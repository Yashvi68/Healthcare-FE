export const httpPost = async (url, body) => {
    try {
        // Note: When sending FormData, we do NOT set 'Content-Type': 'application/json'.
        // The browser it automatically ; sets it to 'multipart/form-data' with the boundary.
        
        const response = await fetch(url, {
            method: "POST",
            // headers: { ...authHeadersIfAny },
            body: body, 
        });

        //waiting for server reply
        const data = await response.json();

                return {
            status: response.ok, 
            statusCode: response.status,
            data: data
        };

    } catch (error) {
        console.error("API Call Error:", error);
        return {
            status: false,
            error: error.message || "Network Error"
        };
    }
};