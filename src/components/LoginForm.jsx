const LoginForm = ({username, password, onLogin, onChangePassword, onChangeUsername }) => {
   
    return(
        <div>
            <h2>Log in to application</h2>
            <form onSubmit={onLogin}>
                <div>
                    <label htmlFor="username">username</label>
                    <input 
                        type="text" 
                        name="username"
                        value={username}
                        onChange={({target}) => onChangeUsername(target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={({target}) => onChangePassword(target.value)}
                    />
                </div>
                <button type="submit">login</button>
            </form>
        </div>
        )
}

export default LoginForm