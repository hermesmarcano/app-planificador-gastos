import { useState } from 'react'

import Header from './components/Header'
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg'




function App() {
  //// STATES ////
  // States de presupuesto
 const [presupuesto, setPresupuesto] = useState(0);
 const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
 // States de handling modal //
 const [modal, setModal] = useState(false)
 const [animarModal, setAnimarModal] = useState(false)


 const handleNuevoGasto = () => {
  setModal(true);
  setTimeout(() => {
    setAnimarModal(true);
   }, 500)
   
 }
  

  return (
    <>
     <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
     />
     {isValidPresupuesto && (
      <div className='nuevo-gasto'>
     <img src={IconoNuevoGasto}
      alt='Icono nuevo gasto'
      onClick={handleNuevoGasto}
     />

     </div>
     ) }
     
     {modal && <Modal
           setModal={setModal}   
           animarModal={animarModal}
           setAnimarModal={setAnimarModal}   
          />}
     
    </>
  )
}

export default App
