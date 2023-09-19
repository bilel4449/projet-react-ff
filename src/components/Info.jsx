import React from 'react'
import { FcUndo } from 'react-icons/fc';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Info = ({user}) => {
    const {id}=useParams()
    const item =user.find((el)=>el.id==id);
  return (
    <div className='card'>
                <img src={item.photo} className='photo'/>
                 <h3 style={{fontFamily:'roboto',fontSize:'25px'}}>Id: {item.id }</h3>

        <h3 style={{fontFamily:'roboto',fontSize:'25px'}}>Nom: {item.nom}</h3>
        <h3 style={{fontFamily:'roboto',fontSize:'25px'}}>Prenom: {item.prenom}</h3>
        <h3 style={{fontFamily:'roboto',fontSize:'25px'}}>Ville: {item.ville}</h3>
     <Link to="/">
     <button className='botton'><FcUndo/></button>
     </Link>
    </div>
  )
}

export default Info