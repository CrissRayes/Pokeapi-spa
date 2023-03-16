import { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Mensaje from '../components/Mensaje'
import MyContext from '../my_context'

const Pokemones = () => {
  const navigate = useNavigate()
  const { id, setId } = useContext(MyContext)
  const [mensaje, setMensaje] = useState('')
  const opciones = [
    'pikachu',
    'charizard',
    'squirtle',
    'jigglypuff',
    'eevee',
    'gengar',
    'mewtwo',
    'mew',
    'lugia',
    'gyarados',
  ]

  const handleNavigate = () => {
    if (id !== '') {
      navigate(`/pokemon/${id}`)
    } else {
      setMensaje('Debes seleccionar un pokémon')

      setTimeout(() => {
        setMensaje('')
      }, 3000)
    }
  }

  return (
    <>
      <Container className='mt-5'>
        <h1>Pokemones</h1>
        <select
          className='form-select'
          value={id}
          onChange={e => setId(e.target.value)}
        >
          <option value=''>--Selecciona un pokémon--</option>
          {opciones.map((opcion, index) => (
            <option
              key={index}
              value={opcion}
            >
              {opcion}
            </option>
          ))}
        </select>
        <button
          className='btn-orange mt-3 mb-3'
          onClick={handleNavigate}
        >
          Buscar
        </button>
        {mensaje && <Mensaje tipo='alert-danger'>{mensaje}</Mensaje>}
      </Container>
    </>
  )
}

export default Pokemones
