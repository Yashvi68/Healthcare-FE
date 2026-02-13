import { useModalStore } from "."

export const openModal = (res)=>{ // this res is modal ka key batana hai konsa modal open krna hai
    useModalStore.setState((state)=>({ //state param previous values ka track rakh raha hai 
        // for example openModal("settings")
        // state parameter :{storeModalKey : []}
        storeModalKey :[...state.storeModalKey , res] //[...[],"settings"]
        // then afterwards again aaya setModal("profile")
        // so aab :==state parameter== :{storeModalKey :["settings"]}
        // return {
    // storeModalKey: [...["settings"], "profile"] // ["settings", "profile"]
//   };
    }))
}

export const deleteModal = (...res) =>{
    useModalStore.setState((state)=>({
        storeModalKey: state.storeModalKey.filter((item) => !res.includes(item))
    }))
}

export const closeAllModal = ()=>{
    useModalStore.setState(()=>({
        storeModalKey : []
    }))
}