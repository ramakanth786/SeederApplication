import { Divider, FormHelperText, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MyTextField } from "../../atoms/TextField";
import * as React from "react";
import Button from "../../atoms/Button";
import MyText from "../../atoms/Typography";
import SocialLogin from "../../molecules/SocialLogin";
import { MyImages } from "../../atoms/Image";
import { useState } from "react";
const login = [
  { name: "Google", path: "./Images/google.svg" },
  { name: "Stripe", path: "./Images/stripe.svg" },
  { name: "Xero", path: "./Images/xero.svg" },
];

function Login() {
  const Navigate = useNavigate();
  const [pwd, setPwd] = useState(true);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [email, setEmail] = useState(false);
  const isValidEmail = (gm: string) => {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(gm))
      return true;
    else return false;
  };
  return (
    <>
      <Stack
        sx={{ marginInline: "12vw", marginTop: "10vh" }}
      >
        <Stack spacing={4}>
          <MyText variant="h1" lineHeight="42px" color="text.primary" fontWeight="700" fontSize="36px" letterSpacing="-1.5%">Login to seeder✨</MyText>
          <FormHelperText sx={{ gap: "40px" }}>
            Enter email and password to login
          </FormHelperText>
        </Stack>
        <Stack spacing={6} marginTop="4vh" marginBottom="4vh">
          <MyTextField data-testid='gmail'
            placeholder="email"
            type="email"
            icon={<MyImages src={"./Images/email.svg"} />}
            variants={"standard"}
        
            onChange={(e:any)=>{
                if(isValidEmail(e.target.value) ){setusername(e.target.value)
                    
                    setEmail(true)
                }
                else{
                    setEmail(false)
                }
            }}
          />
          <MyTextField
            data-testid='pwd'
            variants={"standard"}
            icon={<MyImages src={"./Images/Basic/lock.svg"} />}
            onChange={(e: any) => setpassword(e.target.value)}
            type={pwd ? "password" : "text"}
            placeholder="Password"
            click={() => {
              setPwd((t) => !t);
            }}
            endicon={
              pwd ? (
                <MyImages src={"./Images/Basic/eye.svg"} />
              ) : (
                <MyImages src={"./Images/Basic/eye-slash.svg"} />
              )
            }
          />
          <Button
          data-testid={'Login'}
            variant="text"
            color={"primary"}
            name="Forgot password?"
            sx={{ width: "9.5vw", textTransform: "none", paddingLeft: "0vw" }}
            onClick={() => {
              Navigate("/forgotpassword");
            }}
          />

          <Button
            disabled={!(username.length > 0 && password.length > 0)}
            size="large"
            variant={"contained"}
            color={"primary"}
            name={"Continue"}
            sx={{
              width: "28vw",
              height: "7.8vh",
              borderRadius: "12px",
              textTransform: "none",
              color: "grey.500",
              opacity: !(username.length > 0 && password.length > 0)? 0.56:'none'
            }}
            onClick={()=>Navigate('/home')}
          />

          <MyText variant="body2" color={"text.secondary"}>
            <Divider color="grey.600" sx={{ width: "28vw" }}>
              Or
            </Divider>
          </MyText>
        </Stack>

        <Stack direction={"row"} spacing={"1vw"} >
          {login.map((item) => (
            <SocialLogin data-testid={item.name} children={item.name} img={item.path}></SocialLogin>
          ))}
        </Stack>
        <Stack
          direction={"row"}
          sx={{ paddingTop: "30px" }}
          alignItems="center"
        >
          <MyText variant="h3" color={"text.disabled"}>
            Don't have an account?
          </MyText>
          <Button
            data-testid={'Signup'}
            variant={"text"}
            name="Sign Up"
            color={"primary"}
            onClick={() => {
              Navigate("SignUp");
            }}
            sx={{
              textTransform: "none",
              color: "primary.400",
              variant: "button",
            }}
          />
        </Stack>
      </Stack>
    </>
  );
}


export default Login;
