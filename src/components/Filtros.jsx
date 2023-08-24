import { useState, useEffect } from "react";

import React from 'react'

function Filtros({filtro, setFiltro}) {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
            <div>Filtrar Gastos</div>
            <select
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
            >
            <option value=''>--- Todas las categorias ---</option>
    <option value='ahorro'> Ahorro </option>
    <option value='comida'> Comida </option>
    <option value='casa'> Casa </option>
    <option value='ocio'> Ocio </option>
    <option value='varios'>Varios</option>
    <option value='salud'>Salud</option>
    <option value='subscripciones'>Subscripciones</option>
            </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros
