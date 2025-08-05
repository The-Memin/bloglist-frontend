import { useState, useEffect } from "react";
import  loginService  from '../services/login'
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
                'loggedBlogUser', JSON.stringify(user)
            )
            console.log(user)
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (error) {
            console.error('Wrong credentials')
        }
    }

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            setUser(user)

        }
    },[])

    return {
        username,
        password,
        user,
        handleChangeUsername,
        handleChangePassword,
        handleLogin
    }
}