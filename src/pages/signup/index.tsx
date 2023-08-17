import React from 'react'
import Leftpannel from '../../components/organisms/Leftpannel'
import SignUp from '../../components/organisms/signup'
import Basic from '../../components/templates/Basic'

const SignupPage = () => {
  return (
        <Basic leftChildren={<Leftpannel img={'./Images/Basic/Signup.svg'}/>} rightChildren={<SignUp/>}/>
    
  )
}

export default SignupPage