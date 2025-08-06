import { useState, useEffect } from "react";
import blogService from '../services/blogs'

export default function useBlogs(){
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  return {
    blogs
  }
}