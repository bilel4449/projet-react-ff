import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleModif } from '../redux/action'
import Modal from 'react-modal';
import { FcApprove, FcBadDecision, FcDataBackup} from "react-icons/fc";
const ModifierUser = ({user}) => {
    const dispatch=useDispatch()
    
     const [nom, setNom] = useState(user.nom)
     const [prenom,setPrenom] = useState(user.prenom)
     const [ville,setVille] = useState(user.ville)
     const [photo,setPhoto] = useState(user.photo)

     const handleSubmit=(e)=>{
      e.preventDefault();
     const userModif={
        id:user.id,
        nom,
        prenom,
        ville,
        photo
      }
    
      dispatch(handleModif(userModif));
      closeModal()
    }
      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
      // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
      Modal.setAppElement('#root');
      const [modalIsOpen, setIsOpen] = React.useState(false);

      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    
  return (
    
    <div>
        <button onClick={openModal} className='botton'>
         <FcDataBackup size='25'/>
        </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} className='div'>
                <input type="text" value={nom} onChange={e=>setNom(e.target.value)} className='zone'/>
                <input type="text" value={prenom} onChange={e=>setPrenom(e.target.value)} className='zone'/>
                <input type="text" value={ville} onChange={e=>setVille(e.target.value)} className='zone'/>
                <input type="text" value={photo} onChange={e=>setPhoto(e.target.value)} className='zone'/>
                <div>
                    <button type="submit" className='botton'><FcApprove size='25'/></button>
                    <button onClick={closeModal} className='botton'><FcBadDecision size='25'/></button>
                </div>
            </form>
      </Modal>
    </div>
  )
}

export default ModifierUser