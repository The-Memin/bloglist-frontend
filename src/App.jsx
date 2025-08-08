import LoginForm from './components/LoginForm'
import useLogin from "./hooks/useLogin"
import useBlogs from './hooks/useBlogs'
import Blogs from './components/Blogs'
import Notification from './components/Notification'
import useNotification from './hooks/useNotification'

const App = () => {
  const { notificationMessage, setNotification } = useNotification()
  const {
    blogs,
    addNewBlog
  } = useBlogs(setNotification)
  const { username, password, user,
          handleChangeUsername, handleChangePassword, handleLogin, handleLogOut
  } = useLogin(setNotification)


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
          <LoginForm 
            username={username}
            password={password}
            onChangeUsername={handleChangeUsername}
            onChangePassword={handleChangePassword}
            onLogin={handleLogin}
          />:
          <Blogs blogs={blogs} addNewBlog={addNewBlog} user={user} onLogOut={handleLogOut}/>
      }
    </div>
  )
}

export default App