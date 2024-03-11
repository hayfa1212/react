import { NavLink } from 'react-router-dom'
import './messageLink.css'


export default function MessageLink({linked,msg,distination}:{
    linked:string
    msg:string
    distination:string

}){


return(
    <div className='link'>
    <p className='existmsg'>{msg}</p>
     <NavLink to={linked}> <button className='login'>{distination}</button> </NavLink>
    </div>)


}