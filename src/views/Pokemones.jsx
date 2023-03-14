import { useContext } from 'react'
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
          <option value='pikachu'>Pikachu</option>
          <option value='charizard'>Charizard</option>
          <option value='squirtle'>Squirtle</option>
          <option value='jigglypuff'>Jigglypuff</option>
          <option value='eevee'>Eevee</option>
          <option value='gengar'>Gengar</option>
          <option value='mewtwo'>Mewtwo</option>
          <option value='mew'>Mew</option>
          <option value='lugia'>Lugia</option>
          <option value='gyarados'>Gyarados</option>
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
