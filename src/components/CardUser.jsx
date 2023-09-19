import React from 'react'
import { useDispatch } from 'react-redux'
import { handleSupprime } from '../redux/action'
import ModifierUser from './ModifierUser'
import { FcDeleteDatabase, FcInfo} from "react-icons/fc";
import { Link } from 'react-router-dom';
const CardUser = ({user}) => {
  const dispatch=useDispatch()
  return (
    <div className='card'>
        {/* <img src={user.photo} className='photo'/> */}
        {/* <h3 style={{fontFamily:'roboto',fontSize:'25px'}}>Id: {user.id }</h3> */}

        <h3 style={{fontFamily:'roboto',fontSize:'25px'}}>Nom: {user.nom}</h3>
        <h3 style={{fontFamily:'roboto',fontSize:'25px'}}>Prenom: {user.prenom}</h3>
        {/* <h3 style={{fontFamily:'roboto',fontSize:'25px'}}>Ville: {user.ville}</h3> */}
        <button onClick={()=>dispatch(handleSupprime(user.id))} className='botton' ><FcDeleteDatabase size='25'/></button>
        <ModifierUser user={user}/>
        <Link to={`/Info/${user.id}`}>        
    <button className='botton'><FcInfo/></button>
    </Link> 
    </div>
  )
}

export default CardUser