import './creeCompte.css'
import Logo from '../Components/siginCommun/logoSigin';
import Title from '../Components/siginCommun/title';
import { MyForm } from '../Components/siginCommun/inputForm';
import { NavLink } from 'react-router-dom';
import MessageLink from '../Components/siginCommun/messageLink';






 function Account(){

  



  return (
    <div className='creeCompte'>
    <Logo/>
     
  <form className='formAccount'>
 
  <Title 
   title={'Create an account'}
   subTitle={'Start your 30-day free trial.'}/>
  <div className='form'>
  <label>Name*</label>
      <input className='put'
        type="name"
        
        placeholder="Entrez votre Name"
      />
       <MyForm
       nameButton='sing in'/>
     <MessageLink 
     msg="Already have an account?"
     distination="Log in"
     linked='/'/>
      </div>
    </form>
   
    </div>
  )
}

export default Account;
