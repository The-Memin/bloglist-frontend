import { useState } from 'react'
const Blog = ({ blog, updateLikes, deleteBlog, user }) => {
    const [visible, setVisible] = useState(false)
    const showWithVisible = { display: visible ? '':'none' }
    const textVisibilityButton = visible ? 'hide' : 'view'
    const toggleVisibility = () => {
        setVisible(!visible)
    }

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    const updLikes = () => {
        updateLikes(blog)
    }
    return (
        <div style={blogStyle}>
            <div> Title: {blog.title} <button onClick={toggleVisibility}>{textVisibilityButton}</button></div>
            <div className="details" style={showWithVisible}>
                <div> URL: {blog.url} </div>
                <div> Likes: {blog.likes} <button onClick={updLikes}>like</button></div>
                <div> Author: {blog.author} </div>
                {
                    (user.username === blog.author) && <button onClick={() => deleteBlog(blog)} className="btn-remove">remove</button>
                }
            </div>
        </div>
    )
}

export default Blog