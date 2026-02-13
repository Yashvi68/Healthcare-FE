import { create } from "zustand";

const initialState = {
    storeModalKey : []
}

// yaha humne initialstate empty array liya not null kyunki:+=============
// "Collection" vs "Entity"
// Collection (Modal Keys)
// storeModalKey ek collection hai (list of things)
// Empty collection ka matlab: "zero items"
// Null collection ka matlab: "collection hi exist nahi karta" → Confusing


/**
 Entity (User Details)
userDetails ek entity hai (single object representing user)
Null entity ka matlab: "user logged in nahi hai" → Valid concept
Empty object ka matlab: "user exist karta hai lekin data nahi hai" → Confusing
 */

export const useModalStore = create(()=>({
    ...initialState,
}))