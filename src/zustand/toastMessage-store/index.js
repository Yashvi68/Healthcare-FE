import { create } from "zustand";

const initialState = {
    message : null,
    status:null
}
export const useToastStore = create(() =>({
    ...initialState
}))