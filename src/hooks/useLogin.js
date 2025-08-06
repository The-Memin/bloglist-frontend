import { useState, useEffect } from "react";
import  loginService  from '../services/login'
import { LOGGED_BLOGAPP_USER } from '../constants/login'
import blogsService from "../services/blogs";

export default function useLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const handleChangeUsername = (u) => {
        setUsername(u)
    }

    const handleChangePassword = (p) => {
        setPassword(p)
    }
    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await loginService.login({username, password})

            window.localStorage.setItem(
                LOGGED_BLOGAPP_USER, JSON.stringify(user)
            )
            
            blogsService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (error) {
            console.error('Wrong credentials')
        }
    }

    const handleLogOut = () => {
        setUser(null)
        window.localStorage.removeItem(LOGGED_BLOGAPP_USER)  
    }

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem(LOGGED_BLOGAPP_USER )
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogsService.setToken(user.token)
        }
    },[])

    return {
        username,
        password,
        user,
        handleChangeUsername,
        handleChangePassword,
        handleLogin,
        handleLogOut
    }
}