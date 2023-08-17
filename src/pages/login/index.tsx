import React from 'react'
import Leftpannel from '../../components/organisms/Leftpannel'
import Login from '../../components/organisms/Login'
import Basic from '../../components/templates/Basic'


const LoginPage = () => {
  return (
        <Basic leftChildren={<Leftpannel img={'./Images/Basic/login.svg'}/>} rightChildren={<Login />}/>
    
  )
}

export default LoginPage