import { useState, useEffect } from "react";
import blogService from '../services/blogs'

export default function useBlogs(setNotification){
    const [blogs, setBlogs] = useState([])
    const [notificationMessage, setNotificationMessage] = useState(null)

    const resetNotificationMessage = () => {
        setNotificationMessage(null)
    }

    const addNewBlog = async newBlog =>{
        try {
            const createdBlog = await blogService.create(newBlog)
            setBlogs(prev => [...prev, createdBlog])
            if (setNotification) {
                setNotification({
                    content: `a new blog  You're NOT gonna need it! by ${createdBlog.author} added`,
                    type: "success"
                })
            }else{
                console.error(`a new blog  You're NOT gonna need it! by ${createdBlog.author} added`)
            }
        } catch (error) {
            setNotification({
                content: error.response.data.error,
                type: 'error'
            })
        }
    }

    useEffect(() => {
        blogService.getAll().then(blogs =>
            setBlogs( blogs )
        )  
    }, [])

    return {
        blogs,
        notificationBlog:{ message: notificationMessage, resetMessage: resetNotificationMessage },
        addNewBlog
    }
}