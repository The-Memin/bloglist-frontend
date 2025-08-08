import Blog from '../components/Blog'
import CreateBlogForm from './CreateBlogForm'

const Blogs = ({blogs, addNewBlog, user, onLogOut}) => {
    

    return(
        <div>
            <div>
              <span>{user.name} logged in</span><button onClick={onLogOut}>log out</button>
            </div>
            <CreateBlogForm addNewBlog={addNewBlog}/>
            {blogs.map(blog =>
              <Blog key={blog.id} blog={blog} />
            )}
        </div>
    )
}

export default Blogs