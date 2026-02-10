export const filterByRole =  (data, loggedInRole)=>{
    let allowedRoles = []
    allowedRoles = data.filter((curItem)=>{
        return curItem?.role?.includes(loggedInRole)
    })
}