import LoginForm from './components/LoginForm'
import Togglable from "./components/Togglable"
import useLogin from "./hooks/useLogin"
import useBlogs from './hooks/useBlogs'
import Blogs from './components/Blogs'
import Notification from './components/Notification'
import useNotification from './hooks/useNotification'

const App = () => {
  const { notificationMessage, setNotification } = useNotification()
  const { blogs, addNewBlog } = useBlogs(setNotification)
  const { user, handleLogin, handleLogOut } = useLogin(setNotification)

  return (
    <div>
      {
        user===null?
          <h2>Log in to application</h2>:
          <h2>Blogs</h2>
      }
      {
        notificationMessage && <Notification message={notificationMessage.content} style={notificationMessage.type}/>
      }
      {
        user === null ? 
        <Togglable buttonLabel="login">
          <LoginForm onLogin={handleLogin}/>
        </Togglable>:
        <Blogs blogs={blogs} addNewBlog={addNewBlog} user={user} onLogOut={handleLogOut}/>
      }
    </div>
  )
}

export default App