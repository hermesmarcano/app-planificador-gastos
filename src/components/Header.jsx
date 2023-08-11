import NuevoPresupuesto from "./NuevoPresupuesto"


function Header({
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsValidPresupuesto}) {
  return (
    <header>
        <h1>Planificicador de gastos</h1>
      {isValidPresupuesto ? (
        <p>Control presupuesto</p>
      ) : (
        <NuevoPresupuesto
            presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}

        
    </header>
  )
}

export default Header
