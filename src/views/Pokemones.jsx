import { useState, useContext } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import MyContext from '../my_context'

const Pokemones = () => {
  const navigate = useNavigate()
  const { id, setId } = useContext(MyContext)

  return (
    <>
      <Container className='mt-5'>
        <h1>Pokemones</h1>
        <select
          className='form-select'
          value={id}
          onChange={e => setId(e.target.value)}
        >
          <option value=''>Selecciona un pokemon</option>
          <option value='bulbasaur'>Bulbasaur</option>
          <option value='pikachu'>Pikachu</option>
          <option value='venusaur'>Venusaur</option>
          <option value='charizard'>Charizard</option>
          <option value='squirtle'>Squirtle</option>
          <option value='blastoise'>Blastoise</option>
          <option value='caterpie'>Caterpie</option>
          <option value='metapod'>Metapod</option>
          <option value='butterfree'>Butterfree</option>
          <option value='weedle'>Weedle</option>
          <option value='kakuna'>Kakuna</option>
        </select>
        <button
          className='btn btn-primary mt-3'
          onClick={() => navigate(`/pokemon/${id}`)}
        >
          Buscar
        </button>
      </Container>
    </>
  )
}

export default Pokemones
