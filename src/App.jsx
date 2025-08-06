import LoginForm from './components/LoginForm'
import useLogin from "./hooks/useLogin"
import useBlogs from './hooks/useBlogs'
import Blogs from './components/Blogs'

const App = () => {
  const {
    blogs
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
  console.log(user)
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
          <Blogs blogs={blogs} user={user} onLogOut={handleLogOut}/>
      }
    </div>
  )
}

export default App