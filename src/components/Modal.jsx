import CerrarBtn from '../img/cerrar.svg'
import React from 'react'

function Modal({setModal, animarModal, setAnimarModal}) {

const ocultarModal = () => {
    
    setAnimarModal(false)
    setTimeout(() =>{
        setModal(false);
    }, 500)
    
}

  return (

    <div className='modal'>

      <div className='cerrar-modal'><img
        src={CerrarBtn}
        alt='Cerrar modal'
        onClick={ocultarModal}
      /></div>

      <div>
        <form className={`formulario ${animarModal ? "animar" : '' }`}>
<legend>Nuevo Gasto</legend>
        </form>
      </div>
      
    </div>
  )
}

export default Modal
