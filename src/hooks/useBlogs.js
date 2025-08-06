import { useState, useEffect } from "react";
import blogService from '../services/blogs'

export default function useBlogs(){
    const [blogs, setBlogs] = useState([])

    const addNewBlog = async newBlog =>{
        const createdBlog = await blogService.create(newBlog)
        setBlogs(prev => [...prev, createdBlog])
    }

    useEffect(() => {
        blogService.getAll().then(blogs =>
            setBlogs( blogs )
        )  
    }, [])

    return {
        blogs,
        addNewBlog
    }
}