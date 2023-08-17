import { Divider } from '@mui/material'
import { Stack } from '@mui/system'
import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button'
import { MyImages } from '../../atoms/Image'
import { MyTextField } from '../../atoms/TextField'
import MyText from '../../atoms/Typography'
import SocialLogin from '../../molecules/SocialLogin'
 
const SignUp = () => {
    const [pwd,setPwd]= useState(true)
    const [error,setError]=useState(false)
    const Login=[
        {name:'Google',path:'./Images/google.svg'},
        {name:'Stripe',path:'./Images/stripe.svg'},
        {name:'Xero',path:'./Images/xero.svg'}
      ]
    const Navigate=useNavigate()

    const [gmail,setGmail]=useState(false)
    const [name,setName]=useState("")

    const isValidgmail=(gm:string)=>{
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(gm))
            return true
        else
        return false
    }
    const isStrongPassword= (pw:string) =>{
        if(pw.length<8)
            return true
        else{
            const uppercaseRegExp   = /(?=.*?[A-Z])/
            const lowercaseRegExp   = /(?=.*?[a-z])/
            const digitsRegExp      = /(?=.*?[0-9])/
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/

            return (!(uppercaseRegExp.test(pw))) || (!(lowercaseRegExp.test(pw)) || (!(digitsRegExp.test(pw))) || (!(specialCharRegExp.test(pw))) )
        }
    }
      
    return (
    <>

        <Stack sx={{marginInline:'12vw',marginTop:'10vh'}}>
            
            <MyText variant='title' color={'text.primary'} sx={{paddingBottom:'6vh'}}>Sign Up ✨</MyText>
            
            <Stack spacing={6} >
                <MyTextField data-testid='name' variants={'standard'} icon={<MyImages src={"./Images/smile.svg"} />} placeholder="Your Name"
                onChange={(e:any)=>{
                    setName(e.target.value)
                }}
                 />
                <MyTextField data-testid='gmail' variants={'standard'} icon={<MyImages src={"./Images/Basic/email.svg"} />} placeholder="Email Address"
                onChange={(e:any)=>{
                    if(isValidgmail(e.target.value)){
                        setGmail(true)
                    }
                    else{
                        setGmail(false)
                    }

                }}
                helperText={ gmail? "Enter a valid Gmail": ""}
                error={gmail}
                />
                <MyTextField data-testid='pwd' variants={'standard'} icon={<MyImages src={"./Images/Basic/lock.svg"} />} type={pwd ? 'password' : 'text'} 
                    placeholder="Password" click={()=>{setPwd((t)=>!t)}} 
                    endicon={pwd ? <MyImages src={"./Images/Basic/eye.svg"} /> : <MyImages src={"./Images/Basic/eye-slash.svg"} />}
                    onChange={(e:any)=>{
                        if (isStrongPassword(e.target.value)){
                                setError(true)
                            }
                        else{
                            setError(false)
                        }
                    }}
                    helperText={ error? "Min length is 8, requied atleast 1 uppercase, 1 lowercase,1 special character and a digit" : ""}
                    error={error}
                    />
                
            </Stack>
            
            <Stack maxWidth={'28vw'} marginTop={'4.5vh'} marginBottom={'5vh'} gap={6}>

                <Button data-testid='Signup' size='large' variant={'contained'} color={'primary'} name={'Sign up'} 
                disabled={!(name.length>0 && gmail===false && error===false)} 
                
                sx={{opacity:!(name.length>0 && gmail===false && error===false)?0.56:'none',height:'7.8vh',borderRadius:"12px",textTransform:'none',color:'grey.500'}}/>

                <MyText variant='body2' color={'text.secondary'}>
                    <Divider color='grey.600'>Or</Divider> 
                </MyText>
            </Stack>
            
            <Stack direction={'row'} spacing={'1vw'}>
                {
                    Login.map((item)=>
                        <SocialLogin data-testid={item.name} children={item.name} img={item.path}></SocialLogin>
                    )
                }
                
            </Stack>
            
            <Stack direction={'row'} marginTop={'4vh'}>
                <MyText variant='h3' color={'text.disabled'}>
                    Already have an account?
                </MyText>
                <Button data-testid={'Login'} variant={'text'} color={'primary'} sx={{textTransform:'none',color:'primary.400'}} onClick={()=>{Navigate('/')}}>
                        <MyText variant='button' color={'primary.400'} textTransform='none' >
                            Login
                        </MyText>
                </Button>
            </Stack>
            
        </Stack>
      
    </>
  )
}

export default SignUp
