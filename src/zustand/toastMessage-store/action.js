import { useToastStore } from "."

export const setMessage = ((res)=>{
    useToastStore.setState(()=>({message:res}))
})

export const setStatus = ((res)=>{
    useToastStore.setState(()=>({status:res}))
})

export const clearMessage = ((res)=>{
    useToastStore.setState(()=>({message : null}))
})