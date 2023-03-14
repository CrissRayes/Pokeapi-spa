import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const Pokemon = () => {
  const [character, setCharacter] = useState([])
  const { id } = useParams()

  const getCharacter = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    const dataCharacter = {
      name: data.name,
      img: data.sprites.other.home.front_default,
      base_experience: data.base_experience,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities,
      types: data.types,
    }
    setCharacter(dataCharacter)
    return dataCharacter
  }

  useEffect(() => {
    getCharacter()
  }, [])

  return (
    <>
      <Container className='mt-5'>
        <div className='row'>
          <div className='col'>
            <img
              src={character.img}
              alt={character.name}
            />
          </div>
          <div className='col'>
            <h3>{character.name}</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Pokemon
