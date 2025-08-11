import Blog from '../components/Blog'
import CreateBlogForm from './CreateBlogForm'
import Togglable from './Togglable'
import { useRef } from 'react'
const Blogs = ({blogs, addNewBlog, user, onLogOut}) => {
    const blogRef = useRef()

    const addBlog = (newBlog)=>{
      blogRef.current.toggleVisibility()
      addNewBlog(newBlog)
    }
    return(
        <div>
            <div>
              <span>{user.name} logged in</span><button onClick={onLogOut}>log out</button>
            </div>
            <Togglable buttonLabel="create a new blog" ref={blogRef}>
              <CreateBlogForm addBlog={addBlog}/>
            </Togglable>
            <div style={ {marginTop: "1em"} }>
              {blogs.map(blog =>
                <Blog key={blog.id} blog={blog} />
              )}
            </div>
        </div>
    )
}

export default Blogs