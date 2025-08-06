import LoginForm from './components/LoginForm'
import useLogin from "./hooks/useLogin"
import useBlogs from './hooks/useBlogs'
import Blogs from './components/Blogs'

const App = () => {
  const {
    blogs,
    addNewBlog
  } = useBlogs()
  const {
        username,
        password,
        user,
        handleChangeUsername,
        handleChangePassword,
        handleLogin,
        handleLogOut
  } = useLogin()
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
          <Blogs blogs={blogs} addNewBlog={addNewBlog} user={user} onLogOut={handleLogOut}/>
      }
    </div>
  )
}

export default App