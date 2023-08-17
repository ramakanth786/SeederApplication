import theme from './themes';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import HomePage from './pages/Home';

const App=()=>{
  
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}/> 
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/home' element={<HomePage />}/> 
      </Routes>
    
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;