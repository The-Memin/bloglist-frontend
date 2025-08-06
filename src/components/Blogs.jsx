import Blog from '../components/Blog'
const Blogs = ({blogs, user, onLogOut}) => {

    return(
        <div>
            <h2>blogs</h2>
            <div>
              <span>{user.name} logged in</span><button onClick={onLogOut}>log out</button>
            </div><br />
            {blogs.map(blog =>
              <Blog key={blog.id} blog={blog} />
            )}
        </div>
    )
}

export default Blogs