import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAjout } from '../redux/action'
import { FcAddDatabase } from "react-icons/fc";
const AjouterUser = () => {
    const dispatch=useDispatch()
     const [id, setId] = useState("")
     const [nom, setNom] = useState("")
     const [prenom,setPrenom] = useState("")
     const [ville,setVille] = useState("")
     const [photo,setPhoto] = useState("")
     const handleSubmit=(e)=>{
      e.preventDefault();
     const user={
        photo,
        id,
        nom,
        prenom,
        ville
      }
      user.photo&&dispatch(handleAjout(user));
      setId("");
      setNom("");
      setPrenom("");
      setVille("");
      setPhoto("");

     }
  return (
    <div className='card'>
        <form onSubmit={handleSubmit}>
            <label className='label'>Id User</label><br />
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)} className='zone' />
            <br />
            <label className='label'>Nom User</label>
            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} className='zone'/>
            <br />
            <label className='label'>Prenom User</label>
            <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)} className='zone'/>
            <br />
            <label className='label'>Ville User</label>
            <input type="text" value={ville} onChange={(e)=>setVille(e.target.value)} className='zone'/>
            <br />
            <label className='label'>Photo User</label><br />
            <input type="text" value={photo} onChange={(e)=>setPhoto(e.target.value)} className='zone' />
            <br />
            <button type="submit" className='botton'><FcAddDatabase size='25'/></button>
        </form>
    </div>
  )
}

export default AjouterUser