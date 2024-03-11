import './authentifier.css'


import Logo from '../Components/siginCommun/logoSigin';
import Title from '../Components/siginCommun/title';

import {MyForm } from '../Components/siginCommun/inputForm';
import { NavLink } from 'react-router-dom';


function Authentifier(){






  return (
    <div className='login'>
    <Logo/>
     
  <form className='formLogin'>
 
  <Title 
   title={'Log in to your account'}
   subTitle={'Welcome back! Please enter your details.'}/>
  <div className='form'>
 
        <MyForm nameButton='get start'>
       
     
        <div className='msgRemember'>
       
          <div className='check'>
        <input type="checkbox" />
      <p className='msg'>Remember for 30 day</p> </div>
      <NavLink to="/verification">    <button className='forgot' >Forgot password</button></NavLink> 
      </div>
    
        </MyForm >
      
      <div className='log'>
      <p className='existmsg'>Don’t have an account? </p>
      <NavLink to="/Account">    <button className='login' >Sign up</button></NavLink> 
      </div>
      </div>
      
    </form>
    </div>
  )
}

export default Authentifier;
