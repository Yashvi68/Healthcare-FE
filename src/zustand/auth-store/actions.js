import { useAuthStore } from "."

export const setUserDetails = (res) => {
    useAuthStore.setState(() =>({ userDetails: res}))
}