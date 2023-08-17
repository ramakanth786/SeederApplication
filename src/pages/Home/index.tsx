import React from 'react'
import Heading from '../../components/molecules/heading'
import Home from '../../components/organisms/home';
import Navbar from '../../components/organisms/navbar'
import Landing from '../../components/templates/Landing'

const month=["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const HomePage = () => {
  return (
    <Landing leftChildren={<Navbar bgcolor1={'elevation.color2'} bgcolor2={''} img1={'./Images/Home/Home.svg'} img2={'./Images/Home/coin.svg'}
    textcolor1={'text.primary'} textcolor2={'text.disabled'} />} 
    RightChildren={<Home/>} 
    Heading={<Heading Title={new Date().getHours()<12?'Good Morning ✋' : new Date().getHours()>16?'Good evening ✋' : 'Good afternoon ✋' }
    Text1={`${month[new Date().getMonth()]} ${new Date().getDate()}, ${new Date().getFullYear()} `}/>}></Landing>
  )
}

export default HomePage
