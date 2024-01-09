import React,{createContext, useState} from 'react'

const initialValues = {
  username:'myapp',
  password:'Login123*'
}

export const AppContext = createContext(null);

function AppProvider({children}) {

  const[ loginState, setLoginState ] = useState(null);
  const[data, setData] = useState(null)

  const logIN = (user, pass) => {
     if(user == initialValues.username && pass == initialValues.password){
        setLoginState(user)
        return true
     }
     return false
  }

  const logOut = () => {
    setLoginState(null)
  }

  return (
    <AppContext.Provider
       value = {{
        loginState,
        setLoginState,
        logIN,
        logOut,
        data,
        setData
       }}
      >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
