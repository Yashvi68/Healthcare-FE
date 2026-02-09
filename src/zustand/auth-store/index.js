import { create } from "zustand";

const initialState = {
userDetails: null
}

export const useAuthStore = create(() => ({
    ...initialState
}))