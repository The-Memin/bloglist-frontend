import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import useLogin from "./hooks/useLogin"

const App = () => {
  const [blogs, setBlogs] = useState([])
   const {
        username,
        password,
        user,
        handleChangeUsername,
        handleChangePassword,
        handleLogin
  } = useLogin()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  return (
    <div>
      {
        user === null ? 
          <LoginForm 
            username={username}
            password={password}
            onChangeUsername={handleChangeUsername}
            onChangePassword={handleChangePassword}
            onLogin={handleLogin}
          />:
          <div>
              <p>{user.name} logged in</p>
              <h2>blogs</h2>
              {blogs.map(blog =>
                <Blog key={blog.id} blog={blog} />
              )}
          </div>
      }
    </div>
  )
}

export default App